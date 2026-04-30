'use client';

import { useEffect, useRef } from 'react';

export function InteractiveBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const GOLD = '200, 168, 106'; // #C8A86A
    const INK = '245, 240, 232'; // #F5F0E8
    let W: number, H: number;
    const mouse = { x: -9999, y: -9999 };

    function resize() {
      if (!canvas) return;
      W = canvas.width = window.innerWidth;
      H = canvas.height = window.innerHeight;
    }
    resize();
    window.addEventListener('resize', resize);

    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    const handleMouseLeave = () => {
      mouse.x = -9999;
      mouse.y = -9999;
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);

    /* ── Nodes ── */
    class Node {
      x: number;
      y: number;
      vx: number;
      vy: number;
      r: number;
      alpha: number;
      isHex: boolean;
      hexR: number;
      hexRot: number;
      hexRotV: number;
      hexAlpha: number;

      constructor() {
        this.x = 0;
        this.y = 0;
        this.vx = 0;
        this.vy = 0;
        this.r = 0;
        this.alpha = 0;
        this.isHex = false;
        this.hexR = 0;
        this.hexRot = 0;
        this.hexRotV = 0;
        this.hexAlpha = 0;
        this.reset(true);
      }

      reset(init: boolean) {
        this.x = Math.random() * W;
        this.y = init ? Math.random() * H : Math.random() > 0.5 ? -30 : H + 30;
        this.vx = (Math.random() - 0.5) * 0.5;
        this.vy = (Math.random() - 0.5) * 0.5;
        this.r = Math.random() * 4 + 2;
        this.alpha = Math.random() * 0.7 + 0.4;
        this.isHex = Math.random() < 0.2;
        this.hexR = Math.random() * 30 + 15;
        this.hexRot = Math.random() * Math.PI;
        this.hexRotV = (Math.random() - 0.5) * 0.005;
        this.hexAlpha = Math.random() * 0.25 + 0.15;
      }

      update() {
        const dx = this.x - mouse.x;
        const dy = this.y - mouse.y;
        const dist = Math.hypot(dx, dy);
        if (dist < 150) {
          const f = (150 - dist) / 150;
          this.vx += (dx / dist) * f * 0.4;
          this.vy += (dy / dist) * f * 0.4;
        }
        this.vx *= 0.984;
        this.vy *= 0.984;
        this.x += this.vx;
        this.y += this.vy;
        this.hexRot += this.hexRotV;
        if (this.x < -40 || this.x > W + 40 || this.y < -40 || this.y > H + 40) {
          this.reset(false);
        }
      }

      draw() {
        if (!ctx) return;
        if (this.isHex) {
          ctx.save();
          ctx.translate(this.x, this.y);
          ctx.rotate(this.hexRot);
          ctx.beginPath();
          for (let i = 0; i < 6; i++) {
            const a = (Math.PI / 3) * i - Math.PI / 6;
            if (i === 0) {
              ctx.moveTo(Math.cos(a) * this.hexR, Math.sin(a) * this.hexR);
            } else {
              ctx.lineTo(Math.cos(a) * this.hexR, Math.sin(a) * this.hexR);
            }
          }
          ctx.closePath();
          ctx.strokeStyle = `rgba(${GOLD},${this.hexAlpha})`;
          ctx.lineWidth = 1;
          ctx.stroke();
          ctx.restore();
        } else {
          ctx.beginPath();
          ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(${GOLD},${this.alpha})`;
          ctx.fill();
        }
      }
    }

    const nodes = Array.from({ length: 50 }, () => new Node());

    /* ── Float symbols ── */
    const SYMS = ['%', '$', '↑', '×', '∑', '€', '#'];
    class FloatSym {
      x: number;
      y: number;
      speed: number;
      char: string;
      size: number;
      alpha: number;
      drift: number;

      constructor() {
        this.x = 0;
        this.y = 0;
        this.speed = 0;
        this.char = '';
        this.size = 0;
        this.alpha = 0;
        this.drift = 0;
        this.init();
      }

      init() {
        this.x = Math.random() * W;
        this.y = H + 40;
        this.speed = Math.random() * 0.4 + 0.15;
        this.char = SYMS[Math.floor(Math.random() * SYMS.length)];
        this.size = Math.random() * 18 + 14;
        this.alpha = Math.random() * 0.12 + 0.06;
        this.drift = (Math.random() - 0.5) * 0.3;
      }

      update() {
        this.y -= this.speed;
        this.x += this.drift;
        if (this.y < -40) this.init();
      }

      draw() {
        if (!ctx) return;
        ctx.font = `600 ${this.size}px sans-serif`;
        ctx.fillStyle = `rgba(${INK},${this.alpha})`;
        ctx.fillText(this.char, this.x, this.y);
      }
    }

    const syms = Array.from({ length: 35 }, () => {
      const s = new FloatSym();
      s.y = Math.random() * H;
      return s;
    });

    /* ── Draw loop ── */
    let animationFrameId: number;
    function loop() {
      if (!ctx) return;
      ctx.clearRect(0, 0, W, H);

      /* Mouse glow */
      if (mouse.x > 0) {
        const g = ctx.createRadialGradient(mouse.x, mouse.y, 0, mouse.x, mouse.y, 240);
        g.addColorStop(0, `rgba(${GOLD},0.09)`);
        g.addColorStop(0.5, `rgba(${GOLD},0.03)`);
        g.addColorStop(1, `rgba(${GOLD},0)`);
        ctx.beginPath();
        ctx.arc(mouse.x, mouse.y, 200, 0, Math.PI * 2);
        ctx.fillStyle = g;
        ctx.fill();
      }

      /* Connection lines */
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const d = Math.hypot(nodes[i].x - nodes[j].x, nodes[i].y - nodes[j].y);
          if (d < 180) {
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.strokeStyle = `rgba(${GOLD},${(1 - d / 180) * 0.35})`;
            ctx.lineWidth = 2;
            ctx.stroke();
          }
        }
      }

      nodes.forEach((n) => {
        n.update();
        n.draw();
      });
      syms.forEach((s) => {
        s.update();
        s.draw();
      });

      animationFrameId = requestAnimationFrame(loop);
    }

    loop();

    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{ display: 'block' }}
    />
  );
}

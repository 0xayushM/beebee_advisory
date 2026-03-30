'use client';

import { useRef, useMemo, useEffect, useState } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { OrbitControls, Html } from '@react-three/drei';
import * as THREE from 'three';
import { gsap } from 'gsap';

interface GlobeMarker {
  location: [number, number];
  label: string;
  color?: string;
  size?: number;
}

interface Globe3DSceneProps {
  radius: number;
  pointCount: number;
  landPointColor: string;
  pointSize: number;
  autoRotate: boolean;
  markers: GlobeMarker[];
  focusOn: [number, number] | null;
  landData: any;
}

const DEG2RAD = Math.PI / 180;
const EPSILON = 1e-9;

type SphericalPoint = [lon: number, lat: number];

interface BoundingBox {
  minLon: number;
  maxLon: number;
  minLat: number;
  maxLat: number;
}

interface ParsedPolygon {
  rings: SphericalPoint[][];
  bbox: BoundingBox;
}

function lonLatToCartesian(lon: number, lat: number, r: number) {
  const lonRad = lon * DEG2RAD;
  const latRad = lat * DEG2RAD;
  const y = r * Math.sin(latRad);
  const rXZ = r * Math.cos(latRad);
  const x = rXZ * Math.sin(lonRad);
  const z = rXZ * Math.cos(lonRad);
  return new THREE.Vector3(x, y, z);
}

function cartesianToLonLat(x: number, y: number, z: number): { lon: number; lat: number } {
  const radius = Math.sqrt(x * x + y * y + z * z);
  if (radius === 0) return { lon: 0, lat: 0 };
  const lat = Math.asin(Math.min(1, Math.max(-1, y / radius)));
  const lon = Math.atan2(x, z);
  return { lon, lat };
}

function parseLandPolygons(geoJson: any): ParsedPolygon[] {
  const polygons: ParsedPolygon[] = [];
  if (!geoJson?.features) return polygons;

  for (const feature of geoJson.features) {
    const geometry = feature.geometry;
    if (!geometry) continue;

    if (geometry.type === 'Polygon') {
      const polygon = convertPolygon(geometry.coordinates);
      if (polygon) polygons.push(polygon);
    } else if (geometry.type === 'MultiPolygon') {
      for (const coords of geometry.coordinates) {
        const polygon = convertPolygon(coords);
        if (polygon) polygons.push(polygon);
      }
    }
  }
  return polygons;
}

function convertPolygon(rings: number[][][]): ParsedPolygon | null {
  const converted = rings
    .map((ring) =>
      ring.map(([lon, lat]) => [lon * DEG2RAD, lat * DEG2RAD] as SphericalPoint)
    )
    .filter((ring) => ring.length >= 3);

  if (!converted.length) return null;

  return {
    rings: converted,
    bbox: computeBoundingBox(converted[0]),
  };
}

function computeBoundingBox(ring: SphericalPoint[]): BoundingBox {
  const bbox: BoundingBox = {
    minLon: Infinity,
    maxLon: -Infinity,
    minLat: Infinity,
    maxLat: -Infinity,
  };

  for (const [lon, lat] of ring) {
    bbox.minLon = Math.min(bbox.minLon, lon);
    bbox.maxLon = Math.max(bbox.maxLon, lon);
    bbox.minLat = Math.min(bbox.minLat, lat);
    bbox.maxLat = Math.max(bbox.maxLat, lat);
  }

  return bbox;
}

function isPointOnLand(lon: number, lat: number, landPolygons: ParsedPolygon[]): boolean {
  for (const polygon of landPolygons) {
    if (!isWithinBounds(lon, lat, polygon.bbox)) continue;
    if (isPointInsidePolygon(lon, lat, polygon.rings)) return true;
  }
  return false;
}

function isWithinBounds(lon: number, lat: number, bbox: BoundingBox): boolean {
  return (
    lon >= bbox.minLon - EPSILON &&
    lon <= bbox.maxLon + EPSILON &&
    lat >= bbox.minLat - EPSILON &&
    lat <= bbox.maxLat + EPSILON
  );
}

function isPointInsidePolygon(lon: number, lat: number, rings: SphericalPoint[][]): boolean {
  if (!rings.length) return false;
  if (!isPointInRing(lon, lat, rings[0])) return false;
  for (let i = 1; i < rings.length; i++) {
    if (isPointInRing(lon, lat, rings[i])) return false;
  }
  return true;
}

function isPointInRing(lon: number, lat: number, ring: SphericalPoint[]): boolean {
  let inside = false;
  for (let i = 0, j = ring.length - 1; i < ring.length; j = i++) {
    const xi = ring[i][0];
    const yi = ring[i][1];
    const xj = ring[j][0];
    const yj = ring[j][1];
    const denom = yj - yi;
    if (Math.abs(denom) < EPSILON) continue;
    const intersects = yi > lat !== yj > lat && lon < ((xj - xi) * (lat - yi)) / denom + xi;
    if (intersects) inside = !inside;
  }
  return inside;
}

function MarkerWithVisibility({ position, regionName, clientCount }: { position: THREE.Vector3; regionName: string; clientCount: string }) {
  const { camera } = useThree();
  const groupRef = useRef<THREE.Group>(null);
  const [isVisible, setIsVisible] = useState(true);

  useFrame(() => {
    if (groupRef.current && camera) {
      const markerPos = new THREE.Vector3();
      groupRef.current.getWorldPosition(markerPos);
      
      // Calculate if marker is facing the camera
      const markerDirection = markerPos.clone().normalize();
      const cameraDirection = camera.position.clone().normalize();
      const dotProduct = markerDirection.dot(cameraDirection);
      
      // Show marker only if it's on the front side (dot product > 0)
      setIsVisible(dotProduct > 0.1);
    }
  });

  return (
    <group ref={groupRef} position={position}>
      {/* Marker pin/dot */}
      <mesh visible={isVisible}>
        <sphereGeometry args={[0.04, 16, 16]} />
        <meshBasicMaterial
          color="#C9A961"
          transparent
          depthTest={false}
          depthWrite={false}
        />
      </mesh>
      
      {/* HTML Label */}
      {isVisible && (
        <Html
          position={[0, 0.15, 0]}
          center
          distanceFactor={8}
          style={{
            pointerEvents: 'none',
            userSelect: 'none',
          }}
        >
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '4px',
          }}>
            {/* Region name label */}
            <div style={{
              backgroundColor: '#C9A961',
              color: '#000',
              padding: '4px 12px',
              borderRadius: '4px',
              fontSize: '11px',
              fontWeight: '600',
              fontFamily: 'HelveticaNeue, Helvetica, Arial, sans-serif',
              whiteSpace: 'nowrap',
              textTransform: 'uppercase',
              letterSpacing: '0.5px',
            }}>
              {regionName}
            </div>
            
            {/* Client count box */}
            {clientCount && (
              <div style={{
                backgroundColor: '#fff',
                color: '#000',
                padding: '4px 10px',
                borderRadius: '4px',
                fontSize: '10px',
                fontWeight: '600',
                fontFamily: 'HelveticaNeue, Helvetica, Arial, sans-serif',
                whiteSpace: 'nowrap',
                border: '1px solid #C9A961',
              }}>
                {clientCount}
              </div>
            )}
            
            {/* Connector line */}
            <div style={{
              width: '2px',
              height: '20px',
              backgroundColor: '#C9A961',
              opacity: 0.6,
            }} />
          </div>
        </Html>
      )}
    </group>
  );
}

function Globe3DScene({ radius, pointCount, landPointColor, pointSize, autoRotate, markers, focusOn, landData }: Globe3DSceneProps) {
  const globeRef = useRef<THREE.Group>(null);
  const controlsRef = useRef<any>(null);
  const { camera } = useThree();

  const landPolygons = useMemo(() => parseLandPolygons(landData), [landData]);

  // Fresnel shader for globe surface
  const fresnelMaterial = useMemo(() => {
    return new THREE.ShaderMaterial({
      vertexShader: `
        varying vec3 vNormal;
        varying vec3 vViewPosition;
        void main() {
          vNormal = normalize(normalMatrix * normal);
          vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
          vViewPosition = -mvPosition.xyz;
          gl_Position = projectionMatrix * mvPosition;
        }
      `,
      fragmentShader: `
        uniform vec3 color;
        uniform vec3 rimColor;
        uniform float rimPower;
        uniform float rimIntensity;
        varying vec3 vNormal;
        varying vec3 vViewPosition;
        void main() {
          vec3 normal = normalize(vNormal);
          vec3 viewDir = normalize(vViewPosition);
          float rim = 1.0 - max(0.0, dot(normal, viewDir));
          rim = pow(rim, rimPower) * rimIntensity;
          vec3 finalColor = color + rimColor * rim;
          gl_FragColor = vec4(finalColor, 1.0);
        }
      `,
      uniforms: {
        color: { value: new THREE.Color('#111113') },
        rimColor: { value: new THREE.Color('#FF6900') },
        rimPower: { value: 6.0 },
        rimIntensity: { value: 1.5 },
      },
    });
  }, []);

  // Atmosphere shader
  const atmosphereMaterial = useMemo(() => {
    return new THREE.ShaderMaterial({
      vertexShader: `
        varying vec3 vNormal;
        void main() {
          vNormal = normalize(normalMatrix * normal);
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        uniform vec3 color;
        uniform float power;
        uniform float coefficient;
        uniform float intensity;
        varying vec3 vNormal;
        void main() {
          vec3 viewDir = vec3(0.0, 0.0, 1.0);
          float viewDot = dot(vNormal, viewDir);
          float factor = pow(max(0.0, coefficient - viewDot), power);
          vec3 finalColor = color * factor * intensity;
          gl_FragColor = vec4(finalColor, factor * intensity);
        }
      `,
      uniforms: {
        color: { value: new THREE.Color('#FF6900') },
        power: { value: 12.0 },
        coefficient: { value: 0.9 },
        intensity: { value: 2.0 },
      },
      side: THREE.BackSide,
      blending: THREE.AdditiveBlending,
      transparent: true,
      depthWrite: false,
    });
  }, []);

  // Generate land points using Fibonacci sphere, filtered by land polygons
  const landPoints = useMemo(() => {
    const positions: number[] = [];
    const goldenAngle = Math.PI * (3 - Math.sqrt(5));
    const surfaceRadius = radius * 1.001;

    for (let i = 0; i < pointCount; i++) {
      const t = pointCount === 1 ? 0.5 : i / (pointCount - 1);
      const y = 1 - 2 * t;
      const radial = Math.sqrt(Math.max(0, 1 - y * y));
      const theta = goldenAngle * i;
      const x = Math.cos(theta) * radial;
      const z = Math.sin(theta) * radial;

      const pX = x * surfaceRadius;
      const pY = y * surfaceRadius;
      const pZ = z * surfaceRadius;

      // Convert to lon/lat and check if on land
      const { lon, lat } = cartesianToLonLat(pX, pY, pZ);
      
      if (isPointOnLand(lon, lat, landPolygons)) {
        positions.push(pX, pY, pZ);
      }
    }

    return new Float32Array(positions);
  }, [radius, pointCount, landPolygons]);

  // Handle camera focus
  useEffect(() => {
    if (!focusOn || !camera) return;

    const [lat, lon] = focusOn;
    const cameraDistance = 8;
    const target = lonLatToCartesian(lon, lat, cameraDistance);

    gsap.to(camera.position, {
      x: target.x,
      y: target.y,
      z: target.z,
      duration: 1.5,
      ease: 'power2.inOut',
      onUpdate: () => {
        if (controlsRef.current) {
          controlsRef.current.update();
        }
      },
    });
  }, [focusOn, camera]);

  return (
    <group ref={globeRef}>
      {/* Main globe with Fresnel shader */}
      <mesh>
        <sphereGeometry args={[radius, 64, 64]} />
        <primitive object={fresnelMaterial} attach="material" />
      </mesh>

      {/* Atmosphere */}
      <mesh scale={1.1}>
        <sphereGeometry args={[radius, 64, 64]} />
        <primitive object={atmosphereMaterial} attach="material" />
      </mesh>

      {/* Land points */}
      <points>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[landPoints, 3]}
          />
        </bufferGeometry>
        <pointsMaterial
          size={pointSize}
          color={landPointColor}
          sizeAttenuation={true}
          transparent={true}
          opacity={1}
          blending={THREE.AdditiveBlending}
          depthWrite={false}
        />
      </points>

      {/* Markers */}
      {markers.map((marker, i) => {
        const pos = lonLatToCartesian(marker.location[1], marker.location[0], radius);
        const labelLines = marker.label?.split('\n') || [];
        const regionName = labelLines[0] || '';
        const clientCount = labelLines[1] || '';
        
        return (
          <MarkerWithVisibility
            key={i}
            position={pos}
            regionName={regionName}
            clientCount={clientCount}
          />
        );
      })}

      {/* Orbit Controls */}
      <OrbitControls
        ref={controlsRef}
        enableDamping
        autoRotate={autoRotate}
        autoRotateSpeed={0.5}
        minPolarAngle={1.5}
        maxPolarAngle={1.4}
        enableZoom={false}
        target={[0, 0, 0]}
      />
    </group>
  );
}

interface Globe3DProps {
  radius?: number;
  pointCount?: number;
  landPointColor?: string;
  pointSize?: number;
  autoRotate?: boolean;
  markers?: GlobeMarker[];
  focusOn?: [number, number] | null;
  className?: string;
}

export default function Globe3D({
  radius = 2,
  pointCount = 25000,
  landPointColor = '#ff6b35',
  pointSize = 0.05,
  autoRotate = true,
  markers = [],
  focusOn = null,
  className = '',
}: Globe3DProps) {
  const [landData, setLandData] = useState<any>(null);

  useEffect(() => {
    fetch('/ne_110m_land.geojson')
      .then((res) => res.json())
      .then((data) => setLandData(data))
      .catch((err) => console.error('Failed to load land data:', err));
  }, []);

  if (!landData) {
    return (
      <div className={className} style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ color: '#ff6b35', fontFamily: 'HelveticaNeue, Helvetica, Arial, sans-serif' }}>
          Loading globe...
        </div>
      </div>
    );
  }

  return (
    <div className={className} style={{ width: '100%', height: '100%' }}>
      <Canvas
        camera={{ position: [0, 0, 8], fov: 45 }}
        gl={{ antialias: true, alpha: true }}
        style={{ background: 'transparent' }}
      >
        <Globe3DScene
          radius={radius}
          pointCount={pointCount}
          landPointColor={landPointColor}
          pointSize={pointSize}
          autoRotate={autoRotate}
          markers={markers}
          focusOn={focusOn}
          landData={landData}
        />
      </Canvas>
    </div>
  );
}

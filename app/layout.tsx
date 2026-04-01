import type { Metadata } from "next";
import "./globals.css";
import { SmoothScroll } from "./components/SmoothScroll";

export const metadata: Metadata = {
  title: "Beebee Advisory - Your Dedicated Finance Team",
  description: "Precision finance, strategic advisory, and compliance for high-growth companies",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}

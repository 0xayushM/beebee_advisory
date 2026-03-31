import type { Metadata } from "next";
import "./globals.css";

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
        {children}
      </body>
    </html>
  );
}

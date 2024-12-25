import "./globals.css";
import { Inter, Space_Grotesk as SpaceGrotesk } from "next/font/google";
import type { Metadata } from "next";
import React from "react";

const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-inter",
});

const spaceGrotesk = SpaceGrotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-spaceGrotesk",
});

export const metadata: Metadata = {
  title: "SharpCareer",
  description:
    "SharpCareer is a platform for developers to learn and share their knowledge with others.",
  icons: {
    // icon: "/assets/images/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${spaceGrotesk.variable}`}>
        {children}
      </body>
    </html>
  );
}

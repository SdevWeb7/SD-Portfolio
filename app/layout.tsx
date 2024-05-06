import React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Providers from "@/hooks/Providers";
import "../css/globals.scss";
import backgroundImage from "../public/bg-portfolio.png";
import Image from "next/image";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SD-Portfolio",
  description: "Created with NextJS adn Typescript",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={inter.className}>

      <Image src={backgroundImage} alt="SD-Portfolio" className={'background'} />

      <Providers>
          {children}
      </Providers>


      </body>
    </html>
  );
}

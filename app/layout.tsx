import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Providers from "@/hooks/Providers";
import backgroundImage from "@/public/images/bg-portfolio.png";
import "@/css/globals.scss";
import {ArrowGoTop} from "@/components/ArrowGoTop";

export const metadata: Metadata = {
    title: "SD-Portfolio",
    description: "Created with NextJS and Typescript",
    keywords: ["NextJS", "Typescript", "React", "Portfolio"],
    openGraph: {
        title: "SD-Portfolio",
        description: "Created with NextJS and Typescript",
        type: "website",
        url: "https://sd-portfolio.vercel.app",
        images: "https://sd-portfolio.vercel.app/images/Logo_1.png",
    }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {


    return <>
      <html lang="fr">
        <body>

        <div id="top" />

        <Image
            src={backgroundImage}
            alt="SD-Portfolio"
            className={'background'} />

        <Providers>
            {children}
        </Providers>


        <ArrowGoTop />
        </body>
      </html>
    </>;
}

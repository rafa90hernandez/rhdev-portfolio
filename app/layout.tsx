import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://rafaelhernandez.com.br"),

  title: "Rafael Hernandez | Fullstack Developer | React, Next.js, Node.js",
  description:
    "Rafael Hernandez is a Fullstack Developer based in Ireland, focused on building modern, scalable and high-performance web applications with React, Next.js, Node.js, NestJS, PostgreSQL and Docker.",

  keywords: [
    "Rafael Hernandez",
    "RHDEV",
    "Fullstack Developer",
    "React Developer",
    "Next.js Developer",
    "Node.js Developer",
    "NestJS",
    "PostgreSQL",
    "Docker",
    "Web Developer Ireland",
    "Fullstack Developer Ireland",
  ],

  authors: [{ name: "Rafael Hernandez" }],
  creator: "Rafael Hernandez",

  alternates: {
    canonical: "https://rafaelhernandez.com.br",
  },

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title: "Rafael Hernandez | Fullstack Developer",
    description:
      "Fullstack Developer based in Ireland, building modern digital products with React, Next.js, Node.js, NestJS, PostgreSQL and Docker.",
    url: "https://rafaelhernandez.com.br",
    siteName: "RHDEV",
    images: [
      {
        url: "/logo-rhdev.png",
        width: 1200,
        height: 630,
        alt: "RHDEV - Rafael Hernandez Fullstack Developer",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Rafael Hernandez | Fullstack Developer",
    description:
      "Fullstack Developer based in Ireland, building modern digital products with React, Next.js, Node.js, NestJS, PostgreSQL and Docker.",
    images: ["/logo-rhdev.png"],
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/logo-rhdev.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
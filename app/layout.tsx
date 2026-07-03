import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import ScrollToTop from "./components/ScrollToTop";
import LoaderProvider from "./components/LoaderProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Haimiya Wasn | Frontend Developer Specialist",
  description: "Personal portfolio showcasing my projects, skills, and experience as a Frontend Developer specializing in React, Next.js, TypeScript, and modern web technologies.",

  openGraph: {
    title: "Haimiya Wasn | Frontend Developer Specialist",
    description: "Personal portfolio showcasing my projects, skills, and experience as a Frontend Developer specializing in React, Next.js, TypeScript, and modern web technologies.",
    url: "https://wasnportfolio.vercel.app/",
    siteName: "Wasn Potfolio",
    images: [
      {
        url: "/og-image.jpg",
        width: 1920,
        height: 1080,
        alt: "Wasn Portfolio",
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Haimiya Wasn | Frontend Developer Specialist",
    description: "Personal portfolio showcasing my projects, skills, and experience as a Frontend Developer specializing in React, Next.js, TypeScript, and modern web technologies.",
    images: ["/og-image.jpg"]
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <LoaderProvider>
          <ScrollToTop />
          {children}
        </LoaderProvider>
      </body>
    </html>
  );
}

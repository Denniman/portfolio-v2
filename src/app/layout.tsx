import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import { metaData } from "@/constants";

const manrope = Manrope({
  variable: "--font-manrope",
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: metaData.title,
  description: metaData.description,
  applicationName: metaData.title,
  referrer: "origin-when-cross-origin",
  generator: "Next.js",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  category: "Technology",
  twitter: {
    card: "summary_large_image",
    title: metaData.title,
    description: metaData.description,
  },
  openGraph: {
    title: metaData.title,
    description: metaData.description,
    siteName: metaData.title,
    locale: "en_US",
    type: "website",
  },
  appleWebApp: {
    title: metaData.title,
    statusBarStyle: "black-translucent",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${manrope.variable} antialiased`}>{children}</body>
    </html>
  );
}

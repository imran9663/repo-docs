

import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Navbar } from "@/components/common/Navbar";
import {SidebarProvider } from "@/components/ui/sidebar";
import SideBar from "@/components/common/SideBar";
import BreadcrumbBar from "@/components/common/BreadcrumbBar";
import { Separator } from "@/components/ui/separator";

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = "https://repodocs.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: "RepoDocs — Beautiful GitHub Documentation Viewer",
    template: "%s | RepoDocs",
  },

  description:
    "Transform any public GitHub repository into a beautiful documentation experience. Read README files, browse Markdown documentation, navigate repositories, and explore technical docs with an elegant developer-first interface.",

  applicationName: "RepoDocs",

  authors: [
    {
      name: "Imran Pasha",
    },
  ],

  creator: "Imran Pasha",

  publisher: "RepoDocs",

  generator: "Next.js",

  category: "Developer Tools",

  keywords: [
    "GitHub",
    "Documentation",
    "Markdown",
    "README",
    "Developer Tools",
    "GitHub Documentation",
    "Markdown Viewer",
    "Documentation Viewer",
    "Technical Documentation",
    "Repository Viewer",
    "GitHub README",
    "Next.js",
    "React",
    "Open Source",
    "Developer Experience",
    "GitBook Alternative",
    "Mintlify Alternative",
    "Documentation Platform"
  ],

  alternates: {
    canonical: siteUrl,
  },

  robots: {
    index: true,
    follow: true,
    nocache: false,

    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  openGraph: {
    type: "website",

    locale: "en_US",

    url: siteUrl,

    siteName: "RepoDocs",

    title: "RepoDocs — Beautiful GitHub Documentation Viewer",

    description:
      "Transform GitHub repositories into an elegant documentation experience.",

    images: [
      {
        url: "/og-image.png",

        width: 1200,

        height: 630,

        alt: "RepoDocs",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "RepoDocs",

    description:
      "Beautiful GitHub Documentation Viewer",

    images: ["/twitter-image.png"],
  },

  icons: {
    icon: [
      "/favicon.ico",
      "/icon-32.png",
      "/icon-192.png",
    ],

    apple: "/apple-touch-icon.png",

    shortcut: "/favicon.ico",
  },

  manifest: "/site.webmanifest",

  appleWebApp: {
    capable: true,

    title: "RepoDocs",

    statusBarStyle: "black-translucent",
  },

  formatDetection: {
    telephone: false,

    email: false,

    address: false,
  },

  other: {
    "theme-color": "#0D1117",
  },
};

export default function RootLayout({ children, }: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html
      lang="en"
      className={cn("h-full", "antialiased", geistSans.variable, geistMono.variable, "font-sans", inter.variable)}
    >
      <body className="min-h-full flex flex-col">
        <div className="flex flex-col">
          <Navbar />
          {children}
        </div>
      </body>
    </html>
  );
}

import type React from "react"
import type { Metadata } from "next"

import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import LoaderProvider from "@/components/loader-provider"

import { Geist, Geist_Mono, Funnel_Display, Geist as V0_Font_Geist, Geist_Mono as V0_Font_Geist_Mono, Source_Serif_4 as V0_Font_Source_Serif_4 } from 'next/font/google'

// Initialize fonts
const _geist = V0_Font_Geist({ subsets: ['latin'], weight: ["100","200","300","400","500","600","700","800","900"] })
const _geistMono = V0_Font_Geist_Mono({ subsets: ['latin'], weight: ["100","200","300","400","500","600","700","800","900"] })
const _sourceSerif_4 = V0_Font_Source_Serif_4({ subsets: ['latin'], weight: ["200","300","400","500","600","700","800","900"] })

const _funnelDisplay = Funnel_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
})

export const metadata: Metadata = {
  title: {
    default: "BUCC - Babcock University Computer Club",
    template: "%s | BUCC",
  },
  description: "Where Ideas Become Impact. Join Babcock University Computer Club (BUCC) - empowering students through technology, innovation, and community. Learn coding, attend workshops, and build amazing projects.",
  keywords: [
    "BUCC",
    "Babcock University",
    "Computer Club",
    "Coding Club",
    "Tech Community",
    "Programming",
    "Software Development",
    "Technology",
    "Innovation",
    "Student Organization",
    "Babcock Tech",
    "Learn to Code",
    "Tech Events",
    "Hackathon",
  ],
  authors: [
    { name: "Prince", url: "https://prince-the.dev" },
    { name: "BUCC Team" },
  ],
  creator: "Prince",
  publisher: "Babcock University Computer Club",
  metadataBase: new URL("https://bucc.vercel.app"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://bucc.vercel.app",
    title: "BUCC - Babcock University Computer Club",
    description: "Where Ideas Become Impact. Join the leading tech community at Babcock University.",
    siteName: "BUCC",
    images: [
      {
        url: "https://otiktpyazqotihijbwhm.supabase.co/storage/v1/object/public/images/814d6462-7748-4730-8e4c-7ecc267abb10-bucc-logo-again.jpg",
        width: 1200,
        height: 630,
        alt: "BUCC - Babcock University Computer Club",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "BUCC - Babcock University Computer Club",
    description: "Where Ideas Become Impact. Join the leading tech community at Babcock University.",
    images: ["https://otiktpyazqotihijbwhm.supabase.co/storage/v1/object/public/images/814d6462-7748-4730-8e4c-7ecc267abb10-bucc-logo-again.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      {
        url: "https://otiktpyazqotihijbwhm.supabase.co/storage/v1/object/public/images/814d6462-7748-4730-8e4c-7ecc267abb10-bucc-logo-again.jpg",
        sizes: "any",
      },
    ],
    shortcut: "https://otiktpyazqotihijbwhm.supabase.co/storage/v1/object/public/images/814d6462-7748-4730-8e4c-7ecc267abb10-bucc-logo-again.jpg",
    apple: "https://otiktpyazqotihijbwhm.supabase.co/storage/v1/object/public/images/814d6462-7748-4730-8e4c-7ecc267abb10-bucc-logo-again.jpg",
  },
  manifest: "/manifest.json",
  generator: "Next.js",
  applicationName: "BUCC Website",
  referrer: "origin-when-cross-origin",
  category: "technology",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="overflow-x-hidden">
      <head>
        <meta name="author" content="Prince" />
        <meta name="designer" content="Prince" />
        <meta name="developer" content="Prince - prince-the.dev" />
        <link rel="icon" type="image/jpeg" href="https://otiktpyazqotihijbwhm.supabase.co/storage/v1/object/public/images/814d6462-7748-4730-8e4c-7ecc267abb10-bucc-logo-again.jpg" />
      </head>
      <body className={`font-sans antialiased overflow-x-hidden ${_geist.className}`}>
        <LoaderProvider>
          {children}
        </LoaderProvider>
        <Analytics />
      </body>
    </html>
  )
}

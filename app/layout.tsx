import type React from "react"
import type { Metadata } from "next"
import { Outfit, Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Suspense } from "react"

const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" })
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })

export const metadata: Metadata = {
  title: "StudyMento — Modern Digital Learning",
  description:
    "StudyMento is a modern learning brand focused on clarity, accountability, and outcomes with transparent policies and support.",
  generator: "v0.app",
  keywords: ["StudyMento", "EdTech", "online courses", "e-learning"],
  metadataBase: new URL("https://studymento.example.com"),
  openGraph: {
    title: "StudyMento — Modern Digital Learning",
    description: "Practical, high-quality e-learning with transparent policies and support.",
    type: "website",
    url: "https://studymento.example.com",
  },
  twitter: {
    card: "summary_large_image",
    title: "StudyMento — Modern Digital Learning",
    description: "Practical, high-quality e-learning with transparent policies and support.",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${outfit.variable} ${inter.variable} antialiased`}>
      <body className="font-sans">
        <Suspense>
          <SiteHeader />
          <main className="min-h-[60vh]">{children}</main>
          <SiteFooter />
        </Suspense>
        <Analytics />
      </body>
    </html>
  )
}

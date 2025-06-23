import type React from "react"
import type { Metadata } from "next"
import { Dancing_Script, Great_Vibes, Shadows_Into_Light } from "next/font/google"
import "./globals.css"

const dancingScript = Dancing_Script({
  subsets: ["latin"],
  variable: "--font-dancing",
  display: "swap",
})

const greatVibes = Great_Vibes({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-great-vibes",
  display: "swap",
})

const shadowsIntoLight = Shadows_Into_Light({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-shadows",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Our Digital Diary - 26 Things I Love About Siddh",
  description: "A romantic digital flipbook diary celebrating Siddh's birthday with 26 reasons why he's loved",
  keywords: "birthday, love, diary, flipbook, romantic, digital scrapbook",
  authors: [{ name: "Love" }],
  openGraph: {
    title: "Our Digital Diary - Happy Birthday Siddh!",
    description: "A special birthday gift - 26 things I love about you",
    type: "website",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${dancingScript.variable} ${greatVibes.variable} ${shadowsIntoLight.variable} antialiased`}>
        {children}
      </body>
    </html>
  )
}

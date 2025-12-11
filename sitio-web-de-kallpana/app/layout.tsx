import type React from "react"
import type { Metadata, Viewport } from "next"
import { Poppins, Playfair_Display } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
})

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-playfair",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Kallpana Trekking Tours | Agencia de Viajes en Ecuador",
  description:
    "Descubre experiencias extraordinarias de viaje en Ecuador con Kallpana Trekking Tours. Turismo rural sostenible, aviturismo, trekking y aventura en los Andes.",
  keywords: [
    "agencia de viajes Ecuador",
    "turismo rural sostenible",
    "trekking Ecuador",
    "aviturismo",
    "tours Ecuador",
    "Kallpana",
    "viajes Andes",
  ],
  authors: [{ name: "Kallpana Trekking Tours" }],
  creator: "Kallpana Trekking Tours",
  publisher: "Kallpana Trekking Tours",
  metadataBase: new URL("https://kallpana.com"),
  openGraph: {
    type: "website",
    locale: "es_EC",
    url: "https://kallpana.com",
    siteName: "Kallpana Trekking Tours",
    title: "Kallpana Trekking Tours | Agencia de Viajes en Ecuador",
    description:
      "Descubre experiencias extraordinarias de viaje en Ecuador. Turismo rural sostenible, aviturismo y aventura.",
    images: [
      {
        url: "/kallpana-logo-bird.png",
        width: 800,
        height: 600,
        alt: "Kallpana Trekking Tours",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kallpana Trekking Tours | Agencia de Viajes en Ecuador",
    description: "Turismo rural sostenible y aventura en Ecuador",
    images: ["/kallpana-logo-bird.png"],
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
    icon: "/kallpana-logo-bird.png",
    shortcut: "/kallpana-logo-bird.png",
    apple: "/kallpana-logo-bird.png",
  },
    generator: 'v0.app'
}

export const viewport: Viewport = {
  themeColor: "#0f172a",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className={`${poppins.variable} ${playfair.variable} antialiased`}>
      <body className="font-sans">
        {children}
        <Analytics />
      </body>
    </html>
  )
}

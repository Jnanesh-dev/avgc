import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import SystemStatus from "@/components/SystemStatus";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Astraveda Global Care | World-Class Medical Tourism",
  description: "Find affordable, accredited medical care worldwide. Connect with top doctors and hospitals for cosmetic, dental, fertility, and more treatments.",
  metadataBase: new URL('https://astraveda.com'), // Replace with actual domain in production
  openGraph: {
    title: "Astraveda Global Care | World-Class Medical Tourism",
    description: "Find affordable, accredited medical care worldwide.",
    url: 'https://astraveda.com',
    siteName: 'Astraveda Global Care',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Astraveda Global Care",
    description: "Premium Medical Tourism Facilitator",
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
  },
  themeColor: '#006d5b',
  icons: {
    icon: '/logo.png',
    shortcut: '/logo.png',
    apple: '/logo.png',
  },
};

import { AuthProvider } from "@/context/AuthContext";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <AuthProvider>
          <Header />
          <main className="min-h-screen">
            {children}
          </main>
          <Footer />
        </AuthProvider>
        <SystemStatus />
      </body>
    </html>
  );
}

import './globals.css'
import '@radix-ui/themes/styles.css';
import React from 'react';
import { Inter } from 'next/font/google'
import { Layout } from '@/components/Layout'
import { Metadata } from 'next'
import { GoogleAnalyticsScript } from "@/components/analytics/GoogleAnalyticsScript";
import { PlausibleAnalyticsScript } from "@/components/analytics/PlausibleAnalyticsScript";
import { ThemeProvider } from "next-themes"
import { DM_Sans } from "next/font/google";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ['latin'] })
const sansFont = DM_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: {
    default: 'DevToolset: Open-Source Database-free Developer Tools Navigator',
    template: '%s | DevToolset'
  },
  description: 'Explore Every Essential Developer Tools You Need For Your Development Journey',
  authors: { name: 'DevToolset', url: 'https://DevToolset.net/' },
  keywords: 'developer tools, dev tools, develop tool',
  alternates: { canonical: "https://DevToolset.net/", languages: { 
    "en-US": "https://DevToolset.net/",
  } },
  icons: [
    { rel: "icon", type: 'image/png',sizes: "16x16", url: "/favicon-16x16.png" }, 
    { rel: "icon", type: 'image/png',sizes: "32x32", url: "/favicon-32x32.png" },
    { rel: "icon", type: 'image/ico', url: "/favicon.ico" },
    { rel: "apple-touch-icon", sizes:"180x180", url: "/favicon-180x180.png" },
    { rel: "android-chrome", sizes:"512x512", url: "/favicon-512x512.png" },
    
  ],
}

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <head />
        <body className={cn(inter.className,sansFont.variable,
        )}>
          <ThemeProvider
            attribute="class"
           
          >
            <Layout>{children}</Layout>
            <GoogleAnalyticsScript />
           <PlausibleAnalyticsScript />
          </ThemeProvider>
        </body>
      </html>
    </>
  )
}

// export default function RootLayout({ children }: RootLayoutProps) {
//   return (
//     <html lang="en">
//       <body className={inter.className}>
//         <Layout>{children}</Layout>
//         <GoogleAnalyticsScript />
//         <PlausibleAnalyticsScript />
//       </body>
//     </html>
//   )
// }
import './globals.css'
import { Inter } from 'next/font/google'
import { Layout } from '@/components/Layout'
import { Metadata } from 'next'

const inter = Inter({ subsets: ['latin'] })


export const metadata: Metadata = {
  title: {
    default: 'DevToolset - Open Source Developer Tools Navigator Without Database',
    template: '%s | DevToolset'
  },
  description: 'Explore Every Essential Developer Tools You Need For Your Development Journey',
  keywords: 'developer tools, dev tools, develop tool',
  alternates: { canonical: "https://DevToolset.net/", languages: { 
    "en-US": "https://DomainScore.ai/",
  } },
  icons: [
    { rel: "icon", type: 'image/png',sizes: "16x16", url: "/favicon-16x16.png" }, 
    { rel: "icon", type: 'image/png',sizes: "32x32", url: "/favicon-32x32.png" },
    { rel: "icon", type: 'image/ico', url: "/favicon.ico" },
    { rel: "apple-touch-icon", sizes:"180x180", url: "/favicon-180x180.png" },
    { rel: "android-chrome", sizes:"512x512", url: "/favicon-512x512.png" },
    
  ]
}

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Layout>{children}</Layout>
      </body>
    </html>
  )
}
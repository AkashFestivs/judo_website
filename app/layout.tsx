import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Dynamic Judo Association Raigad | Professional Martial Arts Training',
  description: 'Build strength, discipline & honor through Judo. Join Dynamic Judo Association Raigad for professional coaching, training programs, and competitive opportunities.',
  generator: 'Akash Gadhave',
  icons: {
    icon: '/judo_logi.png',
    apple: '/judo_logi.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}

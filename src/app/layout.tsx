import type { Metadata } from 'next'
import { Mulish } from 'next/font/google'
import './globals.css'

export const metadata: Metadata = {
  title: 'Packgine',
  description: 'Simplifying sustainable packaging: Empowering brands and Inspiring consumers',
  icons: {
    icon: '/images/favicon/browser.png',
    shortcut: '/images/favicon/iPhone.png',
    apple: '/images/favicon/Android.png',
  },
}

const mulish = Mulish({
  subsets: ['latin'],
  weight: ['200', '300', '400', '500', '600', '700', '800', '900', '1000'],
  variable: '--font-mulish',
  display: 'swap',
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={mulish.variable}>
      <body className="font-sans">{children}</body>
    </html>
  )
}

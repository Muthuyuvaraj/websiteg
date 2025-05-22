import type { Metadata } from 'next'
import { DM_Sans } from 'next/font/google'
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

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-dm-sans',
  display: 'swap',
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={dmSans.variable}>
      <body className="font-sans">{children}</body>
    </html>
  )
}

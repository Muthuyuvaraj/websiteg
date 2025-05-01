import type { Metadata } from 'next'
import { Poppins } from "next/font/google"
import './globals.css'

export const metadata: Metadata = {
  title: 'Packgine',
  description: 'Simplifying sustainable packaging: Empowering brands and Inspiring consumers"',
  icons: {
    icon: '/images/favicon/browser.png', // this will be the main favicon
    shortcut: '/images/favicon/iPhone.png',
    apple: '/images/favicon/Android.png',
  },
}

const Source = Poppins({subsets: ["latin"], weight: [ "300", "400", "500", "700",'800']})


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (   
    <html lang="en">
      <body  className={Source.className} >{children}</body>
    </html>
  )
}

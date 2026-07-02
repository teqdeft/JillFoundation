import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Inter, Playfair_Display, Dancing_Script, Geist_Mono } from 'next/font/google'
import './globals.css'

const inter = Inter({ variable: '--font-inter', subsets: ['latin'] })
const playfair = Playfair_Display({
  variable: '--font-playfair',
  subsets: ['latin'],
})
const dancing = Dancing_Script({
  variable: '--font-dancing',
  subsets: ['latin'],
})
const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'JILL Foundation | Mental & Medical Health Support',
  description:
    'The JILL Foundation empowers individuals to achieve optimal mental and medical wellness through compassionate care and community support.',
  generator: 'v0.app',
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#123024',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${playfair.variable} ${dancing.variable} ${geistMono.variable} bg-background`}
    >
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}

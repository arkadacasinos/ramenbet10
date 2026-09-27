import { Analytics } from '@vercel/analytics/next'
import { Geist, Geist_Mono } from 'next/font/google'
import type { Metadata, Viewport } from 'next'
import './globals.css'

const geistSans = Geist({ subsets: ['latin', 'cyrillic'], variable: '--font-geist-sans' })
const geistMono = Geist_Mono({ subsets: ['latin', 'cyrillic'], variable: '--font-geist-mono' })

export const metadata: Metadata = {
  title: 'Ramenbet — официальный сайт и рабочее зеркало',
  description: 'Понятная навигация по запросам Ramenbet: официальный сайт, рабочее зеркало и советы для безопасного входа.',
  generator: 'v0.app',
  icons: { icon: '/ramenbet-icon.png', apple: '/ramenbet-icon.png' },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#102b3b',
  userScalable: true,
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ru" className="bg-background">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Ramenbet — официальный сайт и рабочее зеркало</title>
        <meta
          name="description"
          content="Понятная навигация по запросам Ramenbet: официальный сайт, рабочее зеркало и советы для безопасного входа."
        />
        <link rel="icon" href="/ramenbet-icon.png" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}

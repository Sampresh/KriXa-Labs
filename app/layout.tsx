import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'
import CustomCursor from '@/components/effects/custom-cursor'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'KriXa Labs - Digital Innovation Company',
  description: 'KriXa Labs is a digital innovation company focused on revolutionizing how people and businesses bring their ideas to life.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <CustomCursor />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}

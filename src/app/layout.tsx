import AuthProvider from '@/components/AuthProvider'
import Footer from '@/components/Footer'
import NavBar from '@/components/NavBar'
import { Toaster } from '@/components/ui/toaster'
import { cn } from '@/lib/utils'
import '@/styles/globals.css'
import type { Metadata } from 'next'
import localFont from 'next/font/local'

const comfort = localFont({
  src: '../../public/fonts/Comfortaa-Light.ttf',
  weight: '900',
})

export const metadata: Metadata = {
  title: 'BerFoods',
  description: 'Your Home For Quality Foods',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={cn('bg-white antialiased light', comfort.className)}
    >
      <body className="min-w-full min-h-screen bg-slate-50 antialiased">
        <AuthProvider>
          <NavBar />
          <div className="w-full h-full pt-12">{children}</div>
          <Footer />
          <Toaster />
        </AuthProvider>
      </body>
    </html>
  )
}

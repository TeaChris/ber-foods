import Footer from '@/components/Footer'
import NavBar from '@/components/NavBar'
import { cn } from '@/lib/utils'
import '@/styles/globals.css'
import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'

const pop = Poppins({ subsets: ['latin'], weight: '400' })

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
    <html lang="en" className={cn('bg-white antialiased light', pop.className)}>
      <body className="min-w-full min-h-screen bg-slate-50 antialiased">
        <NavBar />
        <div className="w-full h-full pt-12">{children}</div>
        <Footer />
      </body>
    </html>
  )
}

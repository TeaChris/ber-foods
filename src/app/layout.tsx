import { cn } from '@/lib/utils'
import '@/styles/globals.css'
import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'

const pop = Poppins({ subsets: ['latin'], weight: '600' })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={cn('bg-white antialiased light', pop.className)}>
      <body className="min-h-screen pt-12 bg-slate-50 antialiased">
        <div className="container max-w-7xl mx-auto h-full pt-12">
          {children}
        </div>
      </body>
    </html>
  )
}
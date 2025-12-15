import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Online Quran Tutoring Academy - Learn Quran Online',
  description: 'Professional online Quran tutoring with experienced teachers. Learn Tajweed, Memorization, and Islamic Studies from the comfort of your home.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

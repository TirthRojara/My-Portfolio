import type { Metadata } from 'next'
import './globals.css'
import { Analytics } from "@vercel/analytics/next"

export const metadata: Metadata = {
  title: 'Tirth Rojara – Full Stack Developer',
  description: 'Personal portfolio of Tirth Rojara, a Full Stack Developer passionate about building scalable full-stack web applications.',
  keywords: ['MERN Stack', 'Developer', 'React', 'Node.js', 'MongoDB', 'Express', 'Full Stack', 'Tirth Rojara'],
  authors: [{ name: 'Tirth Rojara' }],
  openGraph: {
    title: 'Tirth Rojara – Full Stack Developer',
    description: 'Building scalable full-stack web applications with MongoDB, Express.js, React, and Node.js.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <meta name="theme-color" content="#030712" />
      </head>
      <body className="bg-[#030712] text-white antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}

import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Priyank Verma',
  description: 'Portfolio website of Priyank Verma',
  openGraph: {
    type: "website",
    url: "https://priyank.tech",
    title: "Priyank Verma",
    description: "Portfolio website of Priyank Verma",
    siteName: "Portfolio",
    images: [{
      url: "https://drive.google.com/uc?id=18zTIxgMo4riMKiDAA2kEB7UB4dbCMAAk",
    }],
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}

import type { Metadata } from 'next'
import React from 'react'
import '../styles/globals.css'
import { Navbar } from '../components/common/navbar'
import { Footer } from '../components/common/footer'
import { AuthProvider } from '../components/common/auth-provider'

export const metadata: Metadata = {
  title: 'Fix & Go - خدمات السيارات الشاملة',
  description: 'منصة شاملة لخدمات السيارات في مصر، صيانة دورية، خدمات طوارئ، قطع غيار، وأكثر',
  icons: {
    icon: '/images/favicon.svg',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ar" dir="rtl">
      <head>
        <link rel="icon" href="/images/favicon.svg" />
      </head>
      <body className="min-h-screen flex flex-col bg-background">
        <AuthProvider>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </AuthProvider>
      </body>
    </html>
  )
}
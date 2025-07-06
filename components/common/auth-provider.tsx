"use client"

import { SessionProvider } from 'next-auth/react'
import { Toaster } from 'sonner'

export function AuthProvider({ children }: { children: React.ReactNode }) {
  return (
    <SessionProvider>
      {children}
      <Toaster 
        position="top-center"
        richColors
        closeButton
        dir="rtl"
        toastOptions={{
          style: { 
            fontFamily: 'var(--font-sans)'
          }
        }}
      />
    </SessionProvider>
  )
}
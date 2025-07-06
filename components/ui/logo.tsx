"use client"

import React from 'react'
import Link from 'next/link'

interface LogoProps {
  variant?: 'default' | 'white' | 'blue'
  size?: 'sm' | 'md' | 'lg'
  withText?: boolean
  className?: string
}

export function Logo({
  variant = 'default',
  size = 'md',
  withText = true,
  className = '',
}: LogoProps) {
  // تحديد لون الشعار حسب النوع
  const colorClass = {
    default: 'text-fix-blue',
    white: 'text-white',
    blue: 'text-fix-blue-700',
  }

  // تحديد حجم الشعار
  const sizeClass = {
    sm: withText ? 'h-8' : 'h-6',
    md: withText ? 'h-10' : 'h-8',
    lg: withText ? 'h-12' : 'h-10',
  }

  // تحديد حجم النص
  const textSizeClass = {
    sm: 'text-lg',
    md: 'text-xl',
    lg: 'text-2xl',
  }

  return (
    <Link href="/" className={`flex items-center ${className}`}>
      <div className={`flex items-center ${colorClass[variant]}`}>
        {/* أيقونة الشعار */}
        <div className={`${sizeClass[size]} aspect-square relative`}>
          <svg
            viewBox="0 0 50 50"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full"
          >
            <path
              d="M25 5C13.9543 5 5 13.9543 5 25C5 36.0457 13.9543 45 25 45C36.0457 45 45 36.0457 45 25C45 13.9543 36.0457 5 25 5Z"
              stroke="currentColor"
              strokeWidth="4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M25 15V25L32 32"
              stroke="currentColor"
              strokeWidth="4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M15 10L35 40"
              stroke="#FF6B00"
              strokeWidth="4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        {/* نص الشعار */}
        {withText && (
          <div className="flex flex-col mr-2 leading-none">
            <span className={`font-heading font-bold ${textSizeClass[size]}`}>
              FIX <span className="text-fix-orange">&</span> GO
            </span>
            <span className="text-xs font-medium tracking-wider">
              خدمات السيارات الشاملة
            </span>
          </div>
        )}
      </div>
    </Link>
  )
}
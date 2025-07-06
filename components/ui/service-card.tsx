"use client"

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { cn } from '../../utils/cn'

// تعريف الواجهة بدون استخدام LucideIcon
interface ServiceCardProps {
  title: string
  description: string
  iconSvg: React.ReactNode // استخدام ReactNode بدلاً من LucideIcon
  href: string
  imageSrc?: string
  className?: string
  variant?: 'default' | 'featured'
}

export function ServiceCard({
  title,
  description,
  iconSvg,
  href,
  imageSrc,
  className,
  variant = 'default',
}: ServiceCardProps) {
  return (
    <Link
      href={href}
      className={cn(
        'group relative flex flex-col overflow-hidden rounded-xl border transition-all duration-300',
        variant === 'default'
          ? 'bg-white hover:border-fix-blue hover:shadow-md'
          : 'bg-gradient-to-br from-fix-blue-500 to-fix-blue-700 text-white',
        className
      )}
    >
      {/* صورة الخلفية إذا كانت متوفرة */}
      {imageSrc && (
        <div className="absolute inset-0 z-0 overflow-hidden">
          <Image
            src={imageSrc}
            alt={title}
            fill
            className={cn(
              'object-cover transition-transform duration-500 group-hover:scale-110',
              variant === 'default' ? 'opacity-10' : 'opacity-15'
            )}
          />
        </div>
      )}

      {/* أيقونة الخدمة */}
      <div
        className={cn(
          'z-10 mx-auto mb-4 mt-6 flex h-16 w-16 items-center justify-center rounded-full',
          variant === 'default'
            ? 'bg-fix-blue/10 text-fix-blue group-hover:bg-fix-blue group-hover:text-white'
            : 'bg-white/20 text-white'
        )}
      >
        {iconSvg}
      </div>

      {/* محتوى البطاقة */}
      <div className="z-10 flex flex-1 flex-col p-6 pt-2 text-center">
        <h3
          className={cn(
            'mb-3 font-heading font-bold',
            variant === 'default' ? 'text-fix-blue-700' : 'text-white'
          )}
        >
          {title}
        </h3>
        <p
          className={cn(
            'mb-6 flex-1 text-sm',
            variant === 'default' ? 'text-gray-600' : 'text-white/80'
          )}
        >
          {description}
        </p>
        
        {/* زر الانتقال */}
        <div
          className={cn(
            'mt-auto inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors',
            variant === 'default'
              ? 'bg-gray-100 text-fix-blue group-hover:bg-fix-blue group-hover:text-white'
              : 'bg-white/20 text-white hover:bg-white/30'
          )}
        >
          اطلب الخدمة
        </div>
      </div>
    </Link>
  )
}
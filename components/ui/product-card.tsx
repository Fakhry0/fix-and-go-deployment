"use client"

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { cn } from '../../utils/cn'
import { Button } from '../common/button'
import { Heart, ShoppingCart, Star } from 'lucide-react'

interface ProductCardProps {
  id: string
  title: string
  price: number
  oldPrice?: number
  category: string
  rating: number
  imageSrc: string
  isOriginal?: boolean
  className?: string
  onAddToCart?: (id: string) => void
  onAddToWishlist?: (id: string) => void
}

export function ProductCard({
  id,
  title,
  price,
  oldPrice,
  category,
  rating,
  imageSrc,
  isOriginal = false,
  className,
  onAddToCart,
  onAddToWishlist,
}: ProductCardProps) {
  // منع انتشار الحدث عند النقر على الأزرار
  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    if (onAddToCart) onAddToCart(id)
  }

  const handleAddToWishlist = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    if (onAddToWishlist) onAddToWishlist(id)
  }

  return (
    <Link
      href={`/parts/product/${id}`}
      className={cn(
        'group flex flex-col overflow-hidden rounded-xl border border-gray-200 bg-white transition-all hover:shadow-md',
        className
      )}
    >
      {/* صورة المنتج */}
      <div className="relative aspect-square overflow-hidden bg-gray-100 p-4">
        {/* شارة المنتج الأصلي إذا كان أصلياً */}
        {isOriginal && (
          <div className="absolute right-2 top-2 z-10 rounded-full bg-fix-orange px-3 py-1 text-xs font-medium text-white">
            أصلي
          </div>
        )}

        {/* زر المفضلة */}
        <button
          onClick={handleAddToWishlist}
          className="absolute left-2 top-2 z-10 rounded-full bg-white p-1.5 text-gray-400 shadow-sm transition-colors hover:text-fix-orange focus:outline-none"
        >
          <Heart size={18} />
        </button>

        <Image
          src={imageSrc}
          alt={title}
          fill
          className="object-contain p-2 transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      {/* تفاصيل المنتج */}
      <div className="flex flex-1 flex-col p-4">
        <div className="mb-1 text-xs text-gray-500">{category}</div>
        <h3 className="mb-2 line-clamp-2 font-heading font-medium text-gray-800">
          {title}
        </h3>

        {/* التقييم */}
        <div className="mb-2 flex items-center">
          {Array(5)
            .fill(0)
            .map((_, i) => (
              <Star
                key={i}
                size={14}
                className={cn(
                  i < Math.floor(rating) ? 'text-yellow-400' : 'text-gray-300',
                  'fill-current'
                )}
              />
            ))}
          <span className="mr-1 text-xs text-gray-500">({rating})</span>
        </div>

        {/* السعر */}
        <div className="mb-3 flex items-center">
          <div className="font-heading font-bold text-fix-blue-700">
            {price.toLocaleString()} ج.م
          </div>
          {oldPrice && (
            <div className="mr-2 text-sm text-gray-500 line-through">
              {oldPrice.toLocaleString()} ج.م
            </div>
          )}
        </div>

        {/* زر اضافة للسلة */}
        <div className="mt-auto">
          <Button
            variant="primary"
            size="sm"
            fullWidth={true}
            className="flex items-center justify-center gap-1"
            onClick={handleAddToCart}
          >
            <ShoppingCart size={16} />
            <span>أضف للسلة</span>
          </Button>
        </div>
      </div>
    </Link>
  )
}
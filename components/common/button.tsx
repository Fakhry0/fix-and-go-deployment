"use client"

import React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '../../utils/cn'

// تعريف متغيرات الزر باستخدام class-variance-authority
const buttonVariants = cva(
  'inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 font-heading',
  {
    variants: {
      variant: {
        primary: 'bg-fix-blue text-white hover:bg-fix-blue-600',
        secondary: 'bg-fix-orange text-white hover:bg-fix-orange-600',
        outline: 'border-2 border-fix-blue bg-transparent text-fix-blue hover:bg-fix-blue hover:text-white',
        ghost: 'hover:bg-accent hover:text-accent-foreground',
        link: 'text-fix-blue underline-offset-4 hover:underline',
        destructive: 'bg-destructive text-destructive-foreground hover:bg-destructive/90',
        gradient: 'fix-gradient text-white fix-gradient-hover',
        orangeGradient: 'fix-orange-gradient text-white fix-orange-gradient-hover',
      },
      size: {
        default: 'h-10 px-4 py-2',
        sm: 'h-9 rounded-md px-3',
        lg: 'h-11 rounded-md px-8',
        icon: 'h-10 w-10',
      },
      fullWidth: {
        true: 'w-full',
      }
    },
    defaultVariants: {
      variant: 'primary',
      size: 'default',
      fullWidth: false,
    },
  }
)

// استيراد النوع من React.ButtonHTMLAttributes لأزرار HTML الأصلية
export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

// مكون الزر
const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, fullWidth, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, fullWidth, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)

Button.displayName = 'Button'

export { Button, buttonVariants }
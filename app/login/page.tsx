"use client"

import React, { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { Button } from '../../components/common/button'
import { signIn } from 'next-auth/react'
import { toast } from 'sonner'

export default function LoginPage() {
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setLoading(true)

    if (!email || !password) {
      setError('الرجاء إدخال البريد الإلكتروني وكلمة المرور')
      setLoading(false)
      return
    }

    try {
      const result = await signIn('credentials', {
        redirect: false,
        email,
        password
      })

      if (result?.error) {
        setError('البريد الإلكتروني أو كلمة المرور غير صحيحة')
        setLoading(false)
        return
      }

      if (result?.ok) {
        toast.success('تم تسجيل الدخول بنجاح')
        router.push('/dashboard')
        router.refresh()
      }
    } catch (error) {
      console.error("Login error:", error)
      setError('حدث خطأ أثناء تسجيل الدخول، الرجاء المحاولة مرة أخرى')
    }

    setLoading(false)
  }

  return (
    <div className="container py-12">
      <div className="mx-auto max-w-md">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold font-heading text-fix-blue-700">تسجيل الدخول</h1>
          <p className="mt-2 text-gray-600">
            قم بتسجيل الدخول للوصول إلى حسابك والاستفادة من كافة الخدمات
          </p>
        </div>

        <div className="rounded-lg border bg-white p-6 shadow-sm">
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="email" className="mb-2 block text-sm font-medium text-gray-700">
                البريد الإلكتروني
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full rounded-md border border-gray-300 px-4 py-2 focus:border-fix-blue focus:outline-none focus:ring-2 focus:ring-fix-blue/20"
                placeholder="أدخل بريدك الإلكتروني"
                dir="rtl"
              />
            </div>

            <div className="mb-6">
              <div className="flex items-center justify-between">
                <Link href="/forgot-password" className="text-xs text-fix-blue-600 hover:text-fix-blue-800">
                  نسيت كلمة المرور؟
                </Link>
                <label htmlFor="password" className="mb-2 block text-sm font-medium text-gray-700">
                  كلمة المرور
                </label>
              </div>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full rounded-md border border-gray-300 px-4 py-2 focus:border-fix-blue focus:outline-none focus:ring-2 focus:ring-fix-blue/20"
                placeholder="أدخل كلمة المرور"
                dir="rtl"
              />
            </div>

            {error && <p className="mb-4 text-center text-sm text-red-600">{error}</p>}

            <Button
              type="submit"
              className="w-full"
              disabled={loading}
            >
              {loading ? 'جاري تسجيل الدخول...' : 'تسجيل الدخول'}
            </Button>

            <div className="mt-6 text-center text-sm text-gray-600">
              ليس لديك حساب؟{' '}
              <Link href="/signup" className="font-medium text-fix-blue-600 hover:text-fix-blue-800">
                إنشاء حساب جديد
              </Link>
            </div>
          </form>
        </div>

        <div className="mt-8 flex items-center justify-center gap-4">
          <Button
            variant="outline"
            className="flex-1"
            onClick={() => router.push('/')}
          >
            العودة للرئيسية
          </Button>
          <Button
            variant="outline" 
            className="flex-1"
            onClick={() => router.push('/contact')}
          >
            تواصل معنا
          </Button>
        </div>
      </div>
    </div>
  )
}
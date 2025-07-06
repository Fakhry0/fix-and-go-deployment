"use client"

import React, { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { Button } from '../../components/common/button'
import { toast } from 'sonner'
import { z } from 'zod'

// Create a schema for user registration validation
const signupSchema = z.object({
  name: z.string().min(3, {
    message: "الاسم يجب أن يكون 3 أحرف على الأقل",
  }),
  email: z.string().email({
    message: "الرجاء إدخال بريد إلكتروني صحيح",
  }),
  phone: z.string().min(10, {
    message: "رقم الهاتف يجب أن يكون 10 أرقام على الأقل",
  }),
  password: z.string().min(6, {
    message: "كلمة المرور يجب أن تكون 6 أحرف على الأقل",
  }),
  confirmPassword: z.string(),
}).refine((data) => data.password === data.confirmPassword, {
  message: "كلمات المرور غير متطابقة",
  path: ["confirmPassword"],
});

export default function SignupPage() {
  const router = useRouter()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setLoading(true)

    try {
      // Validate the form data
      const result = signupSchema.safeParse({
        name,
        email,
        phone,
        password,
        confirmPassword
      });

      if (!result.success) {
        // Get the first error message
        const fieldErrors = result.error.flatten().fieldErrors;
        const firstError = 
          Object.values(fieldErrors)[0]?.[0] || 
          "حدث خطأ في التحقق من البيانات";
        
        setError(firstError);
        setLoading(false);
        return;
      }

      // Call API to register user
      const response = await fetch('/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          email,
          phone,
          password,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'حدث خطأ أثناء إنشاء الحساب');
      }

      // Show success message
      toast.success('تم إنشاء الحساب بنجاح، يمكنك تسجيل الدخول الآن');
      
      // Redirect to login page
      router.push('/login');
    } catch (error: any) {
      console.error("Registration error:", error);
      setError(error.message || 'حدث خطأ أثناء إنشاء الحساب، الرجاء المحاولة مرة أخرى');
    }

    setLoading(false);
  }

  return (
    <div className="container py-12">
      <div className="mx-auto max-w-md">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold font-heading text-fix-blue-700">إنشاء حساب جديد</h1>
          <p className="mt-2 text-gray-600">
            أنشئ حسابًا للوصول إلى جميع خدمات صيانة السيارات والمزايا الخاصة
          </p>
        </div>

        <div className="rounded-lg border bg-white p-6 shadow-sm">
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="name" className="mb-2 block text-sm font-medium text-gray-700">
                الاسم بالكامل
              </label>
              <input
                id="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full rounded-md border border-gray-300 px-4 py-2 focus:border-fix-blue focus:outline-none focus:ring-2 focus:ring-fix-blue/20"
                placeholder="أدخل اسمك بالكامل"
                dir="rtl"
              />
            </div>

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

            <div className="mb-4">
              <label htmlFor="phone" className="mb-2 block text-sm font-medium text-gray-700">
                رقم الهاتف
              </label>
              <input
                id="phone"
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full rounded-md border border-gray-300 px-4 py-2 focus:border-fix-blue focus:outline-none focus:ring-2 focus:ring-fix-blue/20"
                placeholder="أدخل رقم هاتفك"
                dir="rtl"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="password" className="mb-2 block text-sm font-medium text-gray-700">
                كلمة المرور
              </label>
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

            <div className="mb-6">
              <label htmlFor="confirmPassword" className="mb-2 block text-sm font-medium text-gray-700">
                تأكيد كلمة المرور
              </label>
              <input
                id="confirmPassword"
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full rounded-md border border-gray-300 px-4 py-2 focus:border-fix-blue focus:outline-none focus:ring-2 focus:ring-fix-blue/20"
                placeholder="أعد إدخال كلمة المرور"
                dir="rtl"
              />
            </div>

            {error && <p className="mb-4 text-center text-sm text-red-600">{error}</p>}

            <Button
              type="submit"
              className="w-full"
              disabled={loading}
            >
              {loading ? 'جاري إنشاء الحساب...' : 'إنشاء حساب'}
            </Button>

            <div className="mt-6 text-center text-sm text-gray-600">
              لديك حساب بالفعل؟{' '}
              <Link href="/login" className="font-medium text-fix-blue-600 hover:text-fix-blue-800">
                تسجيل الدخول
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
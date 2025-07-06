"use client"

import React from 'react'
import { Button } from '../../../components/common/button'
import { Truck, Clock, Shield, MapPin, PhoneCall } from 'lucide-react'
import Link from 'next/link'

export default function TowingPage() {
  return (
    <div className="container py-12">
      <div className="mb-8">
        <h1 className="mb-4 text-3xl font-bold text-fix-blue-700">خدمة سحب السيارات</h1>
        <p className="text-lg text-gray-600">
          نقدم خدمة سحب السيارات على مدار الساعة في حالات التعطل أو الحوادث بسرعة وأمان تام.
        </p>
      </div>

      <div className="mb-10 grid grid-cols-1 gap-6 md:grid-cols-3">
        <div className="rounded-lg bg-white p-6 shadow-md transition-all hover:-translate-y-1 hover:shadow-lg">
          <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-fix-blue-100 text-fix-blue-600">
            <Clock size={24} />
          </div>
          <h3 className="mb-2 text-xl font-bold text-fix-blue-700">خدمة 24/7</h3>
          <p className="text-gray-600">
            نعمل على مدار الساعة طوال أيام الأسبوع لمساعدتك في أي وقت
          </p>
        </div>

        <div className="rounded-lg bg-white p-6 shadow-md transition-all hover:-translate-y-1 hover:shadow-lg">
          <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-fix-blue-100 text-fix-blue-600">
            <Truck size={24} />
          </div>
          <h3 className="mb-2 text-xl font-bold text-fix-blue-700">أسطول متكامل</h3>
          <p className="text-gray-600">
            أسطول متكامل من سيارات السحب المجهزة لجميع أنواع المركبات
          </p>
        </div>

        <div className="rounded-lg bg-white p-6 shadow-md transition-all hover:-translate-y-1 hover:shadow-lg">
          <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-fix-blue-100 text-fix-blue-600">
            <Shield size={24} />
          </div>
          <h3 className="mb-2 text-xl font-bold text-fix-blue-700">أمان وثقة</h3>
          <p className="text-gray-600">
            فريق محترف مدرب على التعامل مع جميع حالات السحب بأمان وحرفية
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        <div className="rounded-lg bg-white p-8 shadow-md">
          <h2 className="mb-6 text-2xl font-bold text-fix-blue-700">خدمات سحب السيارات</h2>
          
          <div className="space-y-6">
            <div className="rounded-md bg-fix-blue-50 p-4">
              <h3 className="mb-3 font-bold text-fix-blue-700">نقدم خدمات سحب متكاملة تشمل:</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-fix-blue-100 text-fix-blue-600">
                    <Truck size={16} />
                  </div>
                  <span>سحب في حالات التعطل الفني</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-fix-blue-100 text-fix-blue-600">
                    <Truck size={16} />
                  </div>
                  <span>سحب في حالات الحوادث المرورية</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-fix-blue-100 text-fix-blue-600">
                    <Truck size={16} />
                  </div>
                  <span>نقل السيارات بين المدن</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-fix-blue-100 text-fix-blue-600">
                    <Truck size={16} />
                  </div>
                  <span>سحب السيارات ذات الدفع الرباعي</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-fix-blue-100 text-fix-blue-600">
                    <Truck size={16} />
                  </div>
                  <span>خدمات سحب للشاحنات الخفيفة</span>
                </li>
              </ul>
            </div>
            
            <div className="rounded-md bg-gray-50 p-4">
              <p className="text-gray-600">
                جميع خدمات السحب تتم وفقًا لأعلى معايير السلامة للحفاظ على سيارتك من أي أضرار إضافية أثناء النقل.
              </p>
            </div>
          </div>
        </div>
        
        <div className="rounded-lg bg-white p-8 shadow-md">
          <h2 className="mb-6 text-2xl font-bold text-fix-blue-700">اطلب خدمة سحب الآن</h2>
          
          <div className="space-y-4">
            <div className="rounded-md bg-orange-50 p-4">
              <h3 className="mb-2 font-bold text-fix-blue-700">كيف تعمل الخدمة؟</h3>
              <ol className="list-inside list-decimal space-y-2 text-gray-600">
                <li className="flex items-center gap-2">
                  <PhoneCall size={18} className="text-fix-orange" />
                  <span>اتصل بنا أو استخدم التطبيق لطلب السحب</span>
                </li>
                <li className="flex items-center gap-2">
                  <MapPin size={18} className="text-fix-orange" />
                  <span>حدد موقعك ووجهتك المطلوبة</span>
                </li>
                <li className="flex items-center gap-2">
                  <Clock size={18} className="text-fix-orange" />
                  <span>سيصلك فريقنا في أسرع وقت ممكن</span>
                </li>
              </ol>
            </div>
            
            <div className="rounded-md bg-fix-blue-50 p-4">
              <h3 className="mb-2 font-bold text-fix-blue-700">مناطق التغطية</h3>
              <p className="mb-2 text-gray-600">
                نغطي جميع المناطق في:
              </p>
              <div className="grid grid-cols-2 gap-2 text-sm">
                <div className="rounded-md bg-white p-2 text-center shadow-sm">
                  القاهرة الكبرى
                </div>
                <div className="rounded-md bg-white p-2 text-center shadow-sm">
                  الإسكندرية
                </div>
                <div className="rounded-md bg-white p-2 text-center shadow-sm">
                  المنصورة
                </div>
                <div className="rounded-md bg-white p-2 text-center shadow-sm">
                  طنطا
                </div>
                <div className="rounded-md bg-white p-2 text-center shadow-sm">
                  الاسماعيلية
                </div>
                <div className="rounded-md bg-white p-2 text-center shadow-sm">
                  بورسعيد
                </div>
              </div>
              <p className="mt-2 text-xs text-gray-500">
                *للمدن الأخرى يرجى التواصل معنا لمعرفة إمكانية الخدمة
              </p>
            </div>
            
            <div className="mt-6 flex flex-col space-y-3 sm:flex-row sm:space-x-3 sm:space-y-0 sm:rtl:space-x-reverse">
              <Button variant="orangeGradient" size="lg" className="flex-1">
                اطلب سحب الآن
              </Button>
              <Link href="/" passHref>
                <Button variant="outline" size="lg" className="flex-1">
                  العودة للرئيسية
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
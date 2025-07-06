"use client"

import React from 'react'
import { Button } from '../../../components/common/button'
import { ScanLine, CheckCircle, FileText, Settings } from 'lucide-react'
import Link from 'next/link'

export default function InspectionPage() {
  return (
    <div className="container py-12">
      <div className="mb-8">
        <h1 className="mb-4 text-3xl font-bold text-fix-blue-700">الفحص الفني للسيارات</h1>
        <p className="text-lg text-gray-600">
          يقدم Fix & Go خدمة فحص فني شامل لسيارتك قبل الشراء أو للاطمئنان على حالتها الفنية باستخدام أحدث الأجهزة.
        </p>
      </div>

      <div className="mb-10 grid grid-cols-1 gap-6 md:grid-cols-3">
        <div className="rounded-lg bg-white p-6 shadow-md transition-shadow hover:shadow-lg">
          <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-fix-blue-100 text-fix-blue-600">
            <ScanLine size={24} />
          </div>
          <h3 className="mb-2 text-xl font-bold text-fix-blue-700">فحص شامل</h3>
          <p className="text-gray-600">
            فحص دقيق لجميع أنظمة السيارة الميكانيكية والكهربائية وأنظمة الأمان
          </p>
        </div>

        <div className="rounded-lg bg-white p-6 shadow-md transition-shadow hover:shadow-lg">
          <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-fix-blue-100 text-fix-blue-600">
            <CheckCircle size={24} />
          </div>
          <h3 className="mb-2 text-xl font-bold text-fix-blue-700">تقرير مفصل</h3>
          <p className="text-gray-600">
            تقرير مفصل عن حالة السيارة مع توصيات الإصلاح والصيانة اللازمة
          </p>
        </div>

        <div className="rounded-lg bg-white p-6 shadow-md transition-shadow hover:shadow-lg">
          <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-fix-blue-100 text-fix-blue-600">
            <Settings size={24} />
          </div>
          <h3 className="mb-2 text-xl font-bold text-fix-blue-700">خبراء معتمدون</h3>
          <p className="text-gray-600">
            يتم الفحص بواسطة خبراء معتمدين مع خبرة واسعة في فحص وتقييم جميع أنواع السيارات
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        <div className="rounded-lg bg-white p-8 shadow-md">
          <h2 className="mb-6 text-2xl font-bold text-fix-blue-700">أنواع الفحص الفني</h2>
          
          <div className="space-y-6">
            <div className="rounded-md bg-fix-blue-50 p-4">
              <h3 className="mb-2 font-bold text-fix-blue-700">فحص ما قبل الشراء</h3>
              <p className="mb-3 text-gray-600">
                فحص شامل للسيارة المستعملة قبل شرائها للتأكد من حالتها الفنية وكشف أي عيوب أو مشاكل مخفية.
              </p>
              <ul className="list-inside list-disc space-y-1 text-sm text-gray-600">
                <li>فحص تاريخ السيارة والحوادث السابقة</li>
                <li>فحص المحرك وناقل الحركة</li>
                <li>فحص الهيكل والشاسيه</li>
                <li>فحص أنظمة الأمان والكهرباء</li>
                <li>قراءة أخطاء الكمبيوتر</li>
                <li>تقييم الحالة العامة للسيارة</li>
              </ul>
            </div>
            
            <div className="rounded-md bg-fix-blue-50 p-4">
              <h3 className="mb-2 font-bold text-fix-blue-700">الفحص الدوري</h3>
              <p className="mb-3 text-gray-600">
                فحص شامل للسيارة بشكل دوري للاطمئنان على حالتها والكشف المبكر عن أي مشاكل قد تظهر.
              </p>
              <ul className="list-inside list-disc space-y-1 text-sm text-gray-600">
                <li>فحص كافة السوائل والزيوت</li>
                <li>فحص المكابح والتعليق</li>
                <li>فحص الإطارات ومستوى تآكلها</li>
                <li>فحص البطارية ونظام الشحن</li>
                <li>فحص أنظمة التبريد والتكييف</li>
              </ul>
            </div>
            
            <div className="rounded-md bg-fix-blue-50 p-4">
              <h3 className="mb-2 font-bold text-fix-blue-700">فحص ما قبل السفر</h3>
              <p className="mb-3 text-gray-600">
                فحص مخصص للسيارة قبل السفر للتأكد من جاهزيتها للرحلات الطويلة وتجنب الأعطال المفاجئة.
              </p>
              <ul className="list-inside list-disc space-y-1 text-sm text-gray-600">
                <li>فحص سريع للأنظمة الحيوية</li>
                <li>التأكد من جاهزية الإطارات والمكابح</li>
                <li>فحص مستويات السوائل والزيوت</li>
                <li>فحص نظام التبريد والمكيف</li>
                <li>التأكد من توفر معدات الطوارئ</li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="rounded-lg bg-white p-8 shadow-md">
          <h2 className="mb-6 text-2xl font-bold text-fix-blue-700">احجز موعدًا للفحص الفني</h2>
          
          <div className="space-y-4">
            <div className="rounded-md bg-gray-50 p-4">
              <div className="flex items-start">
                <FileText className="mt-1 text-fix-blue-600" size={20} />
                <div className="ms-3">
                  <h3 className="font-bold text-fix-blue-700">ما الذي ستحصل عليه؟</h3>
                  <ul className="list-inside list-disc space-y-1 text-gray-600">
                    <li>فحص شامل على يد خبراء معتمدين</li>
                    <li>تقرير فني مفصل عن حالة السيارة</li>
                    <li>تقييم واضح للمشاكل المحتملة</li>
                    <li>توصيات وتقدير تكاليف الصيانة والإصلاح</li>
                    <li>نصائح للحفاظ على سيارتك في حالة جيدة</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="rounded-md bg-orange-50 p-4">
              <h3 className="mb-2 font-bold text-fix-blue-700">خيارات الفحص:</h3>
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                <div className="rounded-md bg-white p-3 shadow-sm">
                  <h4 className="font-bold text-fix-blue-600">الفحص في الموقع</h4>
                  <p className="text-sm text-gray-600">يأتي الخبير إلى موقعك لفحص السيارة</p>
                </div>
                <div className="rounded-md bg-white p-3 shadow-sm">
                  <h4 className="font-bold text-fix-blue-600">الفحص في المركز</h4>
                  <p className="text-sm text-gray-600">إحضار السيارة إلى أقرب مركز فحص</p>
                </div>
              </div>
            </div>
            
            <div className="mt-6 flex flex-col space-y-3 sm:flex-row sm:space-x-3 sm:space-y-0 sm:rtl:space-x-reverse">
              <Button variant="orangeGradient" size="lg" className="flex-1">
                احجز فحصًا الآن
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
"use client"

import React from 'react'
import { Button } from '../../../components/common/button'
import { AlertTriangle, Zap, Wrench, Car, MapPin, Clock } from 'lucide-react'
import Link from 'next/link'

export default function RoadsideAssistancePage() {
  return (
    <div className="container py-12">
      <div className="mb-8">
        <h1 className="mb-4 text-3xl font-bold text-fix-blue-700">خدمات الطوارئ على الطريق</h1>
        <p className="text-lg text-gray-600">
          مساعدة فورية على الطريق في حالات الطوارئ لسيارتك على مدار الساعة وطوال أيام الأسبوع.
        </p>
      </div>

      <div className="mb-10 rounded-lg bg-gradient-to-r from-fix-blue-600 to-fix-blue-800 p-6 text-white md:p-10">
        <div className="md:flex md:items-center md:justify-between">
          <div className="mb-6 md:mb-0 md:w-3/5">
            <h2 className="mb-4 text-2xl font-bold">خدمة طوارئ فورية</h2>
            <p className="mb-6">
              فريق الطوارئ لدينا جاهز للوصول إليك في أي مكان خلال وقت قياسي. نقدم المساعدة الفنية اللازمة لتجاوز أي مشكلة طارئة قد تواجهك على الطريق.
            </p>
            <div className="flex flex-wrap items-center gap-2 text-sm">
              <div className="rounded-full bg-white/20 px-4 py-1.5 backdrop-blur-sm">
                <Clock size={14} className="mr-1 inline" /> استجابة سريعة
              </div>
              <div className="rounded-full bg-white/20 px-4 py-1.5 backdrop-blur-sm">
                <MapPin size={14} className="mr-1 inline" /> تغطية واسعة
              </div>
              <div className="rounded-full bg-white/20 px-4 py-1.5 backdrop-blur-sm">
                <AlertTriangle size={14} className="mr-1 inline" /> 24/7 طوارئ
              </div>
            </div>
          </div>
          
          <div className="rounded-lg bg-white p-4 text-gray-800 md:w-2/5 md:p-6">
            <div className="mb-3 flex items-center">
              <AlertTriangle size={20} className="text-fix-orange" />
              <h3 className="mr-2 text-lg font-bold">للطوارئ اتصل الآن</h3>
            </div>
            <div className="mb-4 text-2xl font-bold text-fix-blue-700">
              19XXX
            </div>
            <Button variant="orangeGradient" className="w-full">
              طلب مساعدة فورية
            </Button>
          </div>
        </div>
      </div>

      <div className="mb-10">
        <h2 className="mb-6 text-center text-2xl font-bold text-fix-blue-700">خدمات المساعدة على الطريق</h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          <div className="rounded-lg bg-white p-6 shadow-md transition-all hover:-translate-y-1 hover:shadow-lg">
            <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-fix-blue-100 text-fix-blue-600">
              <Zap size={24} />
            </div>
            <h3 className="mb-2 text-xl font-bold text-fix-blue-700">شحن البطارية</h3>
            <p className="text-gray-600">
              خدمة شحن سريع للبطارية أو توصيلها بكابلات المساعدة لتشغيل السيارة في حالات تعطل البطارية المفاجئ
            </p>
          </div>

          <div className="rounded-lg bg-white p-6 shadow-md transition-all hover:-translate-y-1 hover:shadow-lg">
            <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-fix-blue-100 text-fix-blue-600">
              <Wrench size={24} />
            </div>
            <h3 className="mb-2 text-xl font-bold text-fix-blue-700">تبديل الإطارات</h3>
            <p className="text-gray-600">
              مساعدة في تبديل الإطارات المثقوبة أو التالفة على الطريق وتركيب الإطار الاحتياطي
            </p>
          </div>

          <div className="rounded-lg bg-white p-6 shadow-md transition-all hover:-translate-y-1 hover:shadow-lg">
            <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-fix-blue-100 text-fix-blue-600">
              <Car size={24} />
            </div>
            <h3 className="mb-2 text-xl font-bold text-fix-blue-700">فتح السيارات المغلقة</h3>
            <p className="text-gray-600">
              خدمة فتح الأبواب في حالات نسيان المفاتيح داخل السيارة بدون إحداث أي ضرر
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        <div className="rounded-lg bg-white p-8 shadow-md">
          <h2 className="mb-6 text-2xl font-bold text-fix-blue-700">خدمات إضافية</h2>
          
          <div className="space-y-4">
            <div className="rounded-md bg-fix-blue-50 p-4">
              <h3 className="mb-3 font-bold text-fix-blue-700">خدمات أخرى على الطريق:</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start gap-3">
                  <AlertTriangle className="mt-1 h-5 w-5 flex-shrink-0 text-fix-orange" />
                  <div>
                    <span className="font-semibold">توصيل الوقود الطارئ</span>
                    <p className="text-sm">إذا نفد وقود سيارتك على الطريق، سنقوم بتوصيل كمية من الوقود تكفي للوصول إلى أقرب محطة</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <AlertTriangle className="mt-1 h-5 w-5 flex-shrink-0 text-fix-orange" />
                  <div>
                    <span className="font-semibold">إصلاحات بسيطة</span>
                    <p className="text-sm">إصلاح الأعطال البسيطة في الموقع مثل المشاكل الكهربائية أو مشاكل التبريد</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <AlertTriangle className="mt-1 h-5 w-5 flex-shrink-0 text-fix-orange" />
                  <div>
                    <span className="font-semibold">المساعدة في حالات الحوادث</span>
                    <p className="text-sm">تقديم المساعدة الأولية في حالات الحوادث البسيطة والتنسيق مع خدمات الطوارئ</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <AlertTriangle className="mt-1 h-5 w-5 flex-shrink-0 text-fix-orange" />
                  <div>
                    <span className="font-semibold">استشارات فنية عاجلة</span>
                    <p className="text-sm">تقديم استشارات فنية عبر الهاتف لمساعدتك في حل المشاكل البسيطة</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="rounded-lg bg-white p-8 shadow-md">
          <h2 className="mb-6 text-2xl font-bold text-fix-blue-700">مناطق التغطية</h2>
          
          <div className="space-y-4">
            <div className="rounded-md bg-gray-50 p-4">
              <p className="text-gray-600">
                نغطي كافة الطرق الرئيسية والطرق السريعة في جميع أنحاء مصر، مع تركيز خاص على المدن الرئيسية والطرق بين المحافظات.
              </p>
            </div>
            
            <div className="rounded-md bg-fix-blue-50 p-4">
              <h3 className="mb-2 font-bold text-fix-blue-700">المناطق المغطاة:</h3>
              <div className="grid grid-cols-2 gap-2 text-sm md:grid-cols-3">
                <div className="rounded-md bg-white p-2 text-center shadow-sm">
                  القاهرة الكبرى
                </div>
                <div className="rounded-md bg-white p-2 text-center shadow-sm">
                  الإسكندرية
                </div>
                <div className="rounded-md bg-white p-2 text-center shadow-sm">
                  الجيزة
                </div>
                <div className="rounded-md bg-white p-2 text-center shadow-sm">
                  الطريق الصحراوي
                </div>
                <div className="rounded-md bg-white p-2 text-center shadow-sm">
                  الطريق الدائري
                </div>
                <div className="rounded-md bg-white p-2 text-center shadow-sm">
                  طريق الإسماعيلية
                </div>
                <div className="rounded-md bg-white p-2 text-center shadow-sm">
                  طنطا
                </div>
                <div className="rounded-md bg-white p-2 text-center shadow-sm">
                  المنصورة
                </div>
                <div className="rounded-md bg-white p-2 text-center shadow-sm">
                  الطريق الساحلي
                </div>
              </div>
              <p className="mt-2 text-xs text-gray-500">
                *للمناطق الأخرى يرجى الاتصال للتأكد من تغطية الخدمة
              </p>
            </div>
            
            <div className="mt-6 flex flex-col space-y-3 sm:flex-row sm:space-x-3 sm:space-y-0 sm:rtl:space-x-reverse">
              <Button variant="orangeGradient" size="lg" className="flex-1">
                طلب مساعدة الآن
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
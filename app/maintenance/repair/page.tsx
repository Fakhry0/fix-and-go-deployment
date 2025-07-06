"use client"

import React from 'react'
import { Button } from '../../../components/common/button'
import { Wrench, MessageSquare, Settings, Shield, FileCheck } from 'lucide-react'
import Link from 'next/link'

export default function RepairPage() {
  return (
    <div className="container py-12">
      <div className="mb-8">
        <h1 className="mb-4 text-3xl font-bold text-fix-blue-700">إصلاح أعطال السيارات</h1>
        <p className="text-lg text-gray-600">
          نقدم خدمات تشخيص وإصلاح كافة أنواع الأعطال والمشاكل الفنية في سيارتك بأحدث الأجهزة وعلى يد فنيين محترفين.
        </p>
      </div>

      <div className="mb-10 grid grid-cols-1 gap-8 md:grid-cols-3">
        <div className="rounded-lg bg-white p-6 shadow-md hover:shadow-lg transition-shadow">
          <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-fix-blue-100 text-fix-blue-600">
            <Shield size={24} />
          </div>
          <h3 className="mb-2 text-xl font-bold text-fix-blue-700">ضمان الجودة</h3>
          <p className="text-gray-600">
            نقدم ضمان على كافة الإصلاحات والقطع المستخدمة لتطمئن تماماً على سيارتك.
          </p>
        </div>

        <div className="rounded-lg bg-white p-6 shadow-md hover:shadow-lg transition-shadow">
          <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-fix-blue-100 text-fix-blue-600">
            <FileCheck size={24} />
          </div>
          <h3 className="mb-2 text-xl font-bold text-fix-blue-700">تشخيص دقيق</h3>
          <p className="text-gray-600">
            نستخدم أحدث أجهزة التشخيص للكشف عن أعطال سيارتك بدقة عالية.
          </p>
        </div>

        <div className="rounded-lg bg-white p-6 shadow-md hover:shadow-lg transition-shadow">
          <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-fix-blue-100 text-fix-blue-600">
            <Settings size={24} />
          </div>
          <h3 className="mb-2 text-xl font-bold text-fix-blue-700">فنيين محترفين</h3>
          <p className="text-gray-600">
            فريق من الفنيين المدربين على أعلى مستوى وذوي خبرة طويلة في مجال إصلاح السيارات.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        <div className="rounded-lg bg-white p-8 shadow-md">
          <h2 className="mb-6 text-2xl font-bold text-fix-blue-700">خدمات إصلاح الأعطال</h2>
          
          <div className="space-y-4">
            <div className="rounded-md bg-fix-blue-50 p-4">
              <h3 className="mb-2 font-bold text-fix-blue-700">نقدم إصلاح لجميع أنواع الأعطال:</h3>
              <ul className="grid grid-cols-1 gap-2 text-gray-600 sm:grid-cols-2">
                <li className="flex items-center">
                  <Wrench size={16} className="me-2 text-fix-blue-600" />
                  <span>أعطال المحرك</span>
                </li>
                <li className="flex items-center">
                  <Wrench size={16} className="me-2 text-fix-blue-600" />
                  <span>مشاكل ناقل الحركة</span>
                </li>
                <li className="flex items-center">
                  <Wrench size={16} className="me-2 text-fix-blue-600" />
                  <span>نظام التبريد</span>
                </li>
                <li className="flex items-center">
                  <Wrench size={16} className="me-2 text-fix-blue-600" />
                  <span>مشاكل الفرامل</span>
                </li>
                <li className="flex items-center">
                  <Wrench size={16} className="me-2 text-fix-blue-600" />
                  <span>أعطال كهربائية</span>
                </li>
                <li className="flex items-center">
                  <Wrench size={16} className="me-2 text-fix-blue-600" />
                  <span>أنظمة الوقود</span>
                </li>
                <li className="flex items-center">
                  <Wrench size={16} className="me-2 text-fix-blue-600" />
                  <span>نظام التعليق</span>
                </li>
                <li className="flex items-center">
                  <Wrench size={16} className="me-2 text-fix-blue-600" />
                  <span>تكييف السيارة</span>
                </li>
              </ul>
            </div>
            
            <div className="rounded-md bg-gray-50 p-4">
              <p className="text-gray-600">
                نستخدم أحدث التقنيات ومعدات التشخيص لتحديد المشكلة بدقة وإصلاحها بسرعة وكفاءة، مما يوفر عليك الوقت والتكلفة.
              </p>
            </div>
          </div>
        </div>
        
        <div className="rounded-lg bg-white p-8 shadow-md">
          <h2 className="mb-6 text-2xl font-bold text-fix-blue-700">اطلب خدمة إصلاح الأعطال</h2>
          
          <div className="space-y-4">
            <div className="rounded-md bg-orange-50 p-4">
              <div className="flex items-start">
                <MessageSquare className="mt-1 text-fix-orange" size={20} />
                <div className="ms-3">
                  <h3 className="font-bold text-fix-blue-700">كيف تعمل الخدمة؟</h3>
                  <ol className="list-inside list-decimal space-y-1 text-gray-600">
                    <li>اختر نوع المشكلة وصفها بإيجاز</li>
                    <li>حدد موقعك الحالي أو عنوان تواجد السيارة</li>
                    <li>اختر الوقت المناسب للخدمة</li>
                    <li>سيصلك فريقنا المختص في الموعد المحدد</li>
                  </ol>
                </div>
              </div>
            </div>
            
            <div className="rounded-md bg-gray-50 p-4">
              <p className="text-sm text-gray-600">
                يمكنك أيضاً إحضار سيارتك إلى أحد مراكز الصيانة التابعة لنا، حيث سيقوم فريقنا المتخصص بتشخيص المشكلة وإصلاحها.
              </p>
            </div>
            
            <div className="mt-6 flex flex-col space-y-3 sm:flex-row sm:space-x-3 sm:space-y-0 sm:rtl:space-x-reverse">
              <Button variant="orangeGradient" size="lg" className="flex-1">
                اطلب الخدمة الآن
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
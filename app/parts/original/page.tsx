"use client"

import React from 'react'
import { Button } from '../../../components/common/button'
import { ShoppingBag, Search, CheckCircle, Filter, ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

export default function OriginalPartsPage() {
  // بيانات وهمية لقطع الغيار الأصلية
  const originalParts = [
    {
      id: "1",
      title: "فلتر زيت تويوتا أصلي",
      category: "فلاتر",
      price: 450,
      oldPrice: 550,
      rating: 4.9,
      imageSrc: "https://placehold.co/300x300/e2e8f0/334155?text=فلتر+زيت+تويوتا",
      brand: "Toyota",
      manufacturer: "Toyota"
    },
    {
      id: "2",
      title: "مكابح أمامية أصلية هوندا",
      category: "مكابح",
      price: 2800,
      oldPrice: 3200,
      rating: 4.8,
      imageSrc: "https://placehold.co/300x300/e2e8f0/334155?text=مكابح+هوندا",
      brand: "Honda",
      manufacturer: "Honda"
    },
    {
      id: "3",
      title: "بطارية 90 أمبير نيسان",
      category: "بطاريات",
      price: 3400,
      oldPrice: 3800,
      rating: 4.7,
      imageSrc: "https://placehold.co/300x300/e2e8f0/334155?text=بطارية+نيسان",
      brand: "Nissan",
      manufacturer: "Nissan"
    },
    {
      id: "4",
      title: "شمعات إشعال مرسيدس أصلية",
      category: "كهرباء",
      price: 1200,
      oldPrice: 1450,
      rating: 4.9,
      imageSrc: "https://placehold.co/300x300/e2e8f0/334155?text=شمعات+مرسيدس",
      brand: "Mercedes",
      manufacturer: "Mercedes-Benz"
    },
    {
      id: "5",
      title: "مجموعة تيل فرامل بي ام دبليو",
      category: "فرامل",
      price: 2500,
      oldPrice: 2850,
      rating: 4.6,
      imageSrc: "https://placehold.co/300x300/e2e8f0/334155?text=تيل+فرامل+BMW",
      brand: "BMW",
      manufacturer: "BMW"
    },
    {
      id: "6",
      title: "فلتر هواء أودي أصلي",
      category: "فلاتر",
      price: 680,
      oldPrice: 790,
      rating: 4.8,
      imageSrc: "https://placehold.co/300x300/e2e8f0/334155?text=فلتر+هواء+أودي",
      brand: "Audi",
      manufacturer: "Audi"
    }
  ];

  return (
    <div className="container py-12">
      {/* رأس الصفحة */}
      <div className="mb-6">
        <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
          <Link href="/parts" className="hover:text-fix-blue-600">قطع الغيار</Link>
          <span>/</span>
          <span>قطع غيار أصلية</span>
        </div>
        
        <h1 className="text-3xl font-bold text-fix-blue-700 mb-4">قطع غيار أصلية</h1>
        <p className="text-lg text-gray-600">
          قطع غيار أصلية من الشركات المصنعة للسيارات مع ضمان الجودة والمطابقة التامة لمواصفات سيارتك
        </p>
      </div>

      {/* قسم البحث والفلترة */}
      <div className="bg-white rounded-lg shadow-md p-4 mb-8">
        <div className="flex flex-wrap gap-4">
          <div className="w-full md:w-auto flex-1">
            <div className="relative">
              <input
                type="text"
                placeholder="ابحث عن قطعة غيار أصلية..."
                className="w-full rounded-md border border-gray-300 py-2 pl-4 pr-10"
              />
              <Search size={20} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            </div>
          </div>
          
          <div className="w-full md:w-auto flex flex-wrap gap-2">
            <select className="rounded-md border border-gray-300 py-2 px-3 bg-white">
              <option value="">الماركة</option>
              <option value="toyota">تويوتا</option>
              <option value="honda">هوندا</option>
              <option value="nissan">نيسان</option>
              <option value="mercedes">مرسيدس</option>
            </select>
            
            <select className="rounded-md border border-gray-300 py-2 px-3 bg-white">
              <option value="">الموديل</option>
            </select>
            
            <select className="rounded-md border border-gray-300 py-2 px-3 bg-white">
              <option value="">الفئة</option>
              <option value="filters">فلاتر</option>
              <option value="brakes">فرامل</option>
              <option value="batteries">بطاريات</option>
              <option value="electrical">كهرباء</option>
            </select>
            
            <Button variant="primary" size="default" className="flex items-center gap-2">
              <Filter size={16} />
              <span>فلترة</span>
            </Button>
          </div>
        </div>
      </div>

      {/* شعار قطع الغيار الأصلية */}
      <div className="bg-gradient-to-r from-fix-blue-600 to-fix-blue-800 text-white rounded-lg p-6 mb-8">
        <div className="md:flex items-center">
          <div className="md:w-3/4">
            <h2 className="text-2xl font-bold mb-3">قطع غيار أصلية 100%</h2>
            <p className="mb-4">
              جميع قطع الغيار الأصلية المعروضة مستوردة مباشرة من الشركات المصنعة بضمان أصالة المنتج وجودته. نقدم شهادة أصالة وضمان على جميع القطع لضمان أقصى أداء وعمر افتراضي لسيارتك.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-1 bg-white/20 rounded-full px-3 py-1">
                <CheckCircle size={16} />
                <span>ضمان أصالة</span>
              </div>
              <div className="flex items-center gap-1 bg-white/20 rounded-full px-3 py-1">
                <CheckCircle size={16} />
                <span>توافق تام</span>
              </div>
              <div className="flex items-center gap-1 bg-white/20 rounded-full px-3 py-1">
                <CheckCircle size={16} />
                <span>كفالة مصنع</span>
              </div>
            </div>
          </div>
          <div className="hidden md:block md:w-1/4">
            <div className="flex justify-center">
              <div className="h-28 w-28 rounded-full bg-white flex items-center justify-center p-2">
                <CheckCircle size={64} className="text-fix-blue-600" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* قائمة المنتجات */}
      <div className="mb-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {originalParts.map((part) => (
            <div key={part.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="relative h-48 bg-gray-100">
                <div className="absolute top-2 right-2 z-10 bg-fix-orange text-white text-xs font-bold px-2 py-1 rounded-md">
                  أصلي
                </div>
                <Image
                  src={part.imageSrc}
                  alt={part.title}
                  fill
                  className="object-contain p-4"
                />
              </div>
              <div className="p-4">
                <div className="text-xs text-gray-500 mb-1">{part.category}</div>
                <h3 className="font-bold text-gray-800 mb-1">{part.title}</h3>
                <div className="flex items-center mb-2">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        xmlns="http://www.w3.org/2000/svg"
                        className={`h-4 w-4 ${
                          i < Math.floor(part.rating) ? "text-yellow-400" : "text-gray-300"
                        } fill-current`}
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <span className="text-xs text-gray-500 mr-1">({part.rating})</span>
                </div>
                <div className="mb-3 flex items-center">
                  <div className="font-bold text-fix-blue-700">{part.price} ج.م</div>
                  {part.oldPrice && (
                    <div className="text-sm text-gray-500 line-through mr-2">{part.oldPrice} ج.م</div>
                  )}
                </div>
                <div className="text-xs text-gray-600 mb-3 flex items-center">
                  <span className="font-semibold">الشركة المصنعة:</span>
                  <span className="mr-1">{part.manufacturer}</span>
                </div>
                <Button variant="primary" size="sm" className="w-full flex items-center justify-center gap-2">
                  <ShoppingBag size={16} />
                  <span>أضف للسلة</span>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* زر العودة لقطع الغيار */}
      <div className="mt-8 text-center">
        <Link href="/parts" passHref>
          <Button variant="outline" className="inline-flex items-center gap-2">
            <ArrowLeft size={16} />
            <span>العودة لقطع الغيار</span>
          </Button>
        </Link>
      </div>
    </div>
  )
}
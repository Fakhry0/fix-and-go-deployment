"use client"

import React from 'react'
import { Button } from '../../components/common/button'
import { ShoppingBag, Search, CheckCircle, Truck, Shield } from 'lucide-react'
import Link from 'next/link'
import { ProductCard } from '../../components/ui/product-card'

export default function PartsPage() {
  // بيانات وهمية لقطع الغيار المميزة
  const featuredParts = [
    {
      id: "1",
      title: "فلتر زيت أصلي",
      category: "فلاتر",
      price: 350,
      oldPrice: 299,
      rating: 4.8,
      imageSrc: "https://placehold.co/300x300/e2e8f0/334155?text=فلتر+زيت",
      isOriginal: true,
    },
    {
      id: "2",
      title: "بطارية 60 أمبير",
      category: "بطاريات",
      price: 1800,
      oldPrice: 1650,
      rating: 4.7,
      imageSrc: "https://placehold.co/300x300/e2e8f0/334155?text=بطارية",
      isOriginal: true,
    },
    {
      id: "3",
      title: "طقم فرامل أمامي",
      category: "فرامل",
      price: 1200,
      oldPrice: 950,
      rating: 4.9,
      imageSrc: "https://placehold.co/300x300/e2e8f0/334155?text=فرامل",
      isOriginal: true,
    },
    {
      id: "4",
      title: "شمعات إشعال - طقم",
      category: "كهرباء",
      price: 450,
      oldPrice: 380,
      rating: 4.6,
      imageSrc: "https://placehold.co/300x300/e2e8f0/334155?text=شمعات",
      isOriginal: true,
    }
  ]

  // إضافة وظائف معالجة الأحداث
  const handleAddToCart = (id: string) => {
    console.log(`إضافة المنتج ${id} إلى السلة`);
  };

  const handleAddToWishlist = (id: string) => {
    console.log(`إضافة المنتج ${id} إلى المفضلة`);
  };

  return (
    <div className="container py-12">
      <div className="mb-8">
        <h1 className="mb-4 text-3xl font-bold text-fix-blue-700">قطع غيار السيارات</h1>
        <p className="text-lg text-gray-600">
          توفير قطع الغيار الأصلية والبديلة بجودة عالية وأسعار تنافسية مع ضمان المطابقة والجودة.
        </p>
      </div>

      {/* قسم البحث عن قطع الغيار */}
      <div className="mb-10 rounded-lg bg-gradient-to-r from-fix-blue-600 to-fix-blue-800 p-8 text-white">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-6 text-center text-2xl font-bold">ابحث عن قطع الغيار المناسبة لسيارتك</h2>
          
          <div className="mb-6 grid grid-cols-1 gap-4 md:grid-cols-3">
            <div>
              <label className="mb-1 block text-sm">ماركة السيارة</label>
              <select className="w-full rounded-md border-gray-300 bg-white p-2 text-gray-800">
                <option value="">اختر الماركة</option>
                <option value="toyota">تويوتا</option>
                <option value="nissan">نيسان</option>
                <option value="honda">هوندا</option>
                <option value="hyundai">هيونداي</option>
                <option value="kia">كيا</option>
                <option value="chevrolet">شيفروليه</option>
                <option value="mercedes">مرسيدس</option>
                <option value="bmw">بي إم دبليو</option>
              </select>
            </div>
            <div>
              <label className="mb-1 block text-sm">موديل السيارة</label>
              <select className="w-full rounded-md border-gray-300 bg-white p-2 text-gray-800">
                <option value="">اختر الموديل</option>
              </select>
            </div>
            <div>
              <label className="mb-1 block text-sm">سنة الصنع</label>
              <select className="w-full rounded-md border-gray-300 bg-white p-2 text-gray-800">
                <option value="">اختر السنة</option>
                <option value="2023">2023</option>
                <option value="2022">2022</option>
                <option value="2021">2021</option>
                <option value="2020">2020</option>
                <option value="2019">2019</option>
              </select>
            </div>
          </div>
          
          <div className="relative">
            <input
              type="text"
              placeholder="ابحث عن قطعة الغيار..."
              className="w-full rounded-md border-gray-300 bg-white py-3 pl-4 pr-12 text-gray-800"
            />
            <button className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-fix-orange p-2 text-white hover:bg-fix-orange/90">
              <Search size={20} />
            </button>
          </div>
        </div>
      </div>

      {/* قسم مميزات التسوق */}
      <div className="mb-10">
        <h2 className="mb-6 text-center text-2xl font-bold text-fix-blue-700">لماذا تختار قطع غيار Fix & Go؟</h2>
        
        <div className="grid grid-cols-1 gap-6 md:grid-cols-4">
          <div className="rounded-lg bg-white p-6 text-center shadow-md">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-fix-blue-100">
              <CheckCircle size={30} className="text-fix-blue-600" />
            </div>
            <h3 className="mb-2 font-bold text-gray-800">جودة مضمونة</h3>
            <p className="text-sm text-gray-600">
              جميع قطع الغيار أصلية أو بديل عالي الجودة مع ضمان المطابقة
            </p>
          </div>
          
          <div className="rounded-lg bg-white p-6 text-center shadow-md">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-fix-blue-100">
              <Truck size={30} className="text-fix-blue-600" />
            </div>
            <h3 className="mb-2 font-bold text-gray-800">توصيل سريع</h3>
            <p className="text-sm text-gray-600">
              توصيل في نفس اليوم أو خلال 24 ساعة حسب المنطقة
            </p>
          </div>
          
          <div className="rounded-lg bg-white p-6 text-center shadow-md">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-fix-blue-100">
              <Shield size={30} className="text-fix-blue-600" />
            </div>
            <h3 className="mb-2 font-bold text-gray-800">ضمان شامل</h3>
            <p className="text-sm text-gray-600">
              ضمان على جميع القطع مع إمكانية الاستبدال أو الاسترجاع
            </p>
          </div>
          
          <div className="rounded-lg bg-white p-6 text-center shadow-md">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-fix-blue-100">
              <ShoppingBag size={30} className="text-fix-blue-600" />
            </div>
            <h3 className="mb-2 font-bold text-gray-800">تشكيلة واسعة</h3>
            <p className="text-sm text-gray-600">
              آلاف القطع المتوفرة لمختلف الماركات والموديلات
            </p>
          </div>
        </div>
      </div>

      {/* قسم المنتجات المميزة */}
      <div className="mb-10">
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-2xl font-bold text-fix-blue-700">قطع غيار مميزة</h2>
          <Link href="#" className="text-fix-blue-600 hover:underline">
            عرض الكل
          </Link>
        </div>
        
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-4">
          {featuredParts.map((part) => (
            <ProductCard
              key={part.id}
              id={part.id}
              title={part.title}
              category={part.category}
              price={part.price}
              oldPrice={part.oldPrice}
              rating={part.rating}
              imageSrc={part.imageSrc}
              isOriginal={part.isOriginal}
              onAddToCart={handleAddToCart}
              onAddToWishlist={handleAddToWishlist}
            />
          ))}
        </div>
      </div>

      {/* قسم الفئات */}
      <div className="mb-10">
        <h2 className="mb-6 text-2xl font-bold text-fix-blue-700">تصفح حسب الفئة</h2>
        
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-6">
          {['زيوت ومرشحات', 'فرامل', 'تعليق وتوجيه', 'كهرباء', 'محرك', 'تكييف وتبريد'].map((category, index) => (
            <Link 
              href="#" 
              key={index}
              className="flex flex-col items-center rounded-lg bg-white p-4 text-center shadow-md transition-transform hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-fix-blue-100 text-fix-blue-600">
                <ShoppingBag size={24} />
              </div>
              <h3 className="font-bold text-fix-blue-700">{category}</h3>
            </Link>
          ))}
        </div>
      </div>

      {/* قسم التركيب والصيانة */}
      <div className="rounded-lg bg-gray-50 p-8">
        <div className="md:flex md:items-center md:justify-between">
          <div className="mb-6 md:mb-0 md:w-2/3">
            <h2 className="mb-4 text-2xl font-bold text-fix-blue-700">تركيب وصيانة متكاملة</h2>
            <p className="mb-4 text-gray-600">
              عند شراء قطع الغيار من Fix & Go، يمكنك الاستفادة من خدمات التركيب والصيانة على يد فنيين محترفين بأسعار تنافسية.
            </p>
            <ul className="mb-6 space-y-2 text-gray-600">
              <li className="flex items-center">
                <CheckCircle size={18} className="mr-2 text-fix-blue-600" />
                <span>تركيب احترافي وفقاً للمعايير الفنية</span>
              </li>
              <li className="flex items-center">
                <CheckCircle size={18} className="mr-2 text-fix-blue-600" />
                <span>أسعار خاصة للتركيب عند شراء القطع منا</span>
              </li>
              <li className="flex items-center">
                <CheckCircle size={18} className="mr-2 text-fix-blue-600" />
                <span>ضمان إضافي على الخدمة والتركيب</span>
              </li>
            </ul>
            <Button variant="orangeGradient">
              احجز موعد تركيب
            </Button>
          </div>
          
          <div className="hidden h-64 w-64 rounded-full bg-gray-200 md:block">
            {/* هنا يمكن وضع صورة تعبيرية */}
            <div className="flex h-full w-full items-center justify-center text-gray-400">
              <Truck size={100} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
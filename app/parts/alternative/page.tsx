"use client"

import React from 'react'
import { Button } from '../../../components/common/button'
import { ShoppingBag, Search, CheckCircle, Filter, ArrowLeft, Star } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

export default function AlternativePartsPage() {
  // بيانات وهمية لقطع الغيار البديلة
  const alternativeParts = [
    {
      id: "1",
      title: "فلتر زيت عالي الجودة",
      category: "فلاتر",
      price: 180,
      oldPrice: 220,
      rating: 4.6,
      imageSrc: "https://placehold.co/300x300/e2e8f0/334155?text=فلتر+زيت",
      brand: "Bosch",
      compatibility: "Toyota, Honda, Nissan"
    },
    {
      id: "2",
      title: "طقم مكابح أمامية",
      category: "مكابح",
      price: 950,
      oldPrice: 1200,
      rating: 4.5,
      imageSrc: "https://placehold.co/300x300/e2e8f0/334155?text=مكابح",
      brand: "Brembo",
      compatibility: "Hyundai, Kia"
    },
    {
      id: "3",
      title: "بطارية 70 أمبير",
      category: "بطاريات",
      price: 1800,
      oldPrice: 2100,
      rating: 4.7,
      imageSrc: "https://placehold.co/300x300/e2e8f0/334155?text=بطارية",
      brand: "Varta",
      compatibility: "متعددة"
    },
    {
      id: "4",
      title: "شمعات إشعال - طقم",
      category: "كهرباء",
      price: 450,
      oldPrice: 550,
      rating: 4.4,
      imageSrc: "https://placehold.co/300x300/e2e8f0/334155?text=شمعات",
      brand: "NGK",
      compatibility: "متعددة"
    },
    {
      id: "5",
      title: "فلتر هواء بريميوم",
      category: "فلاتر",
      price: 220,
      oldPrice: 280,
      rating: 4.5,
      imageSrc: "https://placehold.co/300x300/e2e8f0/334155?text=فلتر+هواء",
      brand: "Mann",
      compatibility: "BMW, Mercedes"
    },
    {
      id: "6",
      title: "زيت محرك اصطناعي كامل 5W-40",
      category: "زيوت",
      price: 750,
      oldPrice: 850,
      rating: 4.8,
      imageSrc: "https://placehold.co/300x300/e2e8f0/334155?text=زيت+محرك",
      brand: "Mobil",
      compatibility: "متعددة"
    },
    {
      id: "7",
      title: "طقم تعليق أمامي",
      category: "تعليق",
      price: 1650,
      oldPrice: 1850,
      rating: 4.3,
      imageSrc: "https://placehold.co/300x300/e2e8f0/334155?text=تعليق",
      brand: "KYB",
      compatibility: "Toyota, Honda"
    },
    {
      id: "8",
      title: "مسحات زجاج أمامية",
      category: "ملحقات",
      price: 280,
      oldPrice: 320,
      rating: 4.5,
      imageSrc: "https://placehold.co/300x300/e2e8f0/334155?text=مسحات",
      brand: "Bosch",
      compatibility: "متعددة"
    }
  ];

  const brands = [
    { name: "Bosch", logo: "https://placehold.co/100x50/e2e8f0/334155?text=Bosch" },
    { name: "NGK", logo: "https://placehold.co/100x50/e2e8f0/334155?text=NGK" },
    { name: "Brembo", logo: "https://placehold.co/100x50/e2e8f0/334155?text=Brembo" },
    { name: "Mann", logo: "https://placehold.co/100x50/e2e8f0/334155?text=Mann" },
    { name: "Varta", logo: "https://placehold.co/100x50/e2e8f0/334155?text=Varta" }
  ];

  return (
    <div className="container py-12">
      {/* رأس الصفحة */}
      <div className="mb-6">
        <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
          <Link href="/parts" className="hover:text-fix-blue-600">قطع الغيار</Link>
          <span>/</span>
          <span>قطع غيار بديلة</span>
        </div>
        
        <h1 className="text-3xl font-bold text-fix-blue-700 mb-4">قطع غيار بديلة</h1>
        <p className="text-lg text-gray-600">
          قطع غيار بديلة عالية الجودة من أشهر العلامات التجارية العالمية بأسعار تنافسية
        </p>
      </div>

      {/* قسم البحث والفلترة */}
      <div className="bg-white rounded-lg shadow-md p-4 mb-8">
        <div className="flex flex-wrap gap-4">
          <div className="w-full md:w-auto flex-1">
            <div className="relative">
              <input
                type="text"
                placeholder="ابحث عن قطعة غيار بديلة..."
                className="w-full rounded-md border border-gray-300 py-2 pl-4 pr-10"
              />
              <Search size={20} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            </div>
          </div>
          
          <div className="w-full md:w-auto flex flex-wrap gap-2">
            <select className="rounded-md border border-gray-300 py-2 px-3 bg-white">
              <option value="">نوع السيارة</option>
              <option value="sedan">سيدان</option>
              <option value="suv">دفع رباعي</option>
              <option value="compact">مدمجة</option>
            </select>
            
            <select className="rounded-md border border-gray-300 py-2 px-3 bg-white">
              <option value="">العلامة التجارية</option>
              <option value="bosch">Bosch</option>
              <option value="ngk">NGK</option>
              <option value="brembo">Brembo</option>
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

      {/* العلامات التجارية */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <h2 className="text-xl font-bold text-fix-blue-700 mb-4">أشهر العلامات التجارية</h2>
        <div className="flex flex-wrap justify-center gap-8">
          {brands.map((brand, index) => (
            <div key={index} className="flex items-center justify-center hover:scale-110 transition-transform">
              <Image
                src={brand.logo}
                alt={brand.name}
                width={100}
                height={50}
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>

      {/* مميزات قطع الغيار البديلة */}
      <div className="bg-gradient-to-r from-fix-blue-600 to-fix-blue-800 text-white rounded-lg p-6 mb-8">
        <div className="md:flex items-center">
          <div className="md:w-full">
            <h2 className="text-2xl font-bold mb-3">قطع غيار بديلة بجودة عالية</h2>
            <p className="mb-4">
              نقدم قطع غيار بديلة ذات جودة عالية مطابقة للمعايير العالمية وبأسعار مناسبة. جميع القطع مضمونة وتخضع لاختبارات الجودة لضمان أداء مثالي.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
                <div className="flex items-center gap-2 mb-2">
                  <CheckCircle size={20} className="text-fix-orange" />
                  <h3 className="font-bold">جودة عالمية</h3>
                </div>
                <p className="text-sm">منتجات من أكبر الشركات العالمية المتخصصة في صناعة قطع الغيار</p>
              </div>
              <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
                <div className="flex items-center gap-2 mb-2">
                  <CheckCircle size={20} className="text-fix-orange" />
                  <h3 className="font-bold">توافق مثالي</h3>
                </div>
                <p className="text-sm">قطع غيار متوافقة مع مختلف أنواع السيارات وتطابق المواصفات الفنية</p>
              </div>
              <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
                <div className="flex items-center gap-2 mb-2">
                  <CheckCircle size={20} className="text-fix-orange" />
                  <h3 className="font-bold">ضمان شامل</h3>
                </div>
                <p className="text-sm">ضمان على جميع القطع مع إمكانية الاستبدال حسب سياسة الشركة المصنعة</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* قائمة المنتجات */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-fix-blue-700 mb-4">منتجات مميزة</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {alternativeParts.map((part) => (
            <div key={part.id} className="bg-white rounded-lg shadow-md overflow-hidden group hover:shadow-lg transition-all">
              <div className="relative h-48 bg-gray-100">
                <div className="absolute top-2 right-2 z-10 bg-fix-blue-600 text-white text-xs font-bold px-2 py-1 rounded-md">
                  بديل
                </div>
                <Image
                  src={part.imageSrc}
                  alt={part.title}
                  fill
                  className="object-contain p-4 group-hover:scale-105 transition-transform"
                />
              </div>
              <div className="p-4">
                <div className="text-xs text-gray-500 mb-1">{part.category}</div>
                <h3 className="font-bold text-gray-800 mb-1">{part.title}</h3>
                <div className="flex items-center mb-2">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={14}
                        className={`${
                          i < Math.floor(part.rating) ? "text-yellow-400" : "text-gray-300"
                        } fill-current`}
                      />
                    ))}
                  </div>
                  <span className="text-xs text-gray-500 mr-1">({part.rating})</span>
                </div>
                <div className="mb-2 flex items-center">
                  <div className="font-bold text-fix-blue-700">{part.price} ج.م</div>
                  {part.oldPrice && (
                    <div className="text-sm text-gray-500 line-through mr-2">{part.oldPrice} ج.م</div>
                  )}
                </div>
                <div className="text-xs bg-gray-50 rounded p-1.5 mb-3">
                  <div className="flex">
                    <span className="font-semibold ml-1">العلامة التجارية:</span>
                    <span>{part.brand}</span>
                  </div>
                  <div className="flex mt-1">
                    <span className="font-semibold ml-1">يناسب:</span>
                    <span>{part.compatibility}</span>
                  </div>
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
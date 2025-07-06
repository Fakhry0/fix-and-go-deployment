"use client"

import React from 'react'
import { Button } from '../../../components/common/button'
import { ShoppingBag, Search, ArrowLeft, Filter, Tag, ThumbsUp } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

export default function AccessoriesPage() {
  // بيانات وهمية للإكسسوارات
  const accessories = [
    {
      id: "1",
      title: "حامل هاتف للسيارة مغناطيسي",
      category: "حوامل وشواحن",
      price: 250,
      oldPrice: 300,
      rating: 4.7,
      imageSrc: "https://placehold.co/300x300/e2e8f0/334155?text=حامل+هاتف",
      brand: "Baseus"
    },
    {
      id: "2",
      title: "شاحن سيارة سريع متعدد المنافذ",
      category: "حوامل وشواحن",
      price: 320,
      oldPrice: 380,
      rating: 4.5,
      imageSrc: "https://placehold.co/300x300/e2e8f0/334155?text=شاحن+سيارة",
      brand: "Anker"
    },
    {
      id: "3",
      title: "مضخة هواء محمولة للسيارة",
      category: "معدات طوارئ",
      price: 750,
      oldPrice: 850,
      rating: 4.6,
      imageSrc: "https://placehold.co/300x300/e2e8f0/334155?text=مضخة+هواء",
      brand: "Mi"
    },
    {
      id: "4",
      title: "مصابيح LED للسيارة",
      category: "إضاءة",
      price: 450,
      oldPrice: 500,
      rating: 4.4,
      imageSrc: "https://placehold.co/300x300/e2e8f0/334155?text=مصابيح+LED",
      brand: "Phillips"
    },
    {
      id: "5",
      title: "دواسات أرضية مطاطية",
      category: "إكسسوارات داخلية",
      price: 580,
      oldPrice: 650,
      rating: 4.8,
      imageSrc: "https://placehold.co/300x300/e2e8f0/334155?text=دواسات+أرضية",
      brand: "WeatherTech"
    },
    {
      id: "6",
      title: "غطاء مقود جلد فاخر",
      category: "إكسسوارات داخلية",
      price: 350,
      oldPrice: 400,
      rating: 4.6,
      imageSrc: "https://placehold.co/300x300/e2e8f0/334155?text=غطاء+مقود",
      brand: "KINGLETING"
    },
    {
      id: "7",
      title: "كاميرا خلفية للسيارة HD",
      category: "إلكترونيات",
      price: 1200,
      oldPrice: 1400,
      rating: 4.5,
      imageSrc: "https://placehold.co/300x300/e2e8f0/334155?text=كاميرا+خلفية",
      brand: "AUTO-VOX"
    },
    {
      id: "8",
      title: "طفاية حريق صغيرة للسيارة",
      category: "معدات طوارئ",
      price: 280,
      oldPrice: 320,
      rating: 4.9,
      imageSrc: "https://placehold.co/300x300/e2e8f0/334155?text=طفاية+حريق",
      brand: "First Alert"
    },
    {
      id: "9",
      title: "ستائر شمسية جانبية",
      category: "إكسسوارات داخلية",
      price: 180,
      oldPrice: 220,
      rating: 4.3,
      imageSrc: "https://placehold.co/300x300/e2e8f0/334155?text=ستائر+شمسية",
      brand: "Enovoe"
    },
    {
      id: "10",
      title: "منظم تخزين لشنطة السيارة",
      category: "إكسسوارات داخلية",
      price: 420,
      oldPrice: 500,
      rating: 4.7,
      imageSrc: "https://placehold.co/300x300/e2e8f0/334155?text=منظم+تخزين",
      brand: "FORTEM"
    },
    {
      id: "11",
      title: "مساند رأس مريحة للرقبة",
      category: "راحة وإرجونوميكس",
      price: 320,
      oldPrice: 380,
      rating: 4.5,
      imageSrc: "https://placehold.co/300x300/e2e8f0/334155?text=مساند+رأس",
      brand: "ZATOOTO"
    },
    {
      id: "12",
      title: "عدة إصلاح إطارات طوارئ",
      category: "معدات طوارئ",
      price: 290,
      oldPrice: 350,
      rating: 4.4,
      imageSrc: "https://placehold.co/300x300/e2e8f0/334155?text=إصلاح+إطارات",
      brand: "Slime"
    }
  ];

  // تصنيف الإكسسوارات حسب الفئات
  const categories = [
    {
      name: "إكسسوارات داخلية",
      icon: "https://placehold.co/50x50/e2e8f0/334155?text=داخلية"
    },
    {
      name: "معدات طوارئ",
      icon: "https://placehold.co/50x50/e2e8f0/334155?text=طوارئ"
    },
    {
      name: "حوامل وشواحن",
      icon: "https://placehold.co/50x50/e2e8f0/334155?text=شواحن"
    },
    {
      name: "إلكترونيات",
      icon: "https://placehold.co/50x50/e2e8f0/334155?text=إلكترونيات"
    },
    {
      name: "راحة وإرجونوميكس",
      icon: "https://placehold.co/50x50/e2e8f0/334155?text=راحة"
    },
    {
      name: "إضاءة",
      icon: "https://placehold.co/50x50/e2e8f0/334155?text=إضاءة"
    }
  ];

  return (
    <div className="container py-12">
      {/* رأس الصفحة */}
      <div className="mb-6">
        <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
          <Link href="/parts" className="hover:text-fix-blue-600">قطع الغيار</Link>
          <span>/</span>
          <span>إكسسوارات السيارات</span>
        </div>
        
        <h1 className="text-3xl font-bold text-fix-blue-700 mb-4">إكسسوارات السيارات</h1>
        <p className="text-lg text-gray-600">
          مجموعة متنوعة من إكسسوارات السيارات عالية الجودة لتحسين تجربة القيادة والراحة والأمان
        </p>
      </div>

      {/* قسم البحث والفلترة */}
      <div className="bg-white rounded-lg shadow-md p-4 mb-8">
        <div className="flex flex-wrap gap-4">
          <div className="w-full md:w-auto flex-1">
            <div className="relative">
              <input
                type="text"
                placeholder="ابحث عن إكسسوارات..."
                className="w-full rounded-md border border-gray-300 py-2 pl-4 pr-10"
              />
              <Search size={20} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            </div>
          </div>
          
          <div className="w-full md:w-auto flex flex-wrap gap-2">
            <select className="rounded-md border border-gray-300 py-2 px-3 bg-white">
              <option value="">التصنيف</option>
              <option value="interior">إكسسوارات داخلية</option>
              <option value="emergency">معدات طوارئ</option>
              <option value="electronics">إلكترونيات</option>
              <option value="lighting">إضاءة</option>
            </select>
            
            <select className="rounded-md border border-gray-300 py-2 px-3 bg-white">
              <option value="">ترتيب حسب</option>
              <option value="price-asc">السعر: من الأقل للأعلى</option>
              <option value="price-desc">السعر: من الأعلى للأقل</option>
              <option value="rating">التقييم</option>
              <option value="newest">الأحدث</option>
            </select>
            
            <Button variant="primary" size="default" className="flex items-center gap-2">
              <Filter size={16} />
              <span>فلترة</span>
            </Button>
          </div>
        </div>
      </div>

      {/* تصنيفات الإكسسوارات */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <h2 className="text-xl font-bold text-fix-blue-700 mb-4">تصفح حسب التصنيف</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
          {categories.map((category, index) => (
            <div 
              key={index}
              className="flex flex-col items-center justify-center p-4 rounded-lg border border-gray-200 hover:border-fix-blue-400 hover:shadow-md transition-all text-center cursor-pointer"
            >
              <div className="w-12 h-12 mb-2 rounded-full bg-fix-blue-50 flex items-center justify-center">
                <Image
                  src={category.icon}
                  alt={category.name}
                  width={30}
                  height={30}
                  className="object-contain"
                />
              </div>
              <span className="text-sm font-medium text-gray-700">{category.name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* شريط العروض */}
      <div className="rounded-lg bg-gradient-to-r from-fix-orange to-amber-500 text-white p-4 mb-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Tag className="h-8 w-8" />
            <div>
              <h3 className="font-bold text-lg md:text-xl">عروض وخصومات حصرية على الإكسسوارات</h3>
              <p className="text-white/80 text-sm md:text-base">خصم إضافي 10% عند شراء إكسسوارات بقيمة 500 جنيه أو أكثر</p>
            </div>
          </div>
          <Button variant="orangeGradient" className="hidden md:flex whitespace-nowrap">
            تسوق العروض
          </Button>
        </div>
      </div>

      {/* قائمة المنتجات */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-fix-blue-700 mb-6">إكسسوارات مميزة</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {accessories.map((item) => (
            <div key={item.id} className="bg-white rounded-lg shadow-md overflow-hidden group hover:shadow-lg transition-all">
              <div className="relative h-48 bg-gray-100">
                {item.oldPrice && (
                  <div className="absolute top-2 right-2 z-10 bg-fix-orange text-white text-xs font-bold px-2 py-1 rounded-md">
                    {Math.round(((item.oldPrice - item.price) / item.oldPrice) * 100)}% خصم
                  </div>
                )}
                <Image
                  src={item.imageSrc}
                  alt={item.title}
                  fill
                  className="object-contain p-4 group-hover:scale-105 transition-transform"
                />
              </div>
              <div className="p-4">
                <div className="text-xs text-gray-500 mb-1">{item.category}</div>
                <h3 className="font-bold text-gray-800 mb-2 h-12 line-clamp-2">{item.title}</h3>
                <div className="flex items-center mb-2">
                  <div className="flex items-center">
                    <ThumbsUp size={14} className="text-fix-blue-600 mr-1" />
                    <span className="text-sm">{item.rating}/5</span>
                  </div>
                  <span className="mx-2 text-gray-300">|</span>
                  <span className="text-xs text-gray-500">{item.brand}</span>
                </div>
                <div className="mb-3 flex items-center">
                  <div className="font-bold text-fix-blue-700">{item.price} ج.م</div>
                  {item.oldPrice && (
                    <div className="text-sm text-gray-500 line-through mr-2">{item.oldPrice} ج.م</div>
                  )}
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

      {/* مزايا الشراء */}
      <div className="bg-gray-50 rounded-lg p-6 mb-8">
        <h2 className="text-xl font-bold text-fix-blue-700 mb-4 text-center">لماذا تختار إكسسوارات Fix & Go؟</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <div className="flex items-start gap-3">
              <div className="bg-fix-blue-50 p-2 rounded-full">
                <ThumbsUp className="h-6 w-6 text-fix-blue-600" />
              </div>
              <div>
                <h3 className="font-bold text-gray-800 mb-1">جودة موثوقة</h3>
                <p className="text-sm text-gray-600">جميع المنتجات مختارة بعناية من أفضل العلامات التجارية العالمية</p>
              </div>
            </div>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <div className="flex items-start gap-3">
              <div className="bg-fix-blue-50 p-2 rounded-full">
                <ThumbsUp className="h-6 w-6 text-fix-blue-600" />
              </div>
              <div>
                <h3 className="font-bold text-gray-800 mb-1">ضمان المنتج</h3>
                <p className="text-sm text-gray-600">ضمان على جميع الإكسسوارات مع إمكانية الاستبدال أو الإرجاع</p>
              </div>
            </div>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <div className="flex items-start gap-3">
              <div className="bg-fix-blue-50 p-2 rounded-full">
                <ThumbsUp className="h-6 w-6 text-fix-blue-600" />
              </div>
              <div>
                <h3 className="font-bold text-gray-800 mb-1">تركيب احترافي</h3>
                <p className="text-sm text-gray-600">خدمة تركيب احترافية لجميع الإكسسوارات التي تحتاج لتثبيت</p>
              </div>
            </div>
          </div>
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
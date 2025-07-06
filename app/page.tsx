"use client"

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from '../components/common/button'
import { ServiceCard } from '../components/ui/service-card'
import { Car, Wrench, ScanLine, Truck, AlertTriangle, ShoppingBag } from 'lucide-react'

export default function HomePage() {
  // بناء الأيقونات كـ React Nodes
  const carIcon = <Car size={32} strokeWidth={1.5} />;
  const wrenchIcon = <Wrench size={32} strokeWidth={1.5} />;
  const scanLineIcon = <ScanLine size={32} strokeWidth={1.5} />;
  const truckIcon = <Truck size={32} strokeWidth={1.5} />;
  const alertIcon = <AlertTriangle size={32} strokeWidth={1.5} />;
  const shopIcon = <ShoppingBag size={32} strokeWidth={1.5} />;

  return (
    <div className="flex flex-col">
      {/* قسم الترحيب البارز */}
      <section className="relative overflow-hidden bg-gradient-to-b from-fix-blue-600 to-fix-blue-800 text-white">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/images/gradient-bg.svg" 
            alt="خلفية" 
            fill 
            className="object-cover opacity-20" 
            priority
          />
        </div>
        <div className="container relative z-10 py-20 md:py-32">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 items-center">
            <div>
              <h1 className="mb-4 text-3xl font-bold font-heading md:text-5xl">
                الحل الأمثل والشامل <span className="text-fix-orange">لخدمات السيارات</span> في مصر
              </h1>
              <p className="mb-8 text-lg leading-relaxed text-white/80 md:text-xl">
                جميع خدمات السيارات في مكان واحد. صيانة دورية، إصلاح أعطال، خدمات طوارئ، قطع غيار أصلية وبديلة، كل ذلك عبر تطبيق Fix & Go.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/maintenance/scheduled" passHref>
                  <Button variant="orangeGradient" size="lg">
                    ابدأ الآن
                  </Button>
                </Link>
                <Link href="/contact" passHref>
                  <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/20 hover:text-white">
                    تعرف علينا
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative h-64 md:h-auto">
              {/* هنا يمكن وضع صورة السيارة أو رسوم توضيحية */}
              <div className="flex h-full w-full items-center justify-center">
                <svg width="220" height="220" viewBox="0 0 220 220" fill="none" xmlns="http://www.w3.org/2000/svg" className="transform rotate-12">
                  <path d="M110 35C69.1309 35 35 69.1309 35 110C35 150.869 69.1309 185 110 185C150.869 185 185 150.869 185 110C185 69.1309 150.869 35 110 35Z" stroke="currentColor" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M110 65V110L143 143" stroke="currentColor" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M65 45L155 175" stroke="#FF6B00" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>
          </div>
        </div>
        
        {/* خلفية مموجة */}
        <div className="absolute -bottom-1 left-0 right-0">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 160" fill="white">
            <path d="M0,160L60,133.3C120,107,240,53,360,58.7C480,64,600,128,720,144C840,160,960,128,1080,117.3C1200,107,1320,117,1380,122.7L1440,128L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
          </svg>
        </div>
      </section>

      {/* قسم الخدمات */}
      <section className="py-20">
        <div className="container">
          <div className="mb-12 text-center">
            <h2 className="mb-2 text-3xl font-bold font-heading text-fix-blue-700">خدماتنا</h2>
            <p className="mx-auto max-w-2xl text-lg text-gray-600">
              نقدم مجموعة متكاملة من الخدمات لتلبية كافة احتياجات سيارتك بجودة عالية وأسعار مناسبة
            </p>
          </div>
          
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
            <ServiceCard
              title="صيانة دورية"
              description="جدولة وإجراء الصيانة الدورية لسيارتك وفقا لتوصيات الشركة المصنعة"
              iconSvg={carIcon}
              href="/maintenance/scheduled"
            />
            <ServiceCard
              title="إصلاح أعطال"
              description="تشخيص وإصلاح كافة أنواع الأعطال والمشاكل الفنية بأحدث الأجهزة"
              iconSvg={wrenchIcon}
              href="/maintenance/repair"
              variant="featured"
            />
            <ServiceCard
              title="فحص فني"
              description="فحص شامل للسيارة قبل الشراء أو للاطمئنان على حالتها الفنية"
              iconSvg={scanLineIcon}
              href="/maintenance/inspection"
            />
            <ServiceCard
              title="سحب السيارة"
              description="خدمة سحب السيارة على مدار الساعة في حالات التعطل أو الحوادث"
              iconSvg={truckIcon}
              href="/emergency/towing"
            />
            <ServiceCard
              title="خدمات الطوارئ"
              description="مساعدة فورية على الطريق في حالات الطوارئ مثل تبديل الإطارات وشحن البطارية"
              iconSvg={alertIcon}
              href="/emergency/roadside"
              variant="featured"
            />
            <ServiceCard
              title="قطع غيار"
              description="توفير قطع الغيار الأصلية والبديلة بجودة عالية وأسعار تنافسية"
              iconSvg={shopIcon}
              href="/parts"
            />
          </div>
        </div>
      </section>

      {/* قسم المميزات */}
      <section className="bg-gray-50 py-20">
        <div className="container">
          <div className="mb-12 text-center">
            <h2 className="mb-2 text-3xl font-bold font-heading text-fix-blue-700">لماذا تختار Fix & Go؟</h2>
            <p className="mx-auto max-w-2xl text-lg text-gray-600">
              نسعى دائماً لتقديم أفضل تجربة لعملائنا من خلال مجموعة من المزايا الفريدة
            </p>
          </div>
          
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="rounded-xl bg-white p-8 shadow-md transition-transform hover:-translate-y-1 hover:shadow-lg">
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-fix-blue/10 text-fix-blue">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M19.4 15C19.2669 15.3016 19.2272 15.6362 19.286 15.9606C19.3448 16.285 19.4995 16.5843 19.73 16.82L19.79 16.88C19.976 17.0657 20.1235 17.2863 20.2241 17.5291C20.3248 17.7719 20.3766 18.0322 20.3766 18.295C20.3766 18.5578 20.3248 18.8181 20.2241 19.0609C20.1235 19.3037 19.976 19.5243 19.79 19.71C19.6043 19.896 19.3837 20.0435 19.1409 20.1441C18.8981 20.2448 18.6378 20.2966 18.375 20.2966C18.1122 20.2966 17.8519 20.2448 17.6091 20.1441C17.3663 20.0435 17.1457 19.896 16.96 19.71L16.9 19.65C16.6643 19.4195 16.365 19.2648 16.0406 19.206C15.7162 19.1472 15.3816 19.1869 15.08 19.32C14.7842 19.4468 14.532 19.6572 14.3543 19.9255C14.1766 20.1938 14.0813 20.5082 14.08 20.83V21C14.08 21.5304 13.8693 22.0391 13.4942 22.4142C13.1191 22.7893 12.6104 23 12.08 23C11.5496 23 11.0409 22.7893 10.6658 22.4142C10.2907 22.0391 10.08 21.5304 10.08 21V20.91C10.0723 20.579 9.96512 20.258 9.77251 19.9887C9.5799 19.7194 9.31074 19.5143 9 19.4C8.69838 19.2669 8.36381 19.2272 8.03941 19.286C7.71502 19.3448 7.41568 19.4995 7.18 19.73L7.12 19.79C6.93425 19.976 6.71368 20.1235 6.47088 20.2241C6.22808 20.3248 5.96783 20.3766 5.705 20.3766C5.44217 20.3766 5.18192 20.3248 4.93912 20.2241C4.69632 20.1235 4.47575 19.976 4.29 19.79C4.10405 19.6043 3.95653 19.3837 3.85588 19.1409C3.75523 18.8981 3.70343 18.6378 3.70343 18.375C3.70343 18.1122 3.75523 17.8519 3.85588 17.6091C3.95653 17.3663 4.10405 17.1457 4.29 16.96L4.35 16.9C4.58054 16.6643 4.73519 16.365 4.794 16.0406C4.85282 15.7162 4.81312 15.3816 4.68 15.08C4.55324 14.7842 4.34276 14.532 4.07447 14.3543C3.80618 14.1766 3.49179 14.0813 3.17 14.08H3C2.46957 14.08 1.96086 13.8693 1.58579 13.4942C1.21071 13.1191 1 12.6104 1 12.08C1 11.5496 1.21071 11.0409 1.58579 10.6658C1.96086 10.2907 2.46957 10.08 3 10.08H3.09C3.42099 10.0723 3.742 9.96512 4.0113 9.77251C4.28059 9.5799 4.48572 9.31074 4.6 9C4.73312 8.69838 4.77282 8.36381 4.714 8.03941C4.65519 7.71502 4.50054 7.41568 4.27 7.18L4.21 7.12C4.02405 6.93425 3.87653 6.71368 3.77588 6.47088C3.67523 6.22808 3.62343 5.96783 3.62343 5.705C3.62343 5.44217 3.67523 5.18192 3.77588 4.93912C3.87653 4.69632 4.02405 4.47575 4.21 4.29C4.39575 4.10405 4.61632 3.95653 4.85912 3.85588C5.10192 3.75523 5.36217 3.70343 5.625 3.70343C5.88783 3.70343 6.14808 3.75523 6.39088 3.85588C6.63368 3.95653 6.85425 4.10405 7.04 4.29L7.1 4.35C7.33568 4.58054 7.63502 4.73519 7.95941 4.794C8.28381 4.85282 8.61838 4.81312 8.92 4.68H9C9.29577 4.55324 9.54802 4.34276 9.72569 4.07447C9.90337 3.80618 9.99872 3.49179 10 3.17V3C10 2.46957 10.2107 1.96086 10.5858 1.58579C10.9609 1.21071 11.4696 1 12 1C12.5304 1 13.0391 1.21071 13.4142 1.58579C13.7893 1.96086 14 2.46957 14 3V3.09C14.0013 3.41179 14.0966 3.72618 14.2743 3.99447C14.452 4.26276 14.7042 4.47324 15 4.6C15.3016 4.73312 15.6362 4.77282 15.9606 4.714C16.285 4.65519 16.5843 4.50054 16.82 4.27L16.88 4.21C17.0657 4.02405 17.2863 3.87653 17.5291 3.77588C17.7719 3.67523 18.0322 3.62343 18.295 3.62343C18.5578 3.62343 18.8181 3.67523 19.0609 3.77588C19.3037 3.87653 19.5243 4.02405 19.71 4.21C19.896 4.39575 20.0435 4.61632 20.1441 4.85912C20.2448 5.10192 20.2966 5.36217 20.2966 5.625C20.2966 5.88783 20.2448 6.14808 20.1441 6.39088C20.0435 6.63368 19.896 6.85425 19.71 7.04L19.65 7.1C19.4195 7.33568 19.2648 7.63502 19.206 7.95941C19.1472 8.28381 19.1869 8.61838 19.32 8.92V9C19.4468 9.29577 19.6572 9.54802 19.9255 9.72569C20.1938 9.90337 20.5082 9.99872 20.83 10H21C21.5304 10 22.0391 10.2107 22.4142 10.5858C22.7893 10.9609 23 11.4696 23 12C23 12.5304 22.7893 13.0391 22.4142 13.4142C22.0391 13.7893 21.5304 14 21 14H20.91C20.5882 14.0013 20.2738 14.0966 20.0055 14.2743C19.7372 14.452 19.5268 14.7042 19.4 15Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="mb-3 text-xl font-bold font-heading text-fix-blue-700">فنيين محترفين</h3>
              <p className="text-gray-600">
                فريق من الفنيين المدربين على أعلى مستوى وذوي خبرة طويلة في مجال صيانة وإصلاح السيارات.
              </p>
            </div>
            
            <div className="rounded-xl bg-white p-8 shadow-md transition-transform hover:-translate-y-1 hover:shadow-lg">
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-fix-orange/10 text-fix-orange">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="mb-3 text-xl font-bold font-heading text-fix-blue-700">جودة الخدمة</h3>
              <p className="text-gray-600">
                نضمن لك جودة عالية في جميع خدماتنا وقطع الغيار المستخدمة مع ضمان على كافة الإصلاحات.
              </p>
            </div>
            
            <div className="rounded-xl bg-white p-8 shadow-md transition-transform hover:-translate-y-1 hover:shadow-lg">
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-fix-blue/10 text-fix-blue">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22 12H18L15 21L9 3L6 12H2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="mb-3 text-xl font-bold font-heading text-fix-blue-700">سرعة الاستجابة</h3>
              <p className="text-gray-600">
                نصلك أينما كنت في وقت قياسي مع خدمة على مدار 24 ساعة طوال أيام الأسبوع.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* قسم التحفيز للبدء */}
      <section className="bg-gradient-to-r from-fix-blue-600 to-fix-blue-800 py-16 text-white">
        <div className="container">
          <div className="flex flex-col items-center gap-8 text-center md:flex-row md:justify-between md:text-right">
            <div>
              <h2 className="text-2xl font-bold font-heading md:text-3xl">جاهز للانطلاق مع Fix & Go؟</h2>
              <p className="mt-2 max-w-lg text-white/80">
                ابدأ الآن واستمتع بخدمات صيانة وإصلاح سيارتك بكل سهولة وراحة
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <Link href="/maintenance/scheduled" passHref>
                <Button variant="orangeGradient" size="lg">
                  ابدأ الآن
                </Button>
              </Link>
              <Link href="/contact" passHref>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-white text-white hover:bg-white/20 hover:text-white"
                >
                  تواصل معنا
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
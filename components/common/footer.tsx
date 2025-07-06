"use client"

import React from 'react'
import Link from 'next/link'
import { Logo } from '../ui/logo'
import { Facebook, Twitter, Instagram, Linkedin, MapPin, Phone, Mail } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-gray-50 border-t">
      <div className="container py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* شعار ومعلومات الشركة */}
          <div className="flex flex-col space-y-4">
            <Logo variant="blue" withText={true} />
            <p className="text-sm text-gray-600 mt-4">
              أفضل خدمات السيارات الشاملة في مصر. نقدم خدمات صيانة، قطع غيار، وإنقاذ على الطريق بأعلى مستوى من الجودة والاحترافية.
            </p>
            <div className="flex space-x-4 space-x-reverse">
              <Link href="#" className="text-fix-blue hover:text-fix-blue-700 transition-colors">
                <Facebook size={20} />
              </Link>
              <Link href="#" className="text-fix-blue hover:text-fix-blue-700 transition-colors">
                <Twitter size={20} />
              </Link>
              <Link href="#" className="text-fix-blue hover:text-fix-blue-700 transition-colors">
                <Instagram size={20} />
              </Link>
              <Link href="#" className="text-fix-blue hover:text-fix-blue-700 transition-colors">
                <Linkedin size={20} />
              </Link>
            </div>
          </div>

          {/* روابط سريعة */}
          <div>
            <h3 className="text-fix-blue-700 font-heading font-bold text-lg mb-4">روابط سريعة</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-gray-600 hover:text-fix-blue transition-colors">الرئيسية</Link>
              </li>
              <li>
                <Link href="/maintenance/scheduled" className="text-gray-600 hover:text-fix-blue transition-colors">خدمات الصيانة</Link>
              </li>
              <li>
                <Link href="/emergency/towing" className="text-gray-600 hover:text-fix-blue transition-colors">خدمات الطوارئ</Link>
              </li>
              <li>
                <Link href="/parts" className="text-gray-600 hover:text-fix-blue transition-colors">قطع الغيار</Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-600 hover:text-fix-blue transition-colors">تواصل معنا</Link>
              </li>
              <li>
                <Link href="/notifications" className="text-gray-600 hover:text-fix-blue transition-colors">الإشعارات</Link>
              </li>
            </ul>
          </div>

          {/* خدماتنا */}
          <div>
            <h3 className="text-fix-blue-700 font-heading font-bold text-lg mb-4">خدماتنا</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/maintenance/scheduled" className="text-gray-600 hover:text-fix-blue transition-colors">صيانة دورية</Link>
              </li>
              <li>
                <Link href="/maintenance/repair" className="text-gray-600 hover:text-fix-blue transition-colors">إصلاح أعطال</Link>
              </li>
              <li>
                <Link href="/emergency/towing" className="text-gray-600 hover:text-fix-blue transition-colors">سحب السيارة</Link>
              </li>
              <li>
                <Link href="/emergency/roadside" className="text-gray-600 hover:text-fix-blue transition-colors">إصلاح على الطريق</Link>
              </li>
              <li>
                <Link href="/parts/original" className="text-gray-600 hover:text-fix-blue transition-colors">قطع غيار أصلية</Link>
              </li>
              <li>
                <Link href="/parts/alternative" className="text-gray-600 hover:text-fix-blue transition-colors">قطع غيار بديلة</Link>
              </li>
            </ul>
          </div>

          {/* تواصل معنا */}
          <div>
            <h3 className="text-fix-blue-700 font-heading font-bold text-lg mb-4">تواصل معنا</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start space-x-3 space-x-reverse">
                <MapPin size={18} className="text-fix-orange shrink-0" />
                <span className="text-gray-600">
                  المقر الرئيسي: القاهرة، مصر الجديدة، شارع الميرغني
                </span>
              </li>
              <li className="flex items-center space-x-3 space-x-reverse">
                <Phone size={18} className="text-fix-orange shrink-0" />
                <span className="text-gray-600 hover:text-fix-blue transition-colors">
                  <Link href="tel:+201234567890">+20 123 456 7890</Link>
                </span>
              </li>
              <li className="flex items-center space-x-3 space-x-reverse">
                <Mail size={18} className="text-fix-orange shrink-0" />
                <span className="text-gray-600 hover:text-fix-blue transition-colors">
                  <Link href="mailto:info@fixandgo.com">info@fixandgo.com</Link>
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      
      {/* شريط الحقوق */}
      <div className="border-t bg-gray-100">
        <div className="container py-4 flex flex-col md:flex-row justify-between items-center text-sm text-gray-600">
          <p>© {new Date().getFullYear()} Fix &amp; Go. جميع الحقوق محفوظة.</p>
          <div className="flex space-x-4 space-x-reverse mt-2 md:mt-0">
            <Link href="/contact" className="hover:text-fix-blue transition-colors">الشروط والأحكام</Link>
            <Link href="/contact" className="hover:text-fix-blue transition-colors">سياسة الخصوصية</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
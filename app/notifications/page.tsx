"use client"

import React from 'react'
import Link from 'next/link'
import { Bell, Check, Calendar, ShoppingBag, Tag, Wrench } from 'lucide-react'

// بيانات تجريبية للإشعارات
const notifications = [
  {
    id: 1,
    title: 'تم جدولة موعد الصيانة الدورية',
    description: 'تم تأكيد موعد الصيانة الدورية لسيارتك يوم الخميس القادم الساعة 10:30 صباحًا',
    date: 'اليوم، 10:30 صباحًا',
    isRead: false,
    icon: Calendar,
    category: 'maintenance',
    link: '/maintenance/scheduled'
  },
  {
    id: 2,
    title: 'تم تأكيد طلب قطعة الغيار',
    description: 'تم تأكيد طلبك لقطعة غيار فلتر الزيت وسيتم توصيلها خلال يومين عمل',
    date: 'الأمس، 2:45 مساءً',
    isRead: false,
    icon: ShoppingBag,
    category: 'parts',
    link: '/parts/original'
  },
  {
    id: 3,
    title: 'خصم 10% على الصيانة الدورية القادمة',
    description: 'استمتع بخصم 10% على موعد الصيانة الدورية القادمة لسيارتك عند الحجز قبل نهاية الشهر',
    date: 'قبل يومين',
    isRead: false,
    icon: Tag,
    category: 'offers',
    link: '/maintenance/scheduled'
  },
  {
    id: 4,
    title: 'تم الانتهاء من فحص سيارتك',
    description: 'تم الانتهاء من فحص سيارتك بنجاح، يمكنك الاطلاع على تقرير الفحص من خلال حسابك الشخصي',
    date: 'قبل 3 أيام',
    isRead: true,
    icon: Check,
    category: 'maintenance',
    link: '/maintenance/inspection'
  },
  {
    id: 5,
    title: 'تذكير بموعد الصيانة',
    description: 'نذكرك بموعد الصيانة القادم لسيارتك بعد أسبوع من الآن، يرجى تأكيد الموعد',
    date: 'قبل أسبوع',
    isRead: true,
    icon: Calendar,
    category: 'maintenance',
    link: '/maintenance/scheduled'
  },
  {
    id: 6,
    title: 'عروض خاصة على قطع الغيار',
    description: 'استفد من العروض الخاصة على قطع الغيار الأصلية والبديلة لجميع أنواع السيارات لمدة أسبوع',
    date: 'قبل أسبوعين',
    isRead: true,
    icon: Tag,
    category: 'offers',
    link: '/parts'
  },
  {
    id: 7,
    title: 'تم الانتهاء من إصلاح سيارتك',
    description: 'نود إبلاغك بأنه تم الانتهاء من إصلاح سيارتك ويمكنك استلامها من مركز الخدمة',
    date: 'قبل 3 أسابيع',
    isRead: true,
    icon: Wrench,
    category: 'maintenance',
    link: '/maintenance/repair'
  }
]

export default function NotificationsPage() {
  // عدد الإشعارات الجديدة (غير المقروءة)
  const unreadNotifications = notifications.filter(notif => !notif.isRead)
  
  return (
    <div className="container py-8">
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold font-heading text-fix-blue-700">الإشعارات</h1>
          <p className="mt-2 text-gray-600">
            اطلع على آخر الإشعارات والتحديثات المتعلقة بخدماتك
          </p>
        </div>
        <div className="flex items-center gap-2">
          <span className="rounded-full bg-fix-orange px-2.5 py-0.5 text-xs text-white font-medium">
            {unreadNotifications.length} جديد
          </span>
          <button className="rounded-md bg-fix-blue-50 px-3 py-1 text-sm text-fix-blue-700 hover:bg-fix-blue-100">
            تحديد الكل كمقروء
          </button>
        </div>
      </div>

      {/* قائمة الإشعارات */}
      <div className="divide-y rounded-lg border bg-white">
        {notifications.map(notification => (
          <div 
            key={notification.id} 
            className={`flex gap-4 p-4 hover:bg-gray-50 ${notification.isRead ? '' : 'border-r-4 border-fix-orange'}`}
          >
            <div className={`flex h-12 w-12 min-w-12 items-center justify-center rounded-full ${
              notification.category === 'maintenance' ? 'bg-fix-blue/10 text-fix-blue' : 
              notification.category === 'offers' ? 'bg-fix-orange/10 text-fix-orange' :
              notification.category === 'parts' ? 'bg-green-100 text-green-700' :
              'bg-gray-100 text-gray-700'
            }`}>
              <notification.icon size={20} />
            </div>

            <div className="flex-1">
              <div className="flex items-start justify-between">
                <h3 className={`font-medium ${notification.isRead ? 'text-gray-700' : 'text-fix-blue-800 font-bold'}`}>
                  {notification.title}
                </h3>
                <span className="text-xs text-gray-500">{notification.date}</span>
              </div>
              <p className="mt-1 text-sm text-gray-600">{notification.description}</p>
              <Link 
                href={notification.link} 
                className="mt-2 inline-flex items-center text-sm font-medium text-fix-blue-600 hover:text-fix-blue-800"
              >
                التفاصيل
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
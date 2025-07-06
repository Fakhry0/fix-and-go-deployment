"use client"

import { useState, useEffect } from 'react'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { Button } from '../../components/common/button'
import { Calendar, Car, Clock, ClipboardCheck, Settings, User, LogOut } from 'lucide-react'
import { signOut } from 'next-auth/react'
import { toast } from 'sonner'

// مكون البطاقة الإحصائية للوحة التحكم
interface StatCardProps {
  title: string
  value: string | number
  icon: React.ReactNode
  color: string
}

const StatCard = ({ title, value, icon, color }: StatCardProps) => (
  <div className="rounded-lg border bg-white p-4 shadow-sm">
    <div className="flex items-center justify-between">
      <div>
        <p className="text-sm text-gray-500">{title}</p>
        <p className="mt-1 text-2xl font-bold">{value}</p>
      </div>
      <div className={`flex h-12 w-12 items-center justify-center rounded-full ${color}`}>
        {icon}
      </div>
    </div>
  </div>
)

// مكون قائمة الخدمات
interface ServiceRequestProps {
  id: string
  title: string
  status: 'pending' | 'confirmed' | 'completed' | 'cancelled'
  date: string
  type: string
  car?: string
  appointment?: {
    date: string
    time: string
  }
  services?: Record<string, boolean>
}

const ServiceRequestCard = ({ id, title, status, date, type, car, appointment, services }: ServiceRequestProps) => {
  const getStatusDetails = () => {
    switch (status) {
      case 'pending':
        return { color: 'bg-yellow-100 text-yellow-800', text: 'قيد الانتظار' }
      case 'confirmed':
        return { color: 'bg-blue-100 text-blue-800', text: 'تم التأكيد' }
      case 'completed':
        return { color: 'bg-green-100 text-green-800', text: 'مكتمل' }
      case 'cancelled':
        return { color: 'bg-red-100 text-red-800', text: 'ملغي' }
      default:
        return { color: 'bg-gray-100 text-gray-800', text: 'غير معروف' }
    }
  }

  const statusDetails = getStatusDetails()

  const getServiceDescription = (services?: Record<string, boolean>) => {
    if (!services) return '';
    
    const serviceNames: Record<string, string> = {
      oilChange: 'تغيير زيت المحرك والفلاتر',
      fluidCheck: 'فحص وتغيير سوائل السيارة',
      brakesCheck: 'فحص نظام الفرامل والتعليق',
      electricalCheck: 'فحص الكهرباء والبطارية',
      tiresCheck: 'فحص وضبط الإطارات',
      fullCheck: 'فحص شامل لأنظمة السيارة',
    };
    
    return Object.entries(services)
      .filter(([_, value]) => value)
      .map(([key]) => serviceNames[key] || key)
      .join('، ');
  }

  return (
    <div className="rounded-lg border bg-white p-4 shadow-sm transition-transform hover:-translate-y-1 hover:shadow-md">
      <div className="flex items-start justify-between">
        <div>
          <h3 className="font-medium">{title}</h3>
          <div className="mt-1 flex flex-wrap items-center gap-3 text-sm text-gray-500">
            <div className="flex items-center gap-1">
              <Calendar size={14} />
              <span>{appointment?.date || date}</span>
              {appointment?.time && <span>، {appointment.time}</span>}
            </div>
            <div className="flex items-center gap-1">
              <Car size={14} />
              <span>{car || type}</span>
            </div>
          </div>
          {services && (
            <p className="mt-2 text-sm text-gray-600">
              <span className="font-medium">الخدمات: </span>
              {getServiceDescription(services)}
            </p>
          )}
        </div>
        <span className={`rounded-full px-2 py-1 text-xs font-medium ${statusDetails.color}`}>
          {statusDetails.text}
        </span>
      </div>
      <div className="mt-4 flex items-center justify-between">
        <Button
          variant="outline"
          size="sm"
          onClick={() => toast.info(`عرض تفاصيل الطلب ${id}`)}
        >
          عرض التفاصيل
        </Button>
        {status === 'pending' && (
          <Button
            variant="destructive"
            size="sm"
            onClick={() => toast.info(`إلغاء الطلب ${id}`)}
          >
            إلغاء الطلب
          </Button>
        )}
      </div>
    </div>
  )
}

export default function DashboardPage() {
  const { data: session, status } = useSession()
  const router = useRouter()
  const [activeTab, setActiveTab] = useState('الطلبات')
  const [serviceRequests, setServiceRequests] = useState<ServiceRequestProps[]>([])
  const [loading, setLoading] = useState(false)

  // التحقق مما إذا كان المستخدم مسجل الدخول
  useEffect(() => {
    if (status === 'unauthenticated') {
      router.replace('/login')
    }
  }, [status, router])

  // جلب طلبات الخدمة
  useEffect(() => {
    const fetchServiceRequests = async () => {
      if (status !== 'authenticated') return;
      
      setLoading(true)
      try {
        const response = await fetch('/api/services')
        
        if (!response.ok) {
          throw new Error('فشل جلب طلبات الخدمة')
        }
        
        const data = await response.json()
        
        // تحويل بيانات API إلى التنسيق المطلوب للواجهة
        const formattedRequests: ServiceRequestProps[] = data.serviceRequests.map((req: any) => {
          let title = 'طلب خدمة'
          if (req.type === 'scheduled-maintenance') {
            title = 'صيانة دورية'
          } else if (req.type === 'repair') {
            title = 'إصلاح أعطال'
          } else if (req.type === 'inspection') {
            title = 'فحص فني'
          } else if (req.type === 'towing') {
            title = 'سحب السيارة'
          } else if (req.type === 'roadside') {
            title = 'خدمة طوارئ على الطريق'
          }
          
          return {
            id: req.id,
            title,
            status: req.status,
            date: new Date(req.createdAt).toLocaleDateString('ar-EG'),
            type: `${req.car.brand} ${req.car.model} ${req.car.year}`,
            car: `${req.car.brand} ${req.car.model} ${req.car.year}`,
            appointment: req.appointment,
            services: req.services,
          }
        })
        
        setServiceRequests(formattedRequests)
      } catch (error) {
        console.error('Error fetching service requests:', error)
        toast.error('حدث خطأ أثناء جلب طلبات الخدمة')
      } finally {
        setLoading(false)
      }
    }
    
    fetchServiceRequests()
  }, [status])

  // إذا كان جاري تحميل الجلسة، عرض شاشة التحميل
  if (status === 'loading') {
    return (
      <div className="flex min-h-[60vh] items-center justify-center">
        <div className="text-center">
          <div className="mb-4 h-12 w-12 animate-spin rounded-full border-4 border-gray-200 border-t-fix-blue mx-auto"></div>
          <h2 className="text-xl font-semibold text-fix-blue-700">جاري التحميل...</h2>
        </div>
      </div>
    )
  }

  // بيانات وهمية لإحصائيات لوحة التحكم
  const dashboardStats = {
    activeRequests: serviceRequests.filter(req => req.status === 'pending' || req.status === 'confirmed').length,
    completedRequests: serviceRequests.filter(req => req.status === 'completed').length,
    registeredCars: new Set(serviceRequests.map(req => req.car)).size || 0,
    earnedPoints: serviceRequests.length * 50,
  }

  const handleSignOut = async () => {
    await signOut({ redirect: false })
    toast.success('تم تسجيل الخروج بنجاح')
    router.push('/')
  }

  // بيانات وهمية احتياطية في حالة عدم وجود طلبات خدمة
  const fallbackServiceRequests = [
    {
      id: 'SR-001',
      title: 'صيانة دورية - تغيير زيت وفلاتر',
      status: 'confirmed' as const,
      date: '02 مايو 2025',
      type: 'تويوتا كامري 2023',
      appointment: {
        date: '2025-05-02',
        time: '10:00'
      }
    },
    {
      id: 'SR-002',
      title: 'إصلاح نظام التكييف',
      status: 'pending' as const,
      date: '05 مايو 2025',
      type: 'تويوتا كامري 2023',
      appointment: {
        date: '2025-05-05',
        time: '14:00'
      }
    },
  ]

  const displayedRequests = serviceRequests.length > 0 ? serviceRequests : fallbackServiceRequests

  return (
    <div className="container py-8">
      <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-fix-blue-700">لوحة التحكم</h1>
          <p className="mt-1 text-gray-600">
            مرحباً {session?.user?.name}، يمكنك إدارة طلبات الخدمة وبيانات حسابك من هنا
          </p>
        </div>
        <Button
          variant="outline"
          className="flex items-center gap-2"
          onClick={handleSignOut}
        >
          <LogOut size={18} /> تسجيل الخروج
        </Button>
      </div>

      {/* الإحصاءات */}
      <div className="mb-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <StatCard
          title="الطلبات النشطة"
          value={dashboardStats.activeRequests.toString()}
          icon={<Clock size={24} className="text-orange-600" />}
          color="bg-orange-100"
        />
        <StatCard
          title="الطلبات المكتملة"
          value={dashboardStats.completedRequests.toString()}
          icon={<ClipboardCheck size={24} className="text-green-600" />}
          color="bg-green-100"
        />
        <StatCard
          title="السيارات المسجلة"
          value={dashboardStats.registeredCars.toString()}
          icon={<Car size={24} className="text-blue-600" />}
          color="bg-blue-100"
        />
        <StatCard
          title="النقاط المكتسبة"
          value={dashboardStats.earnedPoints.toString()}
          icon={<Settings size={24} className="text-purple-600" />}
          color="bg-purple-100"
        />
      </div>

      {/* شريط التنقل */}
      <div className="mb-8 border-b">
        <div className="flex overflow-x-auto">
          {['الطلبات', 'السيارات', 'الملف الشخصي', 'الإشعارات'].map((tab) => (
            <button
              key={tab}
              className={`px-4 py-2 text-base font-medium transition ${
                activeTab === tab
                  ? 'border-b-2 border-fix-blue text-fix-blue'
                  : 'text-gray-500 hover:text-fix-blue'
              }`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* محتوى التبويب النشط */}
      {activeTab === 'الطلبات' && (
        <div>
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-xl font-bold text-gray-800">طلبات الخدمة</h2>
            <Button onClick={() => router.push('/maintenance/scheduled')}>
              طلب خدمة جديدة
            </Button>
          </div>

          {loading ? (
            <div className="py-20 text-center">
              <div className="mb-4 h-8 w-8 animate-spin rounded-full border-4 border-gray-200 border-t-fix-blue mx-auto"></div>
              <p className="text-gray-600">جاري جلب طلبات الخدمة...</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              {displayedRequests.map((request) => (
                <ServiceRequestCard key={request.id} {...request} />
              ))}
            </div>
          )}
        </div>
      )}

      {activeTab === 'السيارات' && (
        <div>
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-xl font-bold text-gray-800">سياراتي</h2>
            <Button>إضافة سيارة جديدة</Button>
          </div>

          <div className="rounded-lg border bg-white p-4 shadow-sm">
            <div className="flex flex-wrap items-start gap-4 sm:flex-nowrap">
              <div className="h-32 w-32 rounded-lg bg-gray-200"></div>
              <div className="flex-grow">
                <h3 className="text-lg font-bold">تويوتا كامري 2023</h3>
                <div className="mt-2 grid grid-cols-1 gap-y-2 text-sm sm:grid-cols-2 md:grid-cols-3">
                  <div>
                    <span className="text-gray-500">رقم اللوحة:</span>
                    <strong className="mr-1">س ء د 3214</strong>
                  </div>
                  <div>
                    <span className="text-gray-500">اللون:</span>
                    <strong className="mr-1">أبيض</strong>
                  </div>
                  <div>
                    <span className="text-gray-500">تاريخ الشراء:</span>
                    <strong className="mr-1">2023</strong>
                  </div>
                  <div>
                    <span className="text-gray-500">عدد الكيلومترات:</span>
                    <strong className="mr-1">15,000 كم</strong>
                  </div>
                  <div>
                    <span className="text-gray-500">آخر صيانة:</span>
                    <strong className="mr-1">25 أبريل 2025</strong>
                  </div>
                </div>
                <div className="mt-4">
                  <Button variant="outline" size="sm">
                    تحديث البيانات
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'الملف الشخصي' && (
        <div>
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-xl font-bold text-gray-800">الملف الشخصي</h2>
            <Button>حفظ التغييرات</Button>
          </div>

          <div className="rounded-lg border bg-white p-6 shadow-sm">
            <div className="mb-6 flex flex-col items-center justify-center">
              <div className="mb-4 flex h-24 w-24 items-center justify-center rounded-full bg-gray-200 text-gray-500">
                <User size={48} />
              </div>
              <h3 className="text-lg font-bold">{session?.user?.name}</h3>
              <p className="text-gray-500">{session?.user?.email}</p>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <label className="mb-1 block text-sm font-medium text-gray-700">
                  الاسم بالكامل
                </label>
                <input
                  type="text"
                  className="w-full rounded-md border border-gray-300 p-2"
                  defaultValue={session?.user?.name || ''}
                  dir="rtl"
                />
              </div>
              <div>
                <label className="mb-1 block text-sm font-medium text-gray-700">
                  البريد الإلكتروني
                </label>
                <input
                  type="email"
                  className="w-full rounded-md border border-gray-300 p-2"
                  defaultValue={session?.user?.email || ''}
                  dir="rtl"
                  disabled
                />
              </div>
              <div>
                <label className="mb-1 block text-sm font-medium text-gray-700">
                  رقم الهاتف
                </label>
                <input
                  type="tel"
                  className="w-full rounded-md border border-gray-300 p-2"
                  defaultValue="0123456789"
                  dir="rtl"
                />
              </div>
              <div>
                <label className="mb-1 block text-sm font-medium text-gray-700">
                  العنوان
                </label>
                <input
                  type="text"
                  className="w-full rounded-md border border-gray-300 p-2"
                  defaultValue="القاهرة، مصر"
                  dir="rtl"
                />
              </div>
            </div>
          </div>
          
          <div className="mt-6 rounded-lg border bg-white p-6 shadow-sm">
            <h3 className="mb-4 text-lg font-bold">تغيير كلمة المرور</h3>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <label className="mb-1 block text-sm font-medium text-gray-700">
                  كلمة المرور الحالية
                </label>
                <input
                  type="password"
                  className="w-full rounded-md border border-gray-300 p-2"
                  dir="rtl"
                />
              </div>
              <div>
                <label className="mb-1 block text-sm font-medium text-gray-700">
                  كلمة المرور الجديدة
                </label>
                <input
                  type="password"
                  className="w-full rounded-md border border-gray-300 p-2"
                  dir="rtl"
                />
              </div>
              <div className="sm:col-span-2">
                <label className="mb-1 block text-sm font-medium text-gray-700">
                  تأكيد كلمة المرور الجديدة
                </label>
                <input
                  type="password"
                  className="w-full rounded-md border border-gray-300 p-2"
                  dir="rtl"
                />
              </div>
              <div className="sm:col-span-2">
                <Button variant="outline" className="w-full sm:w-auto">
                  تغيير كلمة المرور
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'الإشعارات' && (
        <div>
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-xl font-bold text-gray-800">الإشعارات</h2>
            <Button variant="outline" size="sm">
              تعليم الكل كمقروء
            </Button>
          </div>

          <div className="space-y-4">
            <div className="border-r-2 border-fix-orange bg-white p-4 shadow-sm hover:bg-gray-50">
              <h3 className="font-medium">تم جدولة موعد الصيانة الدورية</h3>
              <p className="mt-1 text-sm text-gray-500">
                تم تأكيد موعد الصيانة الدورية لسيارتك يوم الجمعة، 2 مايو 2025 الساعة 10:30 صباحاً.
              </p>
              <p className="mt-2 text-xs text-gray-400">اليوم، 10:30 صباحاً</p>
            </div>
            
            <div className="border-r-2 border-fix-orange bg-white p-4 shadow-sm hover:bg-gray-50">
              <h3 className="font-medium">تم تأكيد طلب قطعة الغيار</h3>
              <p className="mt-1 text-sm text-gray-500">
                تم شحن قطعة الغيار التي طلبتها (فلتر زيت - تويوتا أصلي). سيتم توصيلها خلال يومين.
              </p>
              <p className="mt-2 text-xs text-gray-400">الأمس، 2:45 مساءً</p>
            </div>
            
            <div className="border-r-2 border-fix-blue bg-white p-4 shadow-sm hover:bg-gray-50">
              <h3 className="font-medium">خصم 10% على الصيانة الدورية القادمة</h3>
              <p className="mt-1 text-sm text-gray-500">
                بمناسبة الذكرى السنوية لتطبيقنا، احصل على خصم 10% على خدمات الصيانة الدورية حتى نهاية الشهر.
              </p>
              <p className="mt-2 text-xs text-gray-400">قبل يومين</p>
            </div>
            
            <div className="border-r-2 border-fix-blue bg-white p-4 shadow-sm hover:bg-gray-50">
              <h3 className="font-medium">تذكير: موعد تغيير زيت المحرك</h3>
              <p className="mt-1 text-sm text-gray-500">
                مر 3 أشهر منذ آخر تغيير للزيت. نوصي بجدولة موعد لتغيير الزيت والفلاتر قريباً.
              </p>
              <p className="mt-2 text-xs text-gray-400">قبل أسبوع</p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
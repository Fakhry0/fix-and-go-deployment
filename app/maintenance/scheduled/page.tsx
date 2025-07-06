"use client"

import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from '../../../components/common/button'
import { Car, Calendar, Clock, Wrench, ChevronDown, Check } from 'lucide-react'
import Link from 'next/link'
import { toast } from 'sonner'
import { useSession } from 'next-auth/react'

export default function ScheduledMaintenancePage() {
  const { data: session, status } = useSession()
  const router = useRouter()
  const [step, setStep] = useState(1)
  const [loading, setLoading] = useState(false)
  
  // بيانات النموذج
  const [carData, setCarData] = useState({
    brand: '',
    model: '',
    year: '',
    plateNumber: '',
  })

  const [serviceData, setServiceData] = useState({
    oilChange: true,
    fluidCheck: true,
    brakesCheck: false,
    electricalCheck: false,
    tiresCheck: false,
    fullCheck: false,
  })

  const [appointmentData, setAppointmentData] = useState({
    date: '',
    time: '',
    notes: '',
  })

  // تغيير بيانات السيارة
  const handleCarChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setCarData(prev => ({ ...prev, [name]: value }))
  }

  // تغيير بيانات الخدمة
  const handleServiceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target
    setServiceData(prev => ({ ...prev, [name]: checked }))
  }

  // تغيير بيانات الموعد
  const handleAppointmentChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setAppointmentData(prev => ({ ...prev, [name]: value }))
  }

  // التحرك للخطوة التالية
  const handleNextStep = () => {
    if (step === 1) {
      // التحقق من بيانات السيارة
      if (!carData.brand || !carData.model || !carData.year || !carData.plateNumber) {
        toast.error('الرجاء إدخال جميع بيانات السيارة')
        return
      }
      setStep(2)
    } else if (step === 2) {
      // التحقق من اختيار خدمة واحدة على الأقل
      const hasSelectedService = Object.values(serviceData).some(value => value)
      if (!hasSelectedService) {
        toast.error('الرجاء اختيار خدمة واحدة على الأقل')
        return
      }
      setStep(3)
    }
  }

  // العودة للخطوة السابقة
  const handlePrevStep = () => {
    if (step > 1) {
      setStep(step - 1)
    }
  }

  // عملية تقديم الطلب
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    // التحقق من تعبئة بيانات الموعد
    if (!appointmentData.date || !appointmentData.time) {
      toast.error('الرجاء تحديد تاريخ ووقت الموعد')
      return
    }
    
    // التحقق مما إذا كان المستخدم قد سجل الدخول
    if (status === 'unauthenticated') {
      // حفظ بيانات الطلب في التخزين المحلي للعودة إليها بعد تسجيل الدخول
      localStorage.setItem('pendingServiceRequest', JSON.stringify({
        car: carData,
        services: serviceData,
        appointment: appointmentData,
        type: 'scheduled-maintenance'
      }))
      
      toast.info('يرجى تسجيل الدخول لإكمال طلبك')
      router.push('/login?redirect=maintenance/scheduled')
      return
    }
    
    setLoading(true)
    
    try {
      // إرسال البيانات إلى API
      const response = await fetch('/api/services', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          car: carData,
          services: serviceData,
          appointment: appointmentData,
          type: 'scheduled-maintenance'
        }),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.message || 'حدث خطأ أثناء تقديم الطلب')
      }
      
      toast.success('تم تقديم طلب الصيانة بنجاح!')
      router.push('/dashboard')
    } catch (error: any) {
      console.error('Service request error:', error)
      toast.error(error.message || 'حدث خطأ أثناء تقديم الطلب، يرجى المحاولة مرة أخرى')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="container py-12">
      <div className="mb-8">
        <h1 className="mb-4 text-3xl font-bold text-fix-blue-700">الصيانة الدورية</h1>
        <p className="text-lg text-gray-600">
          نقدم خدمات الصيانة الدورية لسيارتك وفقًا لتوصيات الشركة المصنعة، مع استخدام قطع غيار أصلية وبديلة عالية الجودة.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        <div className="rounded-lg bg-white p-8 shadow-md">
          <h2 className="mb-6 text-2xl font-bold text-fix-blue-700">مزايا الصيانة الدورية</h2>
          
          <div className="space-y-4">
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-fix-blue-100 text-fix-blue-600">
                <Car size={20} />
              </div>
              <div>
                <h3 className="font-bold">إطالة عمر السيارة</h3>
                <p className="text-gray-600">الصيانة المنتظمة تساعد على الحفاظ على أداء سيارتك وإطالة عمرها الافتراضي</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-fix-blue-100 text-fix-blue-600">
                <Wrench size={20} />
              </div>
              <div>
                <h3 className="font-bold">الكشف المبكر عن المشاكل</h3>
                <p className="text-gray-600">اكتشاف وإصلاح المشاكل الصغيرة قبل أن تتطور إلى أعطال كبيرة مكلفة</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-fix-blue-100 text-fix-blue-600">
                <Clock size={20} />
              </div>
              <div>
                <h3 className="font-bold">توفير الوقت والجهد</h3>
                <p className="text-gray-600">نقوم بجدولة مواعيد الصيانة وتذكيرك بها، مما يوفر عليك عناء المتابعة</p>
              </div>
            </div>
          </div>

          <div className="mt-8 rounded-md bg-fix-blue-50 p-4">
            <h3 className="mb-2 font-bold text-fix-blue-700">الخدمات المقدمة:</h3>
            <ul className="list-inside list-disc space-y-1 text-sm text-gray-600">
              <li>تغيير زيت المحرك والفلاتر</li>
              <li>فحص وتغيير سوائل السيارة</li>
              <li>فحص نظام الفرامل والتعليق</li>
              <li>فحص الكهرباء والبطارية</li>
              <li>فحص وضبط الإطارات</li>
              <li>فحص شامل لأنظمة السيارة</li>
            </ul>
          </div>
        </div>
        
        <div className="rounded-lg bg-white p-8 shadow-md">
          <h2 className="mb-6 text-2xl font-bold text-fix-blue-700">احجز موعدًا للصيانة الدورية</h2>
          
          {/* خطوات الحجز */}
          <div className="mb-6 flex items-center justify-between">
            <div 
              className={`flex h-10 w-10 items-center justify-center rounded-full border-2 ${
                step === 1 ? 'border-fix-blue-600 bg-fix-blue-600 text-white' : 'border-gray-300 text-gray-400'
              }`}
            >
              <span>1</span>
            </div>
            <div className={`h-1 flex-1 ${step > 1 ? 'bg-fix-blue-600' : 'bg-gray-300'}`}></div>
            <div 
              className={`flex h-10 w-10 items-center justify-center rounded-full border-2 ${
                step === 2 ? 'border-fix-blue-600 bg-fix-blue-600 text-white' : step > 2 ? 'border-fix-blue-600 bg-fix-blue-600 text-white' : 'border-gray-300 text-gray-400'
              }`}
            >
              <span>2</span>
            </div>
            <div className={`h-1 flex-1 ${step > 2 ? 'bg-fix-blue-600' : 'bg-gray-300'}`}></div>
            <div 
              className={`flex h-10 w-10 items-center justify-center rounded-full border-2 ${
                step === 3 ? 'border-fix-blue-600 bg-fix-blue-600 text-white' : 'border-gray-300 text-gray-400'
              }`}
            >
              <span>3</span>
            </div>
          </div>

          {/* نموذج الخطوة الأولى: بيانات السيارة */}
          {step === 1 && (
            <form>
              <div className="mb-4">
                <label htmlFor="brand" className="mb-1 block text-sm font-medium">
                  ماركة السيارة
                </label>
                <select
                  id="brand"
                  name="brand"
                  className="w-full rounded-md border border-gray-300 p-2"
                  value={carData.brand}
                  onChange={handleCarChange}
                  dir="rtl"
                >
                  <option value="">اختر ماركة السيارة</option>
                  <option value="تويوتا">تويوتا</option>
                  <option value="هوندا">هوندا</option>
                  <option value="نيسان">نيسان</option>
                  <option value="هيونداي">هيونداي</option>
                  <option value="كيا">كيا</option>
                  <option value="مرسيدس">مرسيدس</option>
                  <option value="بي إم دبليو">بي إم دبليو</option>
                  <option value="أخرى">أخرى</option>
                </select>
              </div>
              
              <div className="mb-4">
                <label htmlFor="model" className="mb-1 block text-sm font-medium">
                  موديل السيارة
                </label>
                <input
                  type="text"
                  id="model"
                  name="model"
                  className="w-full rounded-md border border-gray-300 p-2"
                  placeholder="مثال: كامري، أكورد، إلخ"
                  value={carData.model}
                  onChange={handleCarChange}
                  dir="rtl"
                />
              </div>
              
              <div className="mb-4">
                <label htmlFor="year" className="mb-1 block text-sm font-medium">
                  سنة الصنع
                </label>
                <select
                  id="year"
                  name="year"
                  className="w-full rounded-md border border-gray-300 p-2"
                  value={carData.year}
                  onChange={handleCarChange}
                  dir="rtl"
                >
                  <option value="">اختر سنة الصنع</option>
                  {Array.from({ length: 30 }, (_, i) => new Date().getFullYear() - i).map(year => (
                    <option key={year} value={year}>{year}</option>
                  ))}
                </select>
              </div>
              
              <div className="mb-4">
                <label htmlFor="plateNumber" className="mb-1 block text-sm font-medium">
                  رقم اللوحة
                </label>
                <input
                  type="text"
                  id="plateNumber"
                  name="plateNumber"
                  className="w-full rounded-md border border-gray-300 p-2"
                  placeholder="مثال: س ء د 1234"
                  value={carData.plateNumber}
                  onChange={handleCarChange}
                  dir="rtl"
                />
              </div>
              
              <div className="mt-6 flex justify-end">
                <Button onClick={handleNextStep}>
                  التالي
                </Button>
              </div>
            </form>
          )}

          {/* نموذج الخطوة الثانية: اختيار الخدمات */}
          {step === 2 && (
            <form>
              <h3 className="mb-4 text-lg font-semibold">اختر الخدمات المطلوبة</h3>
              
              <div className="space-y-3">
                <div className="flex items-center justify-between rounded-md border p-3 hover:bg-gray-50">
                  <div className="flex items-center space-x-3 rtl:space-x-reverse">
                    <input
                      type="checkbox"
                      id="oilChange"
                      name="oilChange"
                      className="h-5 w-5 rounded border-gray-300 text-fix-blue-600"
                      checked={serviceData.oilChange}
                      onChange={handleServiceChange}
                    />
                    <label htmlFor="oilChange">تغيير زيت المحرك والفلاتر</label>
                  </div>
                  <span className="text-sm text-gray-500">من 150 ج.م</span>
                </div>
                
                <div className="flex items-center justify-between rounded-md border p-3 hover:bg-gray-50">
                  <div className="flex items-center space-x-3 rtl:space-x-reverse">
                    <input
                      type="checkbox"
                      id="fluidCheck"
                      name="fluidCheck"
                      className="h-5 w-5 rounded border-gray-300 text-fix-blue-600"
                      checked={serviceData.fluidCheck}
                      onChange={handleServiceChange}
                    />
                    <label htmlFor="fluidCheck">فحص وتغيير سوائل السيارة</label>
                  </div>
                  <span className="text-sm text-gray-500">من 100 ج.م</span>
                </div>
                
                <div className="flex items-center justify-between rounded-md border p-3 hover:bg-gray-50">
                  <div className="flex items-center space-x-3 rtl:space-x-reverse">
                    <input
                      type="checkbox"
                      id="brakesCheck"
                      name="brakesCheck"
                      className="h-5 w-5 rounded border-gray-300 text-fix-blue-600"
                      checked={serviceData.brakesCheck}
                      onChange={handleServiceChange}
                    />
                    <label htmlFor="brakesCheck">فحص نظام الفرامل والتعليق</label>
                  </div>
                  <span className="text-sm text-gray-500">من 120 ج.م</span>
                </div>
                
                <div className="flex items-center justify-between rounded-md border p-3 hover:bg-gray-50">
                  <div className="flex items-center space-x-3 rtl:space-x-reverse">
                    <input
                      type="checkbox"
                      id="electricalCheck"
                      name="electricalCheck"
                      className="h-5 w-5 rounded border-gray-300 text-fix-blue-600"
                      checked={serviceData.electricalCheck}
                      onChange={handleServiceChange}
                    />
                    <label htmlFor="electricalCheck">فحص الكهرباء والبطارية</label>
                  </div>
                  <span className="text-sm text-gray-500">من 80 ج.م</span>
                </div>
                
                <div className="flex items-center justify-between rounded-md border p-3 hover:bg-gray-50">
                  <div className="flex items-center space-x-3 rtl:space-x-reverse">
                    <input
                      type="checkbox"
                      id="tiresCheck"
                      name="tiresCheck"
                      className="h-5 w-5 rounded border-gray-300 text-fix-blue-600"
                      checked={serviceData.tiresCheck}
                      onChange={handleServiceChange}
                    />
                    <label htmlFor="tiresCheck">فحص وضبط الإطارات</label>
                  </div>
                  <span className="text-sm text-gray-500">من 60 ج.م</span>
                </div>
                
                <div className="flex items-center justify-between rounded-md border p-3 hover:bg-gray-50">
                  <div className="flex items-center space-x-3 rtl:space-x-reverse">
                    <input
                      type="checkbox"
                      id="fullCheck"
                      name="fullCheck"
                      className="h-5 w-5 rounded border-gray-300 text-fix-blue-600"
                      checked={serviceData.fullCheck}
                      onChange={handleServiceChange}
                    />
                    <label htmlFor="fullCheck">فحص شامل لأنظمة السيارة</label>
                  </div>
                  <span className="text-sm text-gray-500">من 200 ج.م</span>
                </div>
              </div>
              
              <div className="mt-6 flex justify-between">
                <Button variant="outline" onClick={handlePrevStep}>
                  السابق
                </Button>
                <Button onClick={handleNextStep}>
                  التالي
                </Button>
              </div>
            </form>
          )}

          {/* نموذج الخطوة الثالثة: تحديد الموعد */}
          {step === 3 && (
            <form onSubmit={handleSubmit}>
              <h3 className="mb-4 text-lg font-semibold">اختر موعد الصيانة</h3>
              
              <div className="mb-4">
                <label htmlFor="date" className="mb-1 block text-sm font-medium">
                  تاريخ الموعد
                </label>
                <input
                  type="date"
                  id="date"
                  name="date"
                  className="w-full rounded-md border border-gray-300 p-2"
                  min={new Date().toISOString().split('T')[0]}
                  value={appointmentData.date}
                  onChange={handleAppointmentChange}
                  dir="rtl"
                />
              </div>
              
              <div className="mb-4">
                <label htmlFor="time" className="mb-1 block text-sm font-medium">
                  وقت الموعد
                </label>
                <select
                  id="time"
                  name="time"
                  className="w-full rounded-md border border-gray-300 p-2"
                  value={appointmentData.time}
                  onChange={handleAppointmentChange}
                  dir="rtl"
                >
                  <option value="">اختر الوقت المناسب</option>
                  <option value="09:00">09:00 صباحاً</option>
                  <option value="10:00">10:00 صباحاً</option>
                  <option value="11:00">11:00 صباحاً</option>
                  <option value="12:00">12:00 ظهراً</option>
                  <option value="13:00">01:00 مساءً</option>
                  <option value="14:00">02:00 مساءً</option>
                  <option value="15:00">03:00 مساءً</option>
                  <option value="16:00">04:00 مساءً</option>
                  <option value="17:00">05:00 مساءً</option>
                </select>
              </div>
              
              <div className="mb-6">
                <label htmlFor="notes" className="mb-1 block text-sm font-medium">
                  ملاحظات إضافية (اختياري)
                </label>
                <textarea
                  id="notes"
                  name="notes"
                  rows={3}
                  className="w-full rounded-md border border-gray-300 p-2"
                  placeholder="أي ملاحظات أو تفاصيل إضافية ترغب في إضافتها"
                  value={appointmentData.notes}
                  onChange={handleAppointmentChange}
                  dir="rtl"
                ></textarea>
              </div>

              <div className="mb-6 rounded-md bg-gray-50 p-4">
                <h4 className="mb-2 font-semibold">ملخص الطلب</h4>
                <p className="mb-1 text-sm">
                  <span className="font-medium">السيارة:</span> {carData.brand} {carData.model} {carData.year}
                </p>
                <p className="mb-1 text-sm">
                  <span className="font-medium">الخدمات المطلوبة:</span>{' '}
                  {Object.entries(serviceData)
                    .filter(([_, value]) => value)
                    .map(([key, _], index, arr) => {
                      const serviceNames: Record<string, string> = {
                        oilChange: 'تغيير زيت المحرك والفلاتر',
                        fluidCheck: 'فحص وتغيير سوائل السيارة',
                        brakesCheck: 'فحص نظام الفرامل والتعليق',
                        electricalCheck: 'فحص الكهرباء والبطارية',
                        tiresCheck: 'فحص وضبط الإطارات',
                        fullCheck: 'فحص شامل لأنظمة السيارة',
                      };
                      return `${serviceNames[key]}${index < arr.length - 1 ? '، ' : ''}`;
                    })}
                </p>
              </div>
              
              <div className="mt-6 flex justify-between">
                <Button variant="outline" onClick={handlePrevStep} type="button">
                  السابق
                </Button>
                <Button type="submit" variant="orangeGradient" disabled={loading}>
                  {loading ? 'جاري تقديم الطلب...' : 'تقديم الطلب'}
                </Button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  )
}
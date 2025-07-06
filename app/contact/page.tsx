"use client"

import React, { useState } from 'react'
import { Button } from '../../components/common/button'
import { Phone, Mail, MapPin, Clock, MessageSquare, Send, AlertCircle, CheckCircle } from 'lucide-react'
import Link from 'next/link'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  })
  
  const [formStatus, setFormStatus] = useState({
    submitted: false,
    error: false,
    message: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    // هنا يمكن إضافة التحقق من صحة المدخلات
    if (!formData.name || !formData.email || !formData.message) {
      setFormStatus({
        submitted: false,
        error: true,
        message: 'يرجى ملء جميع الحقول المطلوبة'
      })
      return
    }

    // محاكاة إرسال نموذج ناجح
    // في التطبيق الفعلي، هنا سيتم إرسال البيانات إلى الخادم
    setTimeout(() => {
      setFormStatus({
        submitted: true,
        error: false,
        message: 'تم إرسال رسالتك بنجاح، سنتواصل معك قريباً'
      })
      
      // إعادة تعيين النموذج
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      })
    }, 1000)
  }

  return (
    <div className="container py-12">
      {/* رأس الصفحة */}
      <div className="mb-10">
        <h1 className="text-3xl font-bold text-fix-blue-700 mb-4">تواصل معنا</h1>
        <p className="text-lg text-gray-600">
          نسعد بتواصلك معنا في أي وقت للاستفسارات، الحجوزات، أو المساعدة الفنية. فريقنا جاهز للرد على استفساراتك.
        </p>
      </div>

      {/* معلومات الاتصال والنموذج */}
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
        {/* معلومات الاتصال */}
        <div className="lg:col-span-1">
          <div className="bg-fix-blue-700 text-white rounded-lg p-6 shadow-md">
            <h2 className="text-xl font-bold mb-6">معلومات الاتصال</h2>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="mt-1 bg-fix-blue-500/30 p-2 rounded-full">
                  <Phone size={20} />
                </div>
                <div>
                  <h3 className="font-bold mb-1">اتصل بنا</h3>
                  <p className="text-white/80 mb-1">خدمة العملاء (8ص - 8م)</p>
                  <p className="text-white font-medium">19XXX</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="mt-1 bg-fix-blue-500/30 p-2 rounded-full">
                  <Mail size={20} />
                </div>
                <div>
                  <h3 className="font-bold mb-1">البريد الإلكتروني</h3>
                  <p className="text-white/80 mb-1">للاستفسارات والدعم</p>
                  <p className="text-white font-medium">info@fixandgo.eg</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="mt-1 bg-fix-blue-500/30 p-2 rounded-full">
                  <MapPin size={20} />
                </div>
                <div>
                  <h3 className="font-bold mb-1">المقر الرئيسي</h3>
                  <p className="text-white/80">القاهرة الجديدة، التجمع الخامس،
                  <br />شارع التسعين الشمالي</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="mt-1 bg-fix-blue-500/30 p-2 rounded-full">
                  <Clock size={20} />
                </div>
                <div>
                  <h3 className="font-bold mb-1">ساعات العمل</h3>
                  <p className="text-white/80 mb-1">الخدمة الفنية:</p>
                  <p className="text-white font-medium">8:00 ص - 8:00 م، طوال أيام الأسبوع</p>
                  <p className="text-white/80 mt-1 mb-1">خدمة طوارئ:</p>
                  <p className="text-white font-medium">24 ساعة / 7 أيام</p>
                </div>
              </div>
            </div>
            
            <div className="mt-8 pt-6 border-t border-fix-blue-600/50">
              <h3 className="font-bold mb-3">تابعنا على</h3>
              <div className="flex gap-3">
                <a 
                  href="#" 
                  className="bg-fix-blue-500/30 p-2 rounded-full hover:bg-fix-blue-500/50 transition-colors"
                  aria-label="Facebook"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-facebook"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                </a>
                <a 
                  href="#" 
                  className="bg-fix-blue-500/30 p-2 rounded-full hover:bg-fix-blue-500/50 transition-colors"
                  aria-label="Instagram"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-instagram"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>
                </a>
                <a 
                  href="#" 
                  className="bg-fix-blue-500/30 p-2 rounded-full hover:bg-fix-blue-500/50 transition-colors"
                  aria-label="Twitter"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-twitter"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
                </a>
                <a 
                  href="#" 
                  className="bg-fix-blue-500/30 p-2 rounded-full hover:bg-fix-blue-500/50 transition-colors"
                  aria-label="LinkedIn"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect width="4" height="12" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                </a>
                <a 
                  href="#" 
                  className="bg-fix-blue-500/30 p-2 rounded-full hover:bg-fix-blue-500/50 transition-colors"
                  aria-label="YouTube"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-youtube"><path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"></path><path d="m10 15 5-3-5-3z"></path></svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* نموذج الاتصال */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-lg p-6 shadow-md">
            <h2 className="text-xl font-bold text-fix-blue-700 mb-6 flex items-center gap-2">
              <MessageSquare size={22} className="text-fix-blue-600" />
              <span>أرسل لنا رسالة</span>
            </h2>
            
            {formStatus.submitted ? (
              <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6 flex items-start gap-3">
                <CheckCircle className="text-green-500 shrink-0 mt-1" size={20} />
                <div>
                  <h3 className="font-bold text-green-700">تم الإرسال بنجاح!</h3>
                  <p className="text-green-600">{formStatus.message}</p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {formStatus.error && (
                  <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6 flex items-start gap-3">
                    <AlertCircle className="text-red-500 shrink-0 mt-1" size={20} />
                    <div>
                      <h3 className="font-bold text-red-700">خطأ في النموذج</h3>
                      <p className="text-red-600">{formStatus.message}</p>
                    </div>
                  </div>
                )}
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">الاسم <span className="text-red-500">*</span></label>
                    <input 
                      type="text" 
                      id="name" 
                      name="name" 
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-fix-blue-300 focus:border-fix-blue-500 outline-none transition-colors" 
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">البريد الإلكتروني <span className="text-red-500">*</span></label>
                    <input 
                      type="email" 
                      id="email" 
                      name="email" 
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-fix-blue-300 focus:border-fix-blue-500 outline-none transition-colors" 
                      required
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">رقم الهاتف</label>
                    <input 
                      type="tel" 
                      id="phone" 
                      name="phone" 
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-fix-blue-300 focus:border-fix-blue-500 outline-none transition-colors"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">الموضوع</label>
                    <select 
                      id="subject" 
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-fix-blue-300 focus:border-fix-blue-500 outline-none transition-colors"
                    >
                      <option value="">اختر الموضوع</option>
                      <option value="استفسار">استفسار عام</option>
                      <option value="حجز">حجز موعد</option>
                      <option value="شكوى">شكوى</option>
                      <option value="اقتراح">اقتراح</option>
                      <option value="أخرى">أخرى</option>
                    </select>
                  </div>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">الرسالة <span className="text-red-500">*</span></label>
                  <textarea 
                    id="message" 
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5} 
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-fix-blue-300 focus:border-fix-blue-500 outline-none transition-colors" 
                    required
                  ></textarea>
                </div>
                
                <div className="pt-2">
                  <Button 
                    variant="orangeGradient" 
                    size="lg"
                    type="submit"
                    className="flex items-center gap-2"
                  >
                    <Send size={18} />
                    <span>إرسال الرسالة</span>
                  </Button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
      
      {/* خريطة الموقع */}
      <div className="mt-12">
        <h2 className="text-xl font-bold text-fix-blue-700 mb-4 flex items-center gap-2">
          <MapPin size={22} className="text-fix-blue-600" />
          <span>موقعنا</span>
        </h2>
        
        <div className="bg-white rounded-lg p-1 shadow-md">
          {/* هنا يمكن وضع خريطة جوجل أو إطار iframe آخر */}
          <div className="aspect-video w-full bg-gray-100 rounded-lg flex items-center justify-center">
            <div className="text-center">
              <MapPin size={40} className="mx-auto text-fix-blue-600 mb-2 opacity-40" />
              <p className="text-gray-500 text-sm">خريطة الموقع ستظهر هنا</p>
              <p className="text-xs text-gray-400 mt-1">يمكن استبدال هذا القسم بخريطة تفاعلية من Google Maps</p>
            </div>
          </div>
        </div>
      </div>

      {/* معلومات الفروع */}
      <div className="mt-12">
        <h2 className="text-xl font-bold text-fix-blue-700 mb-6">فروعنا الرئيسية</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              name: "القاهرة الجديدة",
              address: "التجمع الخامس، شارع التسعين الشمالي",
              phone: "02-xxxxx",
              hours: "8:00 ص - 8:00 م"
            },
            {
              name: "مدينة نصر",
              address: "شارع مصطفى النحاس، مدينة نصر",
              phone: "02-xxxxx",
              hours: "8:00 ص - 8:00 م"
            },
            {
              name: "المهندسين",
              address: "شارع جامعة الدول العربية، المهندسين",
              phone: "02-xxxxx",
              hours: "8:00 ص - 8:00 م"
            }
          ].map((branch, index) => (
            <div key={index} className="bg-white rounded-lg p-5 shadow-md hover:shadow-lg transition-shadow">
              <h3 className="font-bold text-fix-blue-700 text-lg mb-2">{branch.name}</h3>
              <div className="space-y-2 text-gray-600">
                <div className="flex items-start gap-2">
                  <MapPin size={18} className="shrink-0 mt-1 text-fix-orange" />
                  <p>{branch.address}</p>
                </div>
                <div className="flex items-start gap-2">
                  <Phone size={18} className="shrink-0 mt-1 text-fix-orange" />
                  <p>{branch.phone}</p>
                </div>
                <div className="flex items-start gap-2">
                  <Clock size={18} className="shrink-0 mt-1 text-fix-orange" />
                  <p>{branch.hours}</p>
                </div>
              </div>
              <div className="mt-4 flex items-center justify-between">
                <Link 
                  href="#" 
                  className="text-fix-blue-600 hover:text-fix-blue-800 text-sm font-medium transition-colors"
                >
                  الاتجاهات
                </Link>
                <Link 
                  href="#" 
                  className="text-fix-blue-600 hover:text-fix-blue-800 text-sm font-medium transition-colors"
                >
                  تفاصيل الفرع
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* قسم الأسئلة الشائعة */}
      <div className="mt-12 bg-gray-50 rounded-lg p-8">
        <h2 className="text-xl font-bold text-fix-blue-700 mb-6 text-center">الأسئلة الشائعة</h2>
        
        <div className="max-w-3xl mx-auto space-y-4">
          {[
            {
              question: "كيف يمكنني حجز موعد للصيانة؟",
              answer: "يمكنك حجز موعد للصيانة من خلال الاتصال برقم خدمة العملاء 19XXX، أو من خلال موقعنا الإلكتروني عبر صفحة الحجز، أو من خلال تطبيق Fix & Go المتاح على متجر التطبيقات."
            },
            {
              question: "هل تقدمون خدمات الصيانة في المنزل؟",
              answer: "نعم، نقدم خدمات الصيانة المتنقلة للعديد من الخدمات البسيطة والطارئة. يمكنك الاستفسار عن الخدمات المتاحة للصيانة المنزلية من خلال الاتصال بخدمة العملاء."
            },
            {
              question: "ما هي مدة ضمان قطع الغيار؟",
              answer: "تختلف مدة ضمان قطع الغيار حسب نوعها. تتمتع قطع الغيار الأصلية بضمان يصل إلى 12 شهراً، بينما تختلف فترة ضمان القطع البديلة حسب الشركة المصنعة وتتراوح بين 3 إلى 6 أشهر."
            }
          ].map((faq, index) => (
            <div key={index} className="bg-white rounded-lg shadow-sm p-5 hover:shadow-md transition-shadow">
              <h3 className="font-bold text-fix-blue-700 text-lg mb-2">{faq.question}</h3>
              <p className="text-gray-600">{faq.answer}</p>
            </div>
          ))}
          
          <div className="text-center mt-6">
            <Link href="/faq" className="text-fix-blue-600 hover:underline font-medium">
              عرض جميع الأسئلة الشائعة
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
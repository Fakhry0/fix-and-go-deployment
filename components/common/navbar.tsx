"use client"

import React, { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Logo } from '../ui/logo'
import { cn } from '../../utils/cn'
import { Button } from './button'
import { Menu, X, ChevronDown, User, Bell, LogOut } from 'lucide-react'
import { useSession, signOut } from 'next-auth/react'
import { toast } from 'sonner'

const navItems = [
  {
    name: 'الرئيسية',
    href: '/',
  },
  {
    name: 'خدمات الصيانة',
    href: '/maintenance',
    submenu: [
      { name: 'صيانة دورية', href: '/maintenance/scheduled' },
      { name: 'إصلاح أعطال', href: '/maintenance/repair' },
      { name: 'فحص فني', href: '/maintenance/inspection' },
    ],
  },
  {
    name: 'خدمات الطوارئ',
    href: '/emergency',
    submenu: [
      { name: 'سحب السيارة', href: '/emergency/towing' },
      { name: 'إصلاح على الطريق', href: '/emergency/roadside' },
    ],
  },
  {
    name: 'قطع الغيار',
    href: '/parts',
    submenu: [
      { name: 'قطع غيار أصلية', href: '/parts/original' },
      { name: 'قطع غيار بديلة', href: '/parts/alternative' },
      { name: 'اكسسوارات', href: '/parts/accessories' },
    ],
  },
  {
    name: 'تواصل معنا',
    href: '/contact',
  },
]

export function Navbar() {
  const { data: session, status } = useSession()
  const pathname = usePathname()
  const [openMenu, setOpenMenu] = useState(false)
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null)
  const [showNotifications, setShowNotifications] = useState(false)

  const isActive = (href: string) => {
    return pathname === href || pathname.startsWith(`${href}/`)
  }

  const toggleSubmenu = (href: string) => {
    if (openSubmenu === href) {
      setOpenSubmenu(null)
    } else {
      setOpenSubmenu(href)
    }
  }

  const toggleNotifications = () => {
    setShowNotifications(!showNotifications);
  }

  const handleSignOut = async () => {
    await signOut({ redirect: false })
    toast.success('تم تسجيل الخروج بنجاح')
  }

  const isAuthenticated = status === 'authenticated'

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-6 md:gap-10">
          <Logo variant="default" withText={true} />

          {/* قائمة التنقل للشاشات الكبيرة */}
          <nav className="hidden gap-6 md:flex">
            {navItems.map((item) => (
              <div key={item.href} className="relative">
                <div
                  className={cn(
                    'flex items-center gap-1 text-sm font-medium transition-colors hover:text-fix-blue',
                    isActive(item.href)
                      ? 'text-fix-blue font-bold'
                      : 'text-foreground/80'
                  )}
                >
                  {!item.submenu ? (
                    <Link href={item.href} className="py-2">
                      {item.name}
                    </Link>
                  ) : (
                    <button
                      className="flex items-center gap-1 py-2"
                      onClick={() => toggleSubmenu(item.href)}
                    >
                      {item.name}
                      <ChevronDown size={16} />
                    </button>
                  )}
                </div>

                {/* القائمة الفرعية */}
                {item.submenu && openSubmenu === item.href && (
                  <div className="absolute top-full right-0 mt-1 min-w-[200px] rounded-md border bg-background p-2 shadow-md">
                    {item.submenu.map((subitem) => (
                      <Link
                        key={subitem.href}
                        href={subitem.href}
                        className={cn(
                          'block rounded-md px-3 py-2 text-sm hover:bg-muted',
                          isActive(subitem.href)
                            ? 'bg-muted font-medium text-fix-blue'
                            : ''
                        )}
                      >
                        {subitem.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>
        </div>

        {/* أزرار تسجيل الدخول والإشعارات */}
        <div className="hidden items-center gap-4 md:flex">
          {isAuthenticated ? (
            <>
              <div className="relative">
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className="text-foreground/60" 
                  onClick={toggleNotifications}
                  aria-label="الإشعارات"
                >
                  <Bell size={20} />
                  <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-fix-orange text-[10px] text-white">3</span>
                </Button>
                
                {showNotifications && (
                  <div className="absolute left-0 top-full mt-2 w-80 rounded-md border bg-white p-2 shadow-lg z-50">
                    <div className="flex items-center justify-between border-b pb-2">
                      <h3 className="font-bold text-fix-blue-700">الإشعارات</h3>
                      <span className="text-xs text-fix-orange font-medium">3 إشعارات جديدة</span>
                    </div>
                    <div className="mt-2 max-h-60 overflow-y-auto space-y-2">
                      <div className="rounded-md p-2 hover:bg-gray-50 border-r-2 border-fix-orange">
                        <p className="text-sm font-medium">تم جدولة موعد الصيانة الدورية</p>
                        <p className="text-xs text-gray-500">اليوم، 10:30 صباحاً</p>
                      </div>
                      <div className="rounded-md p-2 hover:bg-gray-50 border-r-2 border-fix-orange">
                        <p className="text-sm font-medium">تم تأكيد طلب قطعة الغيار</p>
                        <p className="text-xs text-gray-500">الأمس، 2:45 مساءً</p>
                      </div>
                      <div className="rounded-md p-2 hover:bg-gray-50 border-r-2 border-fix-orange">
                        <p className="text-sm font-medium">خصم 10% على الصيانة الدورية القادمة</p>
                        <p className="text-xs text-gray-500">قبل يومين</p>
                      </div>
                    </div>
                    <div className="mt-2 border-t pt-2 text-center">
                      <Link href="/notifications" className="text-sm text-fix-blue-600 hover:text-fix-blue-800">
                        عرض جميع الإشعارات
                      </Link>
                    </div>
                  </div>
                )}
              </div>
              <Link href="/dashboard" passHref>
                <Button variant="outline" className="flex items-center gap-2">
                  <User size={18} /> {session?.user?.name?.split(' ')[0] || 'الحساب'}
                </Button>
              </Link>
              <Button 
                variant="destructive"
                size="icon"
                onClick={handleSignOut}
                aria-label="تسجيل الخروج"
              >
                <LogOut size={18} />
              </Button>
            </>
          ) : (
            <>
              <Link href="/login" passHref>
                <Button variant="outline" className="flex items-center gap-2">
                  <User size={18} /> تسجيل الدخول
                </Button>
              </Link>
              <Link href="/maintenance/scheduled" passHref>
                <Button>ابدأ الآن</Button>
              </Link>
            </>
          )}
        </div>

        {/* زر القائمة للشاشات الصغيرة */}
        <button
          className="flex items-center justify-center rounded-md p-2 text-foreground md:hidden"
          onClick={() => setOpenMenu(!openMenu)}
        >
          {openMenu ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* القائمة للشاشات الصغيرة */}
      {openMenu && (
        <div className="container pb-6 md:hidden">
          <nav className="flex flex-col space-y-2">
            {navItems.map((item) => (
              <div key={item.href} className="flex flex-col">
                {!item.submenu ? (
                  <Link
                    href={item.href}
                    className={cn(
                      'rounded-md px-3 py-2 text-sm font-medium',
                      isActive(item.href)
                        ? 'bg-muted text-fix-blue font-bold'
                        : 'text-foreground/80'
                    )}
                  >
                    {item.name}
                  </Link>
                ) : (
                  <>
                    <button
                      className={cn(
                        'flex items-center justify-between rounded-md px-3 py-2 text-sm font-medium',
                        isActive(item.href)
                          ? 'bg-muted text-fix-blue font-bold'
                          : 'text-foreground/80'
                      )}
                      onClick={() => toggleSubmenu(item.href)}
                    >
                      {item.name}
                      <ChevronDown
                        size={16}
                        className={cn(
                          'transition-transform',
                          openSubmenu === item.href ? 'rotate-180' : ''
                        )}
                      />
                    </button>
                    {openSubmenu === item.href && (
                      <div className="mr-4 mt-1 flex flex-col space-y-1 border-r pr-3">
                        {item.submenu.map((subitem) => (
                          <Link
                            key={subitem.href}
                            href={subitem.href}
                            className={cn(
                              'rounded-md px-3 py-2 text-sm hover:bg-muted',
                              isActive(subitem.href)
                                ? 'bg-muted font-medium text-fix-blue'
                                : 'text-foreground/80'
                            )}
                          >
                            {subitem.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                )}
              </div>
            ))}
            <div className="mt-4 flex flex-col gap-2 pt-2">
              {isAuthenticated ? (
                <>
                  <div className="relative w-full">
                    <Button 
                      variant="ghost" 
                      className="flex items-center justify-center gap-2 w-full text-foreground/60"
                      onClick={toggleNotifications}
                    >
                      <Bell size={18} /> 
                      <span>الإشعارات</span>
                      <span className="absolute left-2 flex h-4 w-4 items-center justify-center rounded-full bg-fix-orange text-[10px] text-white">3</span>
                    </Button>
                    
                    {showNotifications && (
                      <div className="absolute right-0 left-0 top-full mt-2 rounded-md border bg-white p-2 shadow-lg z-50 max-h-60 overflow-y-auto space-y-2">
                        <div className="rounded-md p-2 hover:bg-gray-50 border-r-2 border-fix-orange">
                          <p className="text-sm font-medium">تم جدولة موعد الصيانة الدورية</p>
                          <p className="text-xs text-gray-500">اليوم، 10:30 صباحاً</p>
                        </div>
                        <div className="rounded-md p-2 hover:bg-gray-50 border-r-2 border-fix-orange">
                          <p className="text-sm font-medium">تم تأكيد طلب قطعة الغيار</p>
                          <p className="text-xs text-gray-500">الأمس، 2:45 مساءً</p>
                        </div>
                        <div className="rounded-md p-2 hover:bg-gray-50 border-r-2 border-fix-orange">
                          <p className="text-sm font-medium">خصم 10% على الصيانة الدورية القادمة</p>
                          <p className="text-xs text-gray-500">قبل يومين</p>
                        </div>
                        <div className="mt-2 border-t pt-2 text-center">
                          <Link href="/notifications" className="text-sm text-fix-blue-600 hover:text-fix-blue-800">
                            عرض جميع الإشعارات
                          </Link>
                        </div>
                      </div>
                    )}
                  </div>
                  <Link href="/dashboard" passHref>
                    <Button variant="outline" className="flex items-center justify-center gap-2 w-full">
                      <User size={18} /> حسابي
                    </Button>
                  </Link>
                  <Button 
                    variant="destructive"
                    className="flex items-center justify-center gap-2 w-full"
                    onClick={handleSignOut}
                  >
                    <LogOut size={18} /> تسجيل الخروج
                  </Button>
                </>
              ) : (
                <>
                  <Link href="/login" passHref>
                    <Button variant="outline" className="flex items-center justify-center gap-2 w-full">
                      <User size={18} /> تسجيل الدخول
                    </Button>
                  </Link>
                  <Link href="/maintenance/scheduled" passHref>
                    <Button className="w-full">ابدأ الآن</Button>
                  </Link>
                </>
              )}
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
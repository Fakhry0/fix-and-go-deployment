# دليل نشر تطبيق FIX & GO

هذا الدليل يشرح كيفية نشر تطبيق FIX & GO على بيئة الإنتاج.

## متطلبات النظام

- Node.js (الإصدار 18.0.0 أو أحدث)
- PNPM (الإصدار 8.0.0 أو أحدث)
- قاعدة بيانات SQL (يمكن استخدام Cloudflare D1 أو أي قاعدة بيانات SQL أخرى)

## خطوات النشر

### 1. تثبيت التبعيات

```bash
cd fix-and-go-deployment
pnpm install
```

### 2. إعداد قاعدة البيانات

قم بتنفيذ ملف الترحيل SQL الموجود في المجلد `migrations` لإنشاء جداول قاعدة البيانات وإدخال البيانات الأولية:

```bash
# إذا كنت تستخدم Cloudflare D1
wrangler d1 execute DB --file=migrations/0001_initial.sql

# إذا كنت تستخدم قاعدة بيانات أخرى
# استخدم الأداة المناسبة لتنفيذ ملف SQL
```

### 3. إعداد متغيرات البيئة

قم بإنشاء ملف `.env.local` في المجلد الرئيسي للمشروع وأضف المتغيرات التالية:

```
# متغيرات المصادقة
NEXTAUTH_URL=https://your-domain.com
NEXTAUTH_SECRET=your-secret-key

# متغيرات قاعدة البيانات
DATABASE_URL=your-database-url
```

### 4. تشغيل التطبيق في بيئة الإنتاج

```bash
pnpm start
```

هذا سيبدأ خادم Next.js في وضع الإنتاج على المنفذ 3000.

### 5. استخدام خادم وكيل عكسي (اختياري)

للحصول على أفضل أداء وأمان، يوصى باستخدام خادم وكيل عكسي مثل Nginx أو Apache لتوجيه حركة المرور إلى تطبيق Next.js.

## خيارات النشر البديلة

### نشر على Vercel

Vercel هي منصة مثالية لتطبيقات Next.js:

1. قم بإنشاء حساب على [Vercel](https://vercel.com)
2. قم بتثبيت Vercel CLI: `npm install -g vercel`
3. قم بتسجيل الدخول: `vercel login`
4. انتقل إلى مجلد المشروع وقم بالنشر: `vercel`

### نشر على Netlify

1. قم بإنشاء حساب على [Netlify](https://netlify.com)
2. قم بتثبيت Netlify CLI: `npm install -g netlify-cli`
3. قم بتسجيل الدخول: `netlify login`
4. انتقل إلى مجلد المشروع وقم بالنشر: `netlify deploy`

### نشر على AWS Amplify

1. قم بإنشاء حساب على [AWS](https://aws.amazon.com)
2. قم بإعداد AWS Amplify: `npm install -g @aws-amplify/cli`
3. قم بتكوين Amplify: `amplify configure`
4. قم بتهيئة المشروع: `amplify init`
5. قم بالنشر: `amplify publish`

## استكشاف الأخطاء وإصلاحها

إذا واجهت أي مشاكل أثناء النشر، تحقق من:

1. تأكد من تثبيت جميع التبعيات بشكل صحيح
2. تأكد من إعداد متغيرات البيئة بشكل صحيح
3. تحقق من سجلات الخادم للحصول على أي أخطاء
4. تأكد من إعداد قاعدة البيانات بشكل صحيح

للحصول على مساعدة إضافية، راجع [وثائق Next.js](https://nextjs.org/docs/deployment).

import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';

// In a real app, this would connect to a database
// For now, we'll use the same mock data as in the NextAuth config
let users = [
  {
    id: "1",
    name: "أحمد محمود",
    email: "ahmed@example.com",
    password: "password123",
    phone: "0123456789",
    role: "user",
  },
  {
    id: "2",
    name: "محمد علي",
    email: "mohamed@example.com",
    password: "password456",
    phone: "0123456788",
    role: "admin",
  },
];

// Create a schema for registration validation
const registerSchema = z.object({
  name: z.string().min(3, {
    message: "الاسم يجب أن يكون 3 أحرف على الأقل",
  }),
  email: z.string().email({
    message: "الرجاء إدخال بريد إلكتروني صحيح",
  }),
  phone: z.string().min(10, {
    message: "رقم الهاتف يجب أن يكون 10 أرقام على الأقل",
  }),
  password: z.string().min(6, {
    message: "كلمة المرور يجب أن تكون 6 أحرف على الأقل",
  }),
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Validate the request body
    const result = registerSchema.safeParse(body);

    if (!result.success) {
      const { errors } = result.error;
      return NextResponse.json({ message: errors[0].message }, { status: 400 });
    }

    const { name, email, phone, password } = result.data;

    // Check if user already exists
    if (users.some(user => user.email === email)) {
      return NextResponse.json({ message: "البريد الإلكتروني مستخدم بالفعل" }, { status: 409 });
    }

    // In a real app, you would hash the password and save to database
    const newUser = {
      id: (users.length + 1).toString(),
      name,
      email,
      phone,
      password, // In production, this should be hashed
      role: "user",
    };

    // Add the new user to our mock database
    users.push(newUser);

    // Return success without sending the password back
    const { password: _, ...userWithoutPassword } = newUser;
    return NextResponse.json({ 
      message: "تم إنشاء الحساب بنجاح",
      user: userWithoutPassword 
    }, { status: 201 });
    
  } catch (error) {
    console.error("Registration error:", error);
    return NextResponse.json({ message: "حدث خطأ أثناء إنشاء الحساب" }, { status: 500 });
  }
}
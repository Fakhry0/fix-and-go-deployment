import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth/next';
import { z } from 'zod';

// In a real app, this would be stored in a database
// For now, we'll use an in-memory store
let serviceRequests: any[] = [];

// Schema for car data validation
const carSchema = z.object({
  brand: z.string().min(1, "يجب تحديد ماركة السيارة"),
  model: z.string().min(1, "يجب إدخال موديل السيارة"),
  year: z.string().min(1, "يجب تحديد سنة الصنع"),
  plateNumber: z.string().min(1, "يجب إدخال رقم اللوحة"),
});

// Schema for service request validation
const serviceRequestSchema = z.object({
  car: carSchema,
  services: z.record(z.boolean()),
  appointment: z.object({
    date: z.string().min(1, "يجب تحديد تاريخ الموعد"),
    time: z.string().min(1, "يجب تحديد وقت الموعد"),
    notes: z.string().optional(),
  }),
  type: z.string(),
});

export async function POST(request: NextRequest) {
  try {
    const session = await getServerSession();
    
    // Check if user is authenticated
    if (!session?.user) {
      return NextResponse.json({ message: "يجب تسجيل الدخول لتقديم طلب" }, { status: 401 });
    }

    const body = await request.json();

    // Validate the request body
    const result = serviceRequestSchema.safeParse(body);

    if (!result.success) {
      const { errors } = result.error;
      return NextResponse.json({ message: errors[0].message }, { status: 400 });
    }

    // Create a new service request with user info and timestamp
    const newServiceRequest = {
      id: `SR-${(serviceRequests.length + 1).toString().padStart(3, '0')}`,
      userId: session.user.id || session.user.email,
      userName: session.user.name,
      userEmail: session.user.email,
      status: 'pending',
      createdAt: new Date().toISOString(),
      ...result.data,
    };

    // Add the new service request to our collection
    serviceRequests.push(newServiceRequest);

    // Return success with the created service request
    return NextResponse.json({ 
      message: "تم تقديم طلب الخدمة بنجاح",
      serviceRequest: newServiceRequest
    }, { status: 201 });
    
  } catch (error) {
    console.error("Service request error:", error);
    return NextResponse.json({ message: "حدث خطأ أثناء تقديم الطلب" }, { status: 500 });
  }
}

export async function GET(request: NextRequest) {
  try {
    const session = await getServerSession();
    
    // Check if user is authenticated
    if (!session?.user) {
      return NextResponse.json({ message: "يجب تسجيل الدخول لعرض الطلبات" }, { status: 401 });
    }

    const userId = session.user.id || session.user.email;
    
    // Get all service requests for the current user
    const userRequests = serviceRequests.filter(req => req.userId === userId);

    return NextResponse.json({ 
      serviceRequests: userRequests
    }, { status: 200 });
    
  } catch (error) {
    console.error("Get service requests error:", error);
    return NextResponse.json({ message: "حدث خطأ أثناء جلب الطلبات" }, { status: 500 });
  }
}
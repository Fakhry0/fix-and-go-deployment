import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { z } from "zod";

// Simulate a simple user database
const users = [
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

// Create a schema for input validation
const credentialsSchema = z.object({
  email: z.string().email({
    message: "الرجاء إدخال بريد إلكتروني صحيح",
  }),
  password: z.string().min(6, {
    message: "كلمة المرور يجب أن تكون 6 أحرف على الأقل",
  }),
});

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "البريد الإلكتروني", type: "email" },
        password: { label: "كلمة المرور", type: "password" },
      },
      async authorize(credentials) {
        try {
          // Validate the credentials
          const result = credentialsSchema.safeParse(credentials);
          
          if (!result.success) {
            return null;
          }

          const { email, password } = result.data;
          
          // In a real app, you would check against a database
          const user = users.find((user) => user.email === email);
          
          // Check if user exists and password matches
          if (!user || user.password !== password) {
            return null;
          }

          // Remove password from returned user object
          const { password: _, ...userWithoutPassword } = user;
          return userWithoutPassword;
        } catch (error) {
          console.error("Authentication error:", error);
          return null;
        }
      },
    }),
  ],
  pages: {
    signIn: "/login",
    signOut: "/",
    error: "/login",
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.phone = user.phone;
        token.role = user.role;
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        session.user.id = token.id as string;
        session.user.phone = token.phone as string;
        session.user.role = token.role as string;
      }
      return session;
    },
  },
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60, // 30 days
  },
  secret: process.env.NEXTAUTH_SECRET || "your-default-secret-that-should-be-changed",
});

export { handler as GET, handler as POST };
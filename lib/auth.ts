import { cookies } from "next/headers"

// Hardcoded credentials
export const ADMIN_CREDENTIALS = {
  email: "princesochimaobim@gmail.com",
  password: "princeisanadmin",
}

export interface AdminSession {
  email: string
  isAuthenticated: boolean
}

export async function createSession(email: string) {
  const cookieStore = await cookies()
  
  // Set session cookie (expires in 24 hours)
  cookieStore.set("admin-session", JSON.stringify({ email, isAuthenticated: true }), {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    maxAge: 60 * 60 * 24, 
    path: "/",
  })
}

export async function getSession(): Promise<AdminSession | null> {
  const cookieStore = await cookies()
  const sessionCookie = cookieStore.get("admin-session")
  
  if (!sessionCookie) {
    return null
  }
  
  try {
    const session = JSON.parse(sessionCookie.value) as AdminSession
    return session.isAuthenticated ? session : null
  } catch {
    return null
  }
}

export async function destroySession() {
  const cookieStore = await cookies()
  cookieStore.delete("admin-session")
}

export async function verifyCredentials(email: string, password: string): Promise<boolean> {
  return email === ADMIN_CREDENTIALS.email && password === ADMIN_CREDENTIALS.password
}

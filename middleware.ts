import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl
  
  // Check if accessing admin routes
  if (pathname.startsWith("/admin")) {
    // Allow access to login page
    if (pathname === "/admin/login") {
      return NextResponse.next()
    }
    
    // Check for session cookie
    const sessionCookie = request.cookies.get("admin-session")
    
    if (!sessionCookie) {
      // Redirect to login if not authenticated
      const loginUrl = new URL("/admin/login", request.url)
      loginUrl.searchParams.set("redirect", pathname)
      return NextResponse.redirect(loginUrl)
    }
    
    try {
      const session = JSON.parse(sessionCookie.value)
      if (!session.isAuthenticated) {
        const loginUrl = new URL("/admin/login", request.url)
        return NextResponse.redirect(loginUrl)
      }
    } catch {
      const loginUrl = new URL("/admin/login", request.url)
      return NextResponse.redirect(loginUrl)
    }
  }
  
  return NextResponse.next()
}

export const config = {
  matcher: "/admin/:path*",
}

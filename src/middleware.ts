import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const hostname = process.env.NEXT_PUBLIC_API_IP_ADDRESS;

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const refreshToken = request.cookies.get("refreshToken")?.value;

  const res = await fetch(`${hostname}/api/auth/verify-refresh-token`, {
    method: "GET",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
      "x-refresh-token": refreshToken!,
    },
  }).then((res) => res.json());
  console.log(res);
  

  if (pathname.startsWith("/auth/login") && !res.success) {
    return NextResponse.next();
  }

  if (pathname.startsWith("/auth/register") && !res.success) {
    return NextResponse.next();
  }

  if (pathname.startsWith("/dashboard") && res.success) {
    return NextResponse.next();
  }

  return NextResponse.redirect(new URL("/", request.url));
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ["/auth/login", "/auth/register", "/dashboard"],
};

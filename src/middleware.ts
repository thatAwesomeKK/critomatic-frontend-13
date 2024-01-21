import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const hostname = process.env.NEXT_PUBLIC_API_IP_ADDRESS;

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const accessToken = request.cookies.get("accessToken")?.value;

  const res = await fetch(`${hostname}/api/auth/verify-access-token`, {
    method: "GET",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
      "x-access-token": accessToken!,
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

import { NextResponse } from "next/server";

export function middleware(req) {
  const { pathname } = req.nextUrl;

  const shortUrl = pathname.slice(1);

  if (
    shortUrl &&
    !pathname.startsWith("/api") &&
    !pathname.startsWith("/_next") &&
    !pathname.startsWith("/static") &&
    !pathname.startsWith("/shorten") &&
    !pathname.startsWith("/about") &&
    !pathname.startsWith("/contact-us") &&
    pathname !== "/"
  ) {
    return NextResponse.rewrite(new URL(`/api/${shortUrl}`, req.url));
  }
  return NextResponse.next();
}

export const config = {
  matcher: "/:path*",
};

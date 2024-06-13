import { NextResponse } from "next/server";
import { NextRequest } from "next/server";

// в digiseller работают пид*ора*сы, фикс для их мочи
export function middleware(request: NextRequest) {
  if (request.method === "POST") {
    const newRequest = new NextRequest(request.url, { method: "GET" });
    return NextResponse.redirect(new URL(newRequest.url), 301);
  }
}

export const config = {
  matcher: "/payment/verification/:path*",
};

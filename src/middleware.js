import { NextResponse } from 'next/server'


export function middleware(request) {
  // Example function to validate auth
  console.log("middel ware ran")


}

export const config = {
  matcher: ['/:path*'],
};


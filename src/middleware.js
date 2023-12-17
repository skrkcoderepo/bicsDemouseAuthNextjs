import { NextResponse } from 'next/server'
import{cryptVerify} from '@/app/service/tokenCheck'

export function middleware(request) {
  // Example function to validate auth

  console.log("middel ware ran", request.url)
  // return NextResponse.redirect(new URL('/', request.url))

}

export const config = {
  matcher: ['/:path*'],
};


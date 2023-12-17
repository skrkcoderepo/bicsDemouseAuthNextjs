
import { NextResponse } from 'next/server'
import{cryptVerify} from '@/app/service/tokenCheck'
import Cookies from 'js-cookie';
export function middleware(request) {
  // Example function to validate auth
  const code = Cookies.get("token");
}
export const config = {
  matcher: ['/:path*'],
};


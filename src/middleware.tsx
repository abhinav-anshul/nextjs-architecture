// 'use client'
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server'
import { AuthProvider } from './auth/JwtContext';



export function middleware(request: NextRequest) {
  // console.log('AuthProvider :>> ', );
  // return <AuthProvider>uuu</AuthProvider>


  // let accessToken = localStorage.getItem('accessToken')


  // if (!accessToken) 
  //  return NextResponse.redirect(new URL('/'))
    // return <AuthProvider>test</AuthProvider>
}



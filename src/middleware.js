import { NextResponse } from 'next/server'

export function middleware(request) {
  if (!request.cookies.has('nubeck_token'))
    return NextResponse.redirect(new URL('/login', request.url))
}

export const config = {
  matcher: ['/categorias/:path*', '/itens/:path*']
}

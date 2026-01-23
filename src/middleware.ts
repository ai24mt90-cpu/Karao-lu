import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// Bakım modunu açmak için bu değeri true yapın
const MAINTENANCE_MODE = true;

export function middleware(request: NextRequest) {
    // Bakım modu kapalıysa normal devam et
    if (!MAINTENANCE_MODE) {
        return NextResponse.next();
    }

    // Bakım sayfasına zaten gidiyorsa izin ver
    if (request.nextUrl.pathname === '/maintenance') {
        return NextResponse.next();
    }

    // Statik dosyalara izin ver
    if (
        request.nextUrl.pathname.startsWith('/_next') ||
        request.nextUrl.pathname.startsWith('/favicon') ||
        request.nextUrl.pathname.includes('.')
    ) {
        return NextResponse.next();
    }

    // Diğer tüm istekleri bakım sayfasına yönlendir
    return NextResponse.rewrite(new URL('/maintenance', request.url));
}

export const config = {
    matcher: [
        /*
         * Match all request paths except for the ones starting with:
         * - api (API routes)
         * - _next/static (static files)
         * - _next/image (image optimization files)
         * - favicon.ico (favicon file)
         */
        '/((?!api|_next/static|_next/image|favicon.ico).*)',
    ],
};

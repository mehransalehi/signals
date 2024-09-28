import { NextResponse } from "next/server";
import { NextRequest } from "next/server";

// Specify protected and public routes
const protectedRoutes = ['/dashboard']
const publicRoutes = ['/signin', '/signup', '/']


export const middleware = async (req: NextRequest) => {

    // Check if the current route is protected or public
    const path = req.nextUrl.pathname
    const isProtectedRoute = protectedRoutes.includes(path)
    const isPublicRoute = publicRoutes.includes(path)

    if (isProtectedRoute) {
        const token = req.cookies.get('authToken');
        if (!token) {
            return NextResponse.rewrite(new URL('/signin', req.url));
        }
        const apiRes = await fetch(new URL('/api/auth-check', req.url), {
            headers: { cookie: req.headers.get('cookie') || '' }
        });
        // Redirect to /dashboard if the user is authenticated
        if (apiRes.status === 200) {
            const respons = NextResponse.next();
            respons.headers.set('x-user-logged-in', 'true')
            return respons;
        } else {
            return NextResponse.rewrite(new URL('/signin', req.url));
        }
    }
}

export const config = {
    matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
}
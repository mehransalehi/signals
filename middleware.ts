import { NextResponse } from "next/server";
import { NextRequest } from "next/server";


export const middleware = async (req: NextRequest) => {
    if (req.nextUrl.pathname.startsWith('/dashboard')) {
        const token = req.cookies.get('authToken');
        if (!token) {
            return NextResponse.rewrite(new URL('/signin', req.url));
        }
        const apiRes = await fetch(new URL('/api/auth-check', req.url), {
            headers: { cookie: req.headers.get('cookie') || '' }
        });

        if (apiRes.status === 200) {
            const respons = NextResponse.next();
            respons.headers.set('x-user-logged-in', 'true')
            return respons;
        } else {
            return NextResponse.rewrite(new URL('/signin', req.url));
        }
    }
}
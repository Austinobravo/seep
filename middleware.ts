import { NextRequest, NextResponse } from "next/server";
import { BASE_URL } from "@/lib/globals";

export async function middleware(req: NextRequest){
    const pathname = req.nextUrl.pathname
    if (pathname.startsWith('/api/superuser')){

        const response = await fetch(`${BASE_URL}/api/auth/session`, {
            headers: { Cookie: req.headers.get("cookie") || "" },
        });

        if (response.status !== 200) {
            return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
        }

        const session = await response.json();

        if(session?.user?.role !== 'superuser'){
            return NextResponse.json({message: "Forbidden"}, {status: 403})
        }
    }

    return NextResponse.next()
}

export const config = {
    matcher: '/api/superuser/:path*'
}
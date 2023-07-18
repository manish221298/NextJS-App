import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest){
    return 
}


// See "Matching paths" 

export const config = {
    matcher: [
            '/',
            'signup',
            'login',
            'profile',
            'home'
    ]
}
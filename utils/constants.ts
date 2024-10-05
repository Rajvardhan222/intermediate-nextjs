import { NextRequest } from "next/server"

export const COOKIE_NAME = 'pardy-token'

export function middleware(req: NextRequest) {
    
}

export const config = {
    matcher : ['/dashboard/:path*','/']
}
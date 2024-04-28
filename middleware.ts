import { NextRequest, NextResponse } from "next/server";

export const config = {
    matcher: ["/"]
}

export default async function middleware(request: NextRequest) {
    const searchParams = request.nextUrl.searchParams;
    const visitor = searchParams.get("v");

    console.log('Visitor:', visitor);

    if(visitor) {
        request.nextUrl.searchParams.delete("v");
        const response = NextResponse.redirect(request.nextUrl);
        response.cookies.set("visitor", visitor);
        
        return response;

    }

    return NextResponse.next();


}
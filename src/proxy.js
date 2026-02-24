import { redirect } from "next/dist/server/api-utils";
import { NextResponse } from "next/server";

export function proxy(request) {
  console.log("proxy"); 
  //return NextResponse.redirect(new URL("/Home", request.url));
}

export const config = {
 // matcher: "/About/:path*",
};

// proxy is used to handle redirection and define a default redirect route.
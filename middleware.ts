import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const login = request.cookies.get("login");
  const url = request.nextUrl.clone();

  console.log("URL", url.pathname, login);

  if (url.pathname === "/")
    return NextResponse.next();

  const basePath = `${url.protocol}//${url.host}`;

  if (!login) {
    const redirect = NextResponse.redirect(
      `${basePath}/?login=0`,
      {
        status: 308,
      },
    );

    redirect.headers.set("x-middleware-cache", "no-cache");
    return redirect;
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/login"],
};

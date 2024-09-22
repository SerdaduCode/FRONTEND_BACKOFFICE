import {
  NextFetchEvent,
  NextMiddleware,
  NextRequest,
  NextResponse,
} from "next/server";

const authPage = ["login"];

export default function withAuth(
  middleware: NextMiddleware,
  requireAuth: string[] = []
) {
  return async (req: NextRequest, next: NextFetchEvent) => {
    const pathname = req.nextUrl.pathname.split("/")[1];
    if (requireAuth.includes(pathname)) {
      const token = req.cookies.get("token");

      if (!token && !authPage.includes(pathname)) {
        const url = new URL("/login", req.url);
        url.searchParams.set("callbackUrl", req.url);
        return NextResponse.redirect(url);
      }
      if (token) {
        if (authPage.includes(pathname)) {
          return NextResponse.redirect(new URL("/dashboard", req.url));
        }
      }
    }
    return middleware(req, next);
  };
}

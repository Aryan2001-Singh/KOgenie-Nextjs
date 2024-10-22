import { NextResponse } from "next/server";
import { authMiddleware } from "@clerk/nextjs/server";
import { RedirectToSignIn } from "@clerk/nextjs";

export default authMiddleware({
  publicRoutes: ['/'],
  afterAuth(auth, req) {
    // Handle missing auth by redirecting to error page or home
    if (!auth) {
      const errorUrl = new URL('/', req.url);
      return NextResponse.redirect(errorUrl);
    }

    // If the user is authenticated and the route is public, redirect to organization selection or organization page
    if (auth.userId && auth.isPublicRoute) {
      let path = "/select-org";

      if (auth.orgId) {
        path = `/organization/${auth.orgId}`;
      }

      const orgSelection = new URL(path, req.url);
      return NextResponse.redirect(orgSelection);
    }

    // If the user is authenticated but hasn't selected an organization, redirect to organization selection
    if (auth.userId && !auth.orgId && req.nextUrl.pathname !== "/select-org") {
      const orgSelection = new URL("/select-org", req.url);
      return NextResponse.redirect(orgSelection);
    }

    // Allow the request to continue if no redirect conditions are met
    return NextResponse.next();
  }
});

export const config = {
  matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
};
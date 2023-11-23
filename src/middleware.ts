import createMiddleware from "next-intl/middleware";
import { locales, pathnames } from "./navigation";

export default createMiddleware({
  defaultLocale: "sv",
  locales,
  pathnames,
});

export const config = {
  matcher: ["/", "/(sv|en)/:path*"],
};

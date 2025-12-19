import createMiddleware from 'next-intl/middleware';
import { locales } from './i18n';

export default createMiddleware({
  locales,
  defaultLocale: 'en',
  localePrefix: 'as-needed',
});

export const config = {
  matcher: ['/', '/(de|en|es|fr|it|ja|ko|ru|zh)/:path*', '/((?!_next|_vercel|.*\\..*).*)'],
};

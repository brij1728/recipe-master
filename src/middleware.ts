import { clerkMiddleware } from '@clerk/nextjs/server';

const publishableKey = process.env.CLERK_PUBLISHABLE_KEY;

if (!publishableKey) {
  throw new Error('Missing Clerk publishableKey.');
}

export default clerkMiddleware({ publishableKey });

export const config = {
  matcher: ['/((?!.*\\..*|_next).*)', '/', '/(api|trpc)(.*)'],
};

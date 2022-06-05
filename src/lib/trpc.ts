import { createTRPCClient } from "@trpc/client";
import { createReactQueryHooks } from "@trpc/react";
import superjson from "superjson";
import { type AppRouter } from "@/server";

export const trpc = createReactQueryHooks<AppRouter>();

export const $trpc = createTRPCClient<AppRouter>({
  transformer: superjson,
  url:
    process.env.VERCEL_URL ||
    process.env.NEXT_PUBLIC_VERCEL_URL ||
    "http://localhost:3000/api/trpc",
});

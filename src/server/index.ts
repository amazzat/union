import * as trpcNext from "@trpc/server/adapters/next";
import { appRouter } from "./routes/_app";

export type AppRouter = typeof appRouter;

export const trpcNextHandler = trpcNext.createNextApiHandler({
  router: appRouter,
  createContext: () => null,
});

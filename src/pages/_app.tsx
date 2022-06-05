import "@fontsource/inter";
import { type AppProps } from "next/app";
import { useRef } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import superjson from "superjson";
import { trpc } from "@/lib/trpc";
import { globalStyles } from "@/styles";

export default function App(props: AppProps) {
  globalStyles();

  const queryClient = useRef(new QueryClient());
  const trpcClient = useRef(
    trpc.createClient({
      transformer: superjson,
      url: "/api/trpc",
    })
  );

  return (
    <trpc.Provider
      client={trpcClient.current}
      queryClient={queryClient.current}
    >
      <QueryClientProvider client={queryClient.current}>
        <props.Component {...props.pageProps} />;
      </QueryClientProvider>
    </trpc.Provider>
  );
}

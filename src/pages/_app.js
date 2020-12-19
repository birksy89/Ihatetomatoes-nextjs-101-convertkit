import { QueryClient, QueryClientProvider } from "react-query";
import "../styles/tailwind.css";

function MyApp({ Component, pageProps }) {
  // Create a client
  const queryClient = new QueryClient();
  return (
    // Provide the client to your App
    <QueryClientProvider client={queryClient}>
      <Component {...pageProps} />
    </QueryClientProvider>
  );
}

export default MyApp;

// pages/_app.tsx
import type { AppProps } from "next/app";
import Layout from "@/components/layouts/Layout"; // ✅ Required!
import "@/styles/globals.css"; // ✅ Global styles

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;

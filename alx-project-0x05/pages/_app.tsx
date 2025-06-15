import React from "react";
import type { AppProps } from "next/app";
import Layout from "@/components/layouts/Layout";
import { CountProvider } from "@/context/CountContext";
import "@/styles/globals.css";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <CountProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </CountProvider>
  );
};

export default MyApp;

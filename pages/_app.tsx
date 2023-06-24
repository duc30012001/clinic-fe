import { PublicLayout } from "@/layouts";
import "@/styles/globals.css";
import { AppPropsWithLayout } from "@/utils/types";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const Layout = Component.Layout ?? PublicLayout;
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

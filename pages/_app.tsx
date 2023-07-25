import axiosClient from "@/apiClient";
import AppLoader from "@/components/appLoader";
import AppToast from "@/components/appToast";
import { useLocale } from "@/hooks";
import { PublicLayout } from "@/layouts";
import { AppPropsWithLayout } from "@/utils/types";
import { Inter } from "next/font/google";
import { IntlProvider } from "react-intl";
import "react-quill/dist/quill.snow.css";

import "@/styles/globals.css";
import { SWRConfig } from "swr/_internal";

const inter = Inter({ subsets: ["latin"] });

function App({ Component, pageProps }: AppPropsWithLayout) {
  const Layout = Component.Layout ?? PublicLayout;
  const { locale, messages } = useLocale();

  const swrConfig = {
    fetcher: (url) => axiosClient.get(url),
  };
  return (
    <SWRConfig value={swrConfig}>
      <main className={inter.className}>
        <IntlProvider locale={locale as string} messages={messages}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
          <AppToast />
          <AppLoader />
        </IntlProvider>
      </main>
    </SWRConfig>
  );
}

export default App;

import '@/styles/globals.css';

import { Inter } from '@next/font/google';
import type { AppProps } from 'next/app';

import type { NextPageWithLayout } from '@/types';

const inter = Inter({
  weight: ['300', '400', '600', '700', '800'],
  subsets: ['latin'],
});

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page);
  return (
    <main className={inter.className}>
      {getLayout(<Component {...pageProps} />)}
    </main>
  );
}

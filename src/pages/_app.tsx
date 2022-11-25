import '@/styles/globals.css';
import '@/styles/scrollbar.css';
import 'overlayscrollbars/overlayscrollbars.css';

import { Inter } from '@next/font/google';
import type { AppProps } from 'next/app';
import {
  configureChains,
  createClient,
  defaultChains,
  WagmiConfig,
} from 'wagmi';
import { CoinbaseWalletConnector } from 'wagmi/connectors/coinbaseWallet';
import { InjectedConnector } from 'wagmi/connectors/injected';
import { MetaMaskConnector } from 'wagmi/connectors/metaMask';
import { WalletConnectConnector } from 'wagmi/connectors/walletConnect';
import { alchemyProvider } from 'wagmi/providers/alchemy';
import { publicProvider } from 'wagmi/providers/public';

import { SessionProvider } from '@/context/authContext';
import type { NextPageWithLayout } from '@/types';

const inter = Inter({
  weight: ['300', '400', '600', '700', '800'],
  subsets: ['latin'],
});

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

const { chains, provider, webSocketProvider } = configureChains(defaultChains, [
  alchemyProvider({ apiKey: 'yourAlchemyApiKey' }),
  publicProvider(),
]);

// Set up client
const client = createClient({
  autoConnect: true,
  connectors: [
    new MetaMaskConnector({ chains }),
    new CoinbaseWalletConnector({
      chains,
      options: {
        appName: 'wagmi',
      },
    }),
    new WalletConnectConnector({
      chains,
      options: {
        qrcode: true,
      },
    }),
    new InjectedConnector({
      chains,
      options: {
        name: 'Injected',
        shimDisconnect: true,
      },
    }),
  ],
  provider,
  webSocketProvider,
});

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page);
  return (
    <WagmiConfig client={client}>
      <SessionProvider>
        <main className={inter.className}>
          {getLayout(<Component {...pageProps} />)}
        </main>
      </SessionProvider>
    </WagmiConfig>
  );
}

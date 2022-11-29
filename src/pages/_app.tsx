import { setupStore } from '@store/store';
import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';

import { Roboto } from '@next/font/google';

const roboto = Roboto({
  weight: ['400', '500', '700'],
});

import '../../styles/globals.scss';

const store = setupStore();

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <main className={roboto.className}>
        <Component {...pageProps} />
      </main>
    </Provider>
  );
}

export default MyApp;

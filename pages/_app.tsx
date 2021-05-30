import { ThemeProvider } from 'next-themes';
import { DefaultSeo } from 'next-seo';
import Head from 'next/head';

import SEO from '../next-seo.config';

import '../styles/globals.scss';

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <Head>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <script
          async
          defer
          data-domain="vihark.io"
          src="https://plausible.io/js/plausible.js"
        ></script>
      </Head>
      <DefaultSeo {...SEO} />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

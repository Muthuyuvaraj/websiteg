import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="icon" href="/images/favicon/browser.png" type="image/png" />
        <link rel="apple-touch-icon" href="/images/favicon/iPhone.png" />
        <link rel="icon" sizes="192x192" href="/images/favicon/Android.png" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

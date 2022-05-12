import { Head, Main, NextScript, Html } from 'next/document';

// do we need this?
const Document = () => (
  <Html lang="en" dir="ltr">
    <Head>
      <meta name="application-name" content="MB team" />
      <meta name="msapplication-config" content="/browserconfig.xml" />
      <meta name="msapplication-TileColor" content="#ffffff" />
      <meta name="theme-color" content="#ffffff" />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
      <link rel="shortcut icon" type="image/x-icon" href="/favicon.ico" />
      <link rel="manifest" href="/site.webmanifest" />
    </Head>
    <body>
      <noscript>Your browser does not support JavaScript!</noscript>
      <Main />
      <NextScript />
    </body>
  </Html>
);

export default Document;

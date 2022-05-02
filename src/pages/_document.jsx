import { Head, Main, NextScript, Html } from "next/document";

// do we need this?
const Document = () => (
  <Html lang="en" dir="ltr">
    <Head>
      <meta name="application-name" content="MB team" />
      {/* other meta stuff */}
    </Head>
    <body>
      <noscript>Your browser does not support JavaScript!</noscript>
      <Main />
      <NextScript />
    </body>
  </Html>
);

export default Document;

import Document, { Html, Head, Main, NextScript } from "next/document";
import type { DocumentProps } from "next/document";
import i18nextConfig from "../next-i18next.config";

type Props = DocumentProps & {
  // add custom document props
};

class MyDocument extends Document<Props> {
  render() {
    const currentLocale =
      this.props.__NEXT_DATA__.locale ?? i18nextConfig.i18n.defaultLocale;
    return (
      <Html lang={currentLocale} >
        <Head>
          <meta charSet="utf-8" />
          <link
            href="https://cdnjs.cloudflare.com/ajax/libs/meyer-reset/2.0/reset.min.css"
            rel="stylesheet"
          />
          <link href="/app.css" rel="stylesheet" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Noto+Sans+SC:wght@100..900&display=swap"
            rel="stylesheet"
          />
          <link
            rel="shortcut icon"
            type="image/x-icon"
            href="images/favicon.ico"
          ></link>
          <meta
            name="description"
            content="CKB Eco Fund is dedicated to fostering innovations on CKB. We invest in startups that drive adoption, scalability, and accessibility of CKB."
          />
          <title>CKB Eco Fund</title>
         <meta property="og:title" content="RGB++ Fans" />
          <meta property="og:type" content="website" />
          <meta
            property="og:image"
            content="https://www.rgbppfans.com/images/rgb++.png"
          />
          <meta property="og:site_name" content="RGB++ Fans" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:site" content="@rgbppfans" />
          <meta name="twitter:creator" content="@rgbppfans" />
          <meta name="twitter:title" content="RGB++ Fans" />
          <meta name="twitter:description" content="RGB++ is an asset issuance protocol on the Bitcoin mainnet. RGB++ Fans focus on promoting protocol within the Bitcoin ecosystem and building global RGB++ community." />
          <meta name="twitter:image" content="https://www.rgbppfans.com/images/rgbppfuns.png"></meta>
          <meta name="viewport" content="width=device-width, initial-scale=0, maximum-scale=0, user-scalable=yes,shrink-to-fit=no" />

        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;

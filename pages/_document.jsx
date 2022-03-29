import * as React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';
import theme from 'component/layout/theme';
import { CONFIG_CONSTANT } from 'utils/constants';

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    const { locale } = this.props;
    let direction = 'ltr';
    if (CONFIG_CONSTANT.RTL_LANG && CONFIG_CONSTANT.RTL_LANG.includes(locale)) {
      direction = 'rtl';
    }

    return (
      <Html dir={direction}>
        <Head>
          {/* PWA primary color */}
          <meta name="theme-color" content={theme.palette.primary.main} />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
          />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/icon?family=Material+Icons"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

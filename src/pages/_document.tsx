import type { DocumentContext } from 'next/document';
import Document, { Head, Html, Main, NextScript } from 'next/document';

class CustomDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    return Document.getInitialProps(ctx);
  }

  // eslint-disable-next-line class-methods-use-this
  render() {
    return (
      <Html lang="en-US">
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default CustomDocument;

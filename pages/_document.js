import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head></Head>
        <body>
          <Main />
          <NextScript />
          <noscript
              dangerouslySetInnerHTML={{
                  __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=G-Q8HKFNRW9E" height="0" width="0" style="display: none; visibility: hidden;" />`,
              }}
          />
        </body>
      </Html>
    );
  }
}

export default MyDocument;

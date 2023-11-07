import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
  DocumentInitialProps,
} from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          {/*cases when ist needed to modify the head*/}
          {/*add a favicon*/}
          {/*import a custom font*/}
          {/*import css*/}
          {/*scripts*/}
          <body className="my-class-css">
            <Main />
            <NextScript />
          </body>
        </Head>
      </Html>
    )
  }
}

export default MyDocument

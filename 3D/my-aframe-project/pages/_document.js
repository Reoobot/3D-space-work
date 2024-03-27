import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
    <Head>
      <script src="https://aframe.io/releases/1.4.2/aframe.min.js"></script>
      {/* Otros elementos head aquí */}
    </Head>
    <body>
      <Main />
      <NextScript />
    </body>
  </Html>
  )
}

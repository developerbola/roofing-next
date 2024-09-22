import { Head, Html, Main, NextScript } from "next/document";

export default function Document() {
  if (process.env.NEXT_PUBLIC_HIDE_ERRORS === "true") {
    console.error = () => {};
  }
  return (
    <Html lang="en" id="#top">
      <Head />
      <link rel="shortcut icon" href="/assets/img/favicon.png" />
      <link rel="preconnect" href="https://fonts.bunny.net" />
      <link
        href="https://fonts.bunny.net/css?family=dm-sans:400,400i,500,500i,700,700i|poppins:300,300i,400,400i,500,500i,600,600i,700,700i,800,800i"
        rel="stylesheet"
      />

      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

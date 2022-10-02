import { Html, Head, Main, NextScript } from "next/document";

const Document = () => {
  return (
    <Html lang="en">
      <Head />
      <body className="dark:bg-darkBlue dark:text-white font-opensans">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default Document;

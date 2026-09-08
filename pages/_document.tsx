import Document, { Html, Head, Main, NextScript } from "next/document";
import { themeInitScript } from "../src/components/ThemeProvider";

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en" suppressHydrationWarning>
        <Head />
        <body>
          {/* Applies the stored/system theme before first paint to avoid a
              light-mode flash on dark-mode loads. */}
          <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

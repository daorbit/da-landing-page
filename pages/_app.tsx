import type { AppProps } from "next/app";
import Head from "next/head";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import CookieConsentBanner from "../src/components/CookieConsentBanner";
import "../src/styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#7c3aed" />
        <meta name="robots" content="index, follow" />
        <meta name="language" content="English" />
        <meta name="author" content="DA Orbit" />

        <link rel="icon" href="/favicon.png" />
        <link rel="apple-touch-icon" href="/favicon.png" />
        <link rel="manifest" href="/manifest.json" />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "DA Orbit",
              url: "https://www.daorbit.in",
              logo: "https://www.daorbit.in/favicon.png",
              description:
                "Revolutionizing software development with cutting-edge solutions. We build the future, one orbit at a time.",
              foundingDate: "2025",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Delhi",
                addressCountry: "India",
              },
              contactPoint: {
                "@type": "ContactPoint",
                email: "daorbit2k25@gmail.com",
                contactType: "customer service",
              },
              sameAs: [
                "https://github.com/daorbit",
                "https://linkedin.com/company/daorbit",
              ],
            }),
          }}
        />

        <style
          dangerouslySetInnerHTML={{
            __html: `
            /* Prevent flash of unstyled content */
            .min-h-screen {
              min-height: 100vh;
            }
          `,
          }}
        />
      </Head>
      <Component {...pageProps} />
      <CookieConsentBanner />
      <Analytics />
      <SpeedInsights />
    </>
  );
}

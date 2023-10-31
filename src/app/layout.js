import Schema from "./Schema";
import Footer from "./components/Footer";
import Header from "./components/Header";
import "./globals.css";
import Script from "next/script";

export const metadata = {
  title: " Watch your favorite show with a Peacock watch party ",
  description:
    "Join the peacock watch party for an unforgetful experience and enjoy unlimited shows and endless fun.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/x-icon" href="/logo.svg" />
        <link rel="canonical" href="https://www.peacockparty.net/" />
        <meta
          name="google-site-verification"
          content="sDgXkaVJiGWiiVmnSJgbSyGJIqDJuTC8gztECqldLis"
        />

        <meta property="og:url" content="https://www.peacockparty.net/" />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content=" Watch your favorite show with a Peacock watch party"
        />
        <meta
          property="og:description"
          content=" Join the peacock watch party for an unforgetful experience and enjoy unlimited shows and endless fun.."
        />
        <meta
          property="og:image"
          content="https://www.peacockparty.net/logo.svg"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="peacockparty.com" />
        <meta property="twitter:url" content="https://www.peacockparty.net/" />
        <meta
          name="twitter:title"
          content=" Watch your favorite show with a Peacock watch party"
        />
        <meta
          name="twitter:description"
          content=" Join the peacock watch party for an unforgetful experience and enjoy unlimited shows and endless fun.."
        />
        <meta
          name="twitter:image"
          content="https://www.peacockparty.net/logo.svg"
        />
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-BZWHP9J3E8" />
        <Script
          id="gtm-script"
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-BZWHP9J3E8');
          `,
          }}
        />
      </head>
      <body>
        <Schema />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}

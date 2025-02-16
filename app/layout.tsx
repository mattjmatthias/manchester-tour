import type { Metadata } from "next";
import Script from "next/script";
import localFont from "next/font/local";
import ClientI18nProvider from "./ClientI18nProvider";
import "../styles/globals.css";

const cardo = localFont({
  src: "./fonts/Cardo-Regular.ttf",
  variable: "--font-cardo",
  weight: "400",
});

const cardoItalic = localFont({
  src: "./fonts/Cardo-Italic.ttf",
  variable: "--font-cardo-italic",
  weight: "400",
});

const cardoBold = localFont({
  src: "./fonts/Cardo-Bold.ttf",
  variable: "--font-cardo-bold",
  weight: "700",
});

export const metadata: Metadata = {
  title: "Manchester AI Tour",
  description: "An AI tour of industry and social activism",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=G-XJ7GBM97MH`}
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-XJ7GBM97MH', {
              anonymize_ip: true,
              allow_google_signals: false,
              allow_ad_personalization_signals: false,
              cookie_flags: 'SameSite=None;Secure'
            });
          `}
        </Script>
      </head>
      <body
        className={`${cardo.variable} ${cardoItalic.variable} ${cardoBold.variable} antialiased`}
      >
        <ClientI18nProvider>
          {children}
        </ClientI18nProvider>
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import localFont from "next/font/local";
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
      <body
        className={`${cardo.variable} ${cardoItalic.variable} ${cardoBold.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

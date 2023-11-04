import "./globals.css";

import {
  Inter,
  Hind,
  Poppins,
  Lato,
  Montserrat,
  Open_Sans,
} from "next/font/google";

const montserrat = Montserrat({
  style: "normal",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-montserrat",
});
const open_Sans = Open_Sans({
  style: "normal",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-open_Sans",
});
const inter = Inter({
  style: "normal",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-inter",
});
const hind = Hind({
  style: "normal",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-hind",
});
const poppins = Poppins({
  style: "normal",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
});
const lato = Lato({
  style: "normal",
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"],
  variable: "--font-lato",
});
export const metadata = {
  title: "Chibuike Ewenike",
  description: "Official Portfolio of Ewenike Chibuike, a software developer",
};

export default function RootLayout({ children }) {
  return (
    <html
      suppressHydrationWarning
      lang="en"
      className={`${montserrat.variable} ${open_Sans.variable} ${inter.variable} ${hind.variable} ${poppins.variable} ${lato.variable} h-full  w-full font-sans`}
    >
      <head>
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className="h-full  w-full">{children}</body>
    </html>
  );
}

import type { Metadata } from "next";
import { Inter, Roboto, Alegreya } from "next/font/google";
import Navbar from "./components/navbar";
import "./../globals.css";
import { cookies } from "next/headers";

const inter = Inter({ subsets: ["latin"] });
const roboto = Roboto({ subsets: ['latin'], weight: ['400', '700'] });
const alegreya = Alegreya({ subsets: ['latin'], weight: ['400', '700'] });

export const metadata: Metadata = {
  title: "Signals",
  description: "Auto Ordring Bot For Cryptocurency",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="cupcake">
      <body className={roboto.className}>
        {children}
      </body>
    </html>
  );
}

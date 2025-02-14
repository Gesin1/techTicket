import type { Metadata } from "next";
import { Road_Rage, Roboto, Alatsi } from "next/font/google";
import "./globals.css";

const roadRage = Road_Rage({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-roadRage",
});

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
  variable: "--font-roboto",
});

const alatsi = Alatsi({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-alatsi",
});

export const metadata: Metadata = {
  title: "Book a Ticket",
  description: "Generated event ticket",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${roadRage.variable} ${roboto.variable} ${alatsi.variable}`}
      >
        {children}
      </body>
    </html>
  );
}

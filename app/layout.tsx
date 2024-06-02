import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./ui/header/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Gonza Dev Portfolio",
  description: "Welcome to my portfolio",
  icons: {
    icon: "/public/images/logo.png"
  },
};

export default function RootLayout({
  children,
  intro,
  chat,
}: Readonly<{
  children: React.ReactNode;
  intro: React.ReactNode;
  chat: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {/* {intro}         */}
        {children}
        {/* {chat} */}
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./ui/header/Header";
import logo from "@/public/images/logo.png";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Gonza Dev Portfolio",
  description: "Welcome to my portfolio",
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
        {intro}        
        {children}
        {chat}
      </body>
    </html>
  );
}

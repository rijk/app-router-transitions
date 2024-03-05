import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Nav from "@/components/nav";
import Transitions from "@/components/page-transitions/context";
import Animate from "@/components/page-transitions/animate";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body className={`${inter.className} bg-slate-400 flex flex-col h-full`}>
        <Transitions>
          <Nav />
          <Animate>{children}</Animate>
        </Transitions>
      </body>
    </html>
  );
}

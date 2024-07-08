import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../app/global.css";
import Navbar from "./components/navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Seva Charities",
  description: "UT Seva Charities. A little love, a big difference!",
  icons: "/favicon.ico",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="icon"
          href="/favicon.ico"
          type="image/<generated>"
          sizes="<generated>"
        />
      </head>
      <body className={`${inter.className} bg-yellow-0`}>
        <main className="relative flex flex-col min-h-screen max-w-screen-xl mx-auto px-6">
          <Navbar />
          {children}
        </main>
      </body>
    </html>
  );
}

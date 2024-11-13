import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { SocialLinks, NavBar } from "@/components";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Baystone",
  description: "Outdoor utility and ambiance.",
  icons: {
    icon: '/baystoneicon.ico',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <NavBar />

        {children}

        <SocialLinks />
      </body>
    </html>
  );
}

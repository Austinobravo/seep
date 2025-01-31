import type { Metadata } from "next";
import localFont from 'next/font/local'
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollButton from "@/components/ScrollUp";
import { Toaster } from "@/components/ui/sonner";
import SessionClientProvider from "@/lib/clientSession";
import { GeneralProvider } from "@/hooks/useContextHook";
import 'react-quill/dist/quill.snow.css';

const satoshi = localFont({
  src:[
    {
      path: './fonts/Satoshi-Regular.otf'
    },
    {
      path: './fonts/Satoshi-Black.otf'
    },
    // {
    //   path: './fonts/Satoshi-BlackItalic.otf'
    // },
    {
      path: './fonts/Satoshi-Bold.otf'
    },
    // {
    //   path: './fonts/Satoshi-BoldItalic.otf'
    // },
    // {
    //   path: './fonts/Satoshi-Italic.otf'
    // },
    {
      path: './fonts/Satoshi-Light.otf'
    },
    // {
    //   path: './fonts/Satoshi-LightItalic.otf'
    // },
    {
      path: './fonts/Satoshi-Medium.otf'
    },
    // {
    //   path: './fonts/Satoshi-MediumItalic.otf'
    // },
  ]
})


export const metadata: Metadata = {
  title: "Seep: A Tech Innovative",
  description: "Seep is a tech innovative initiative to empower young tech entrepreneurs",
  verification:{
    google: "NDo8OG5xL9YSSi4tQwDFF98bJOjX6Haa0vA17YTh8g8",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={satoshi.className}><GeneralProvider><SessionClientProvider><Toaster/><Navbar/><div className="mt-28">{children}</div><Footer/><ScrollButton/></SessionClientProvider></GeneralProvider></body>
    </html>
  );
}

"use client"
import { useEffect } from "react";
import Loader from "@/app/components/Loader";
import { Zalando_Sans, Zalando_Sans_Expanded } from "next/font/google";
import "./globals.css";
import AosComponent from "@/app/components/Aos";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { useState } from "react";



const zalandoSans = Zalando_Sans({
  variable: "--font-zalando-sans",
  subsets: ["latin"],
});

const zalandoSansExpanded = Zalando_Sans_Expanded({
  variable: "--font-zalando-sans-expanded",
  subsets: ["latin"],
});

// export const metadata = {
//   title: "Norml | Experiences & campaigns that feel Norml",
//   description: "We design brands, experiences & campaigns that feel Norml",
// };


export default function RootLayout({ children }) {

   const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000); // You can remove this if you want instant load
  }, []);

  return (
<html lang="en">
  <body className={`${zalandoSans.variable} ${zalandoSansExpanded.variable}`}>
    {loading ? (
      <Loader />
    ) : (
      <>
        <Header />
        <AosComponent>
          {children}
        </AosComponent>
        <Footer />
      </>
    )}
  </body>
</html>

  );
}

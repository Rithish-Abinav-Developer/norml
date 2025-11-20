import { Zalando_Sans, Zalando_Sans_Expanded } from "next/font/google";
import "./globals.css";
import AosComponent from "@/app/components/Aos";
import Header from "./components/Header";
import Footer from "./components/Footer";



const zalandoSans = Zalando_Sans({
  variable: "--font-zalando-sans",
  subsets: ["latin"],
});

const zalandoSansExpanded = Zalando_Sans_Expanded({
  variable: "--font-zalando-sans-expanded",
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${zalandoSans.variable} ${zalandoSansExpanded.variable}`}>
        <Header />
        <AosComponent>
          {children}
        </AosComponent>
        <Footer/>
      </body>
    </html>
  );
}

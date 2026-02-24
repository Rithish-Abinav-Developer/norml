import { Zalando_Sans, Zalando_Sans_Expanded } from "next/font/google";
import "./globals.css";
import AosComponent from "@/app/components/Aos";
import Header from "./components/Header";
import Footer from "./components/Footer";
import LoaderWrapper from "./components/LoaderWrapper"; // NEW

const zalandoSans = Zalando_Sans({
  variable: "--font-zalando-sans",
  subsets: ["latin"],
});

const zalandoSansExpanded = Zalando_Sans_Expanded({
  variable: "--font-zalando-sans-expanded",
  subsets: ["latin"],
});

export const metadata = {
  title: 'Norml - Digital Marketing Agency',
  description: 'Norml is a leading digital marketing agency helping brands grow online with SEO, social media, branding, and creative campaigns.',
  verification: {
    google: '77r3WTIxOZ64Y_QFqJmdkXHukexCmCwBGr3Zfx6R_sg',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${zalandoSans.variable} ${zalandoSansExpanded.variable}`}>
        <LoaderWrapper>
          <Header />
          <AosComponent>{children}</AosComponent>
          <Footer />
        </LoaderWrapper>
      </body>
    </html>
  );
}

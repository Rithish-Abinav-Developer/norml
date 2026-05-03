"use client"
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import style from "./Header.module.css"
import Popup from './Popup'
import AnimatedText from './AnimatedText'
import { usePathname } from 'next/navigation'

export default function Header() {

  const pathname = usePathname();

  const [mobile, setMobile] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [popupOpen, setPopupOpen] = useState(false); 
  const [showHeader, setShowHeader] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      setMobile(window.innerWidth <= 767);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // 🔥 Scroll logic
  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      if (window.scrollY < lastScrollY) {
        // scrolling UP
        setShowHeader(true);
      } else {
        // scrolling DOWN
        setShowHeader(false);
      }

      lastScrollY = window.scrollY;
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <Popup popupOpen={popupOpen} setPopupOpen={setPopupOpen} />

      <header id={style.header} className={showHeader ? "show" : ""}>
        <div className={`container ${style.container}`}>

          <Link href="/">
            <Image src='/images/logo.svg' width={147} height={51} alt='logo'/>
          </Link>

          {mobile && 
            <button className={`${style.mobile_menu} ${mobileMenuOpen ? style.mobile_menu_close : ""}`} onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              <span className={style.line}></span>
              <span className={style.line}></span>

            </button>
          }

          <nav className={`${style.nav}`}>
            

            <ul>
              <li><Link className="link" href="/about">About Us</Link></li>
              <li><Link className="link" href="/services">Services</Link></li>
              <li><Link className="link" href="/blog">Blogs</Link></li>
              <li><Link className="link" href="/contact-us">Contact</Link></li>

              {mobile && (
                <li>
                  <button 
                    className={`common_btn ${style.common_btn_mobile}`} 
                    onClick={() => setPopupOpen(true)}
                  >
                    Enquire Now
                  </button>
                </li>
              )}
            </ul>
          </nav>

          {!mobile && (
            <button className="common_btn" onClick={() => setPopupOpen(true)}>
              Enquire Now
            </button>
          )}

        </div>


{/* ==================================== Mobile menu ==================================== */}

{mobileMenuOpen && 

<div className={` ${style.mobile_menu_container}`}>
 {/* <div className="noise-bg"></div> */}
<div className={`container  ${style._container}`}>
 {/* <div className="noise-bg"></div> */}
  <div className={style.mobileColumn}>
      <ul className={style.socialLinks}>
        <li> <AnimatedText delay={300} tag="a" href="/" text="Facebook" /> </li>
         <li> <AnimatedText delay={450} tag="a" href="/" text="Linkedin" /> </li>
          <li> <AnimatedText delay={600} tag="a" href="/" text="Youtube" /> </li>
           <li> <AnimatedText delay={900} tag="a" href="/" text="Instagram" /> </li>
         
    </ul>


     <ul className={style.info}>
        <li> <AnimatedText delay={1050} tag="a" href='mailto:support@norml.com' text="support@norml.com" /> </li>
        <li> <AnimatedText delay={1200} tag="a" href='tel:18002011019' text="1-800-201-1019" /> </li>
    </ul>

  </div>

   <div className={style.mobileColumn}>
    
       <ul className={style.menuLinks}>
         <AnimatedText delay={300} tag="p" text="/menu" /> 
        <li> <AnimatedText delay={450} tag="a" className={pathname === '/' ? style.active : ""} href="/"  text="Home" /> </li>
        <li> <AnimatedText delay={600} tag="a" className={pathname === '/about' ? style.active : ""} href="/about" text="About Us" /> </li>
        <li> <AnimatedText delay={900} tag="a" className={pathname === '/services' ? style.active : ""} href="/services" text="Services" /> </li>
        <li> <AnimatedText delay={1200} tag="a" className={pathname === '/blog' ? style.active : ""} href="/blog" text="Blogs" /> </li>
        <li> <AnimatedText delay={1500} tag="a" className={pathname === '/contact-us' ? style.active : ""} href="/contact-us" text="Contact" /> </li>

    </ul>
  </div>

</div>

 <Image className={style.mobile_menu_logo} src='/images/logo.svg' width={147} height={51} alt='logo'/>

</div>

}
{/* ==================================== Mobile menu ==================================== */}



      </header>
    </>
  )
}
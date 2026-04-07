"use client"
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import style from "./Header.module.css"
import Popup from './Popup'

export default function Header() {

  const [mobile, setMobile] = useState(false);
  const [navOpen, setNavOpen] = useState(false);
  const [popupOpen, setPopupOpen] = useState(false); 

  useEffect(() => {
    const handleResize = () => {
      setMobile(window.innerWidth <= 767);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      <Popup popupOpen={popupOpen} setPopupOpen={setPopupOpen} />

      <header>
        <div className={`container ${style.container}`}>

          <Link href="/">
            <Image src='/images/logo.svg' width={147} height={51} alt='logo'/>
          </Link>

          {mobile && 
            <button className={style.mobile_menu} onClick={() => setNavOpen(!navOpen)}>
              <Image src='/images/hamburger_icon.svg' width={24} height={24} alt='menu'/>
            </button>
          }

          <nav className={`${style.nav} ${navOpen ? style.nav_open : ''}`}>
            
            {mobile && 
              <button 
                className={`${style.mobile_menu} ${style.mobile_menu_close}`} 
                onClick={() => setNavOpen(false)}
              >
                <Image src='/images/menu_close.svg' width={24} height={24} alt='menu'/>
              </button>
            }

            <ul>
              <li><Link className="link" href="/about">About Us</Link></li>
              <li><Link className="link" href="/services">Services</Link></li>
              <li><Link className="link" href="#">Blogs</Link></li>
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
      </header>
    </>
  )
}

"use client";
import React, { useRef, useState } from 'react'
import Logo from "@/app/src/logo.svg"
import Link from 'next/link'
import Image from 'next/image'
import CallIcon from "@/app/src/call.svg"
import closeIcon from "@/app/src/close.svg"
import menuIcon from "@/app/src/menu.svg"
import RightArrow from '@/app/src/arrow-right.svg'
import FormPopup from './FormPopup';


export default function Header() {

    const [showMenu, setShowMenu] = useState(false);
    const menuRef = useRef(null);

        const [contactPopup, setContactPopup] = useState(false);

  return (
    <header>
      {contactPopup && (
        <FormPopup
        setContactPopup={setContactPopup}
      />
      
            )}
        <div className="container">
            
            <Link href="/" className='logo'>
               <Image src={Logo} alt="logo" />
            </Link>

            <nav ref={menuRef}>
                <ul>
                    <li>
                        <a href="#about">
                            About Us
                        </a>
                    </li>
                     <li>
                        <a href="#services">
                            Services
                        </a>
                    </li>
                     {/* <li>
                        <Link href="/">
                            Our Works
                        </Link>
                    </li>
                     <li>
                        <Link href="/">
                           Blogs
                        </Link>
                    </li>
                     <li>
                        <Link href="/">
                            Case Study
                        </Link>
                    </li>
                     <li>
                        <Link href="/">
                            Contact Us
                        </Link>
                    </li> */}
                </ul>
            </nav>

            



                         <button className='common_btn' data-aos="fade-up" data-aos-delay="500" onClick={()=>setContactPopup(true)}>
                                   <span>
                       <Image src={CallIcon} alt="call icon" /> <p>Get In Touch</p>
                       </span>
                                   </button>



                        <button className='menu_btn' onClick={() => {
                            setShowMenu(!showMenu);
                            menuRef.current.classList.toggle("active");
                        }}>
                            {showMenu? <Image src={closeIcon} alt="close icon" width={24} /> : <Image src={menuIcon} alt="menu icon" width={32} />}
                        </button>

        </div>
    </header>
  )
}

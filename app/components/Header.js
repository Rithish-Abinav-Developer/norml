"use client";
import React, { useRef, useState } from 'react'
import Logo from "@/app/src/logo.svg"
import Link from 'next/link'
import Image from 'next/image'
import CallIcon from "@/app/src/call.svg"
import closeIcon from "@/app/src/close.svg"
import menuIcon from "@/app/src/menu.svg"


export default function Header() {

    const [showMenu, setShowMenu] = useState(false);
    const menuRef = useRef(null);

  return (
    <header>
        <div className="container">
            
            <Link href="/" className='logo'>
               <Image src={Logo} alt="logo" />
            </Link>

            <nav ref={menuRef}>
                <ul>
                    <li>
                        <Link href="/">
                            About Us
                        </Link>
                    </li>
                     <li>
                        <Link href="/">
                            Services
                        </Link>
                    </li>
                     <li>
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
                    </li>
                </ul>
            </nav>

             <Link href="/" className='common_btn'>
             <span>
                       <Image src={CallIcon} alt="call icon" /> <p>Get In Touch</p>
                       </span>
                        </Link>

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

import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import style from "./Header.module.css"

export default function Header() {
  return (
   <header>


<div className={`container ${style.container}`}>

<Link href="/">
<Image src='/images/logo.svg' width={147} height={51} alt='logo'/>
</Link>

<nav className={style.nav}>
    <ul>
        <Link className={`link`} href="#">About Us</Link>
        <Link className={`link`} href="#">Services</Link>
        <Link className={`link`} href="#">Blogs</Link>
        <Link className={`link`} href="#">Contact</Link>
    </ul>
</nav>

<Link className={`link`} href="#">Enquire Now</Link>

</div>

   </header>
  )
}

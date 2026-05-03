"use client"
import React from 'react'
import styles from './Footer.module.css'
import Link from 'next/link'
import Image from 'next/image'
import AnimatedText from './AnimatedText'
import { useRouter } from "next/navigation";


export default function Footer() {

const router = useRouter();


  return (
   <footer className='common_section' id={styles.footer}>
    <div className='container'>

<div className={styles.footerRow1}>

    <div className={styles.footerText}>
<h2 className="common_heading">We enjoy working with people who care about what they build.<br></br>
If that sounds like you,</h2>
<AnimatedText
  tag="h2"
  onClick={() => router.push("/contact-us")}
  className={`common_heading ${styles.contact_link}`}
  text="Let's start a conversation."
/></div>

<div className={styles.footerLinks}>

   <div>
    <ul>
        <li> <Link href="/">Home</Link> </li>
        <li> <Link href="/about">About us</Link> </li>
        <li> <Link href="/services">Services</Link> </li>
        <li> <Link href="/blog">Blogs</Link> </li>
        <li> <Link href="/contact-us">Contact us</Link> </li>

    </ul>
   </div>

      <div>
    <ul>
        <li> <Link href="/">Facebook</Link> </li>
        <li> <Link href="/">Linkedin</Link> </li>
        <li> <Link href="/">Youtube</Link> </li>
        <li> <Link href="/">Instagram</Link> </li>

    </ul>
   </div>

</div>

</div>

<div className={styles.footerRow2}>
    <div className={styles.footer_logo}>
       <Link href="/">
<Image src='/images/logo.svg' width={147} height={51} alt='logo'/>
</Link>
    </div>


<div className={styles.info}>
    <ul>
        <li> <a href='mailto:support@norml.com'>support@norml.com</a> </li>
        <li> <a href='tel:18002011019'>1-800-201-1019</a> </li>
        <li> <a href='#'>privacy policy</a> </li>
        <li> <a href='#'>terms and conditions</a> </li>
    </ul>
</div>


</div>

    </div>
   </footer>
  )
}

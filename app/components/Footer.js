import React from 'react'
import styles from './Footer.module.css'
import Link from 'next/link'
import Image from 'next/image'
import AnimatedText from './AnimatedText'

export default function Footer() {
  return (
   <footer className='common_section' id={styles.footer}>
    <div className='container'>

<div className={styles.footerRow1}>

    <div className={styles.footerText}>
<h2 className="common_heading">We enjoy working with people who care about what they build.<br></br>
If that sounds like you,</h2>
<AnimatedText tag="h2" className="common_heading" text="let's start a conversation." />
</div>

<div className={styles.footerLinks}>

   <div>
    <ul>
        <li> <Link href="/">Home</Link> </li>
        <li> <Link href="/">About us</Link> </li>
        <li> <Link href="/">Services</Link> </li>
        <li> <Link href="/">Our work</Link> </li>
        <li> <Link href="/">Contact us</Link> </li>

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

     <AnimatedText tag="div" className={styles.footer_bottom_links} text="Privacy policy | Terms and conditions" />

    <div className={styles.footer_contact}>
        <div className={styles.address}>
            <AnimatedText tag="span" text="Address" />
            <p>20619 Torrence Chapel Rd<br/>
Suite 116 #1040,Cornelius, NC 28031</p>
        </div>

         <div className={styles.phone}>
            <AnimatedText tag="span" text="Phone Number" />
            <AnimatedText tag="p" text="1-800-201-1019" />
        </div>

         <div className={styles.email}>
            <AnimatedText tag="span" text="Email Address" />
            <AnimatedText tag="p" text="support@norml.com" />
        </div>
    </div>

</div>

    </div>
   </footer>
  )
}

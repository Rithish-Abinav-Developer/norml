import React from 'react'
import logo from '@/app/src/footer_logo.svg'
import Image from 'next/image'
import Link from 'next/link'

export default function Footer() {
  return (
   <footer>
    <div className='container'>
    <div className='footer_1' data-aos='fade-up'>
        <Image src={logo} alt='logo' />

        <div className='address'>
            <h3>Address</h3>
            <p>Olympia Cyberspace 21/22,<br/>Alandur Road, Reddy 2nd St,<br/>Arulayiammanpet, Guindy,<br/>Chennai, Tamil Nadu 600032</p>
        </div>

           <div className='phone_email'>
            <div>
            <h3>Phone Number</h3>
           <a href='tel:9003076837'>9003076837</a>
           </div>
           <div>
           <h3>Email</h3>
           <a href='mailhref:info@norml.com'>info@norml.com</a>
           </div>
        </div>
        

    </div>

<div className='footer_links' data-aos='fade-up' data-aos-delay='300'>
  <h3>Quick Links</h3>
  <ul>
    <li> <Link href='/'>Home</Link> </li>
    <li> <Link href='/'>About Us</Link> </li>
    <li> <Link href='/'>Our Works</Link> </li>
    <li> <Link href='/'>Blog</Link> </li>
    <li> <Link href='/'>Case Study</Link> </li>
    <li> <Link href='/'>Contact Us</Link> </li>

  </ul>
</div>

<div className='footer_links' data-aos='fade-up' data-aos-delay='600'>
  <h3>Services</h3>
  <ul>
    <li> <Link href='/'>Branding</Link> </li>
    <li> <Link href='/'>Podcasting</Link> </li>
    <li> <Link href='/'>UI/UX Design</Link> </li>
    <li> <Link href='/'>Video Production</Link> </li>
    <li> <Link href='/'>Social Media Management </Link> </li>

  </ul>
</div>

<div className='footer_links' data-aos='fade-up' data-aos-delay='900'>
  <h3>Legal</h3>
  <ul>
    <li> <Link href='/'>Terms of service</Link> </li>
    <li> <Link href='/'>Privacy policy</Link> </li>
    <li> <Link href='/'>Cookie policy</Link> </li>
  </ul>
</div>

    </div>
    <p className='copyright'>© 2024 norml. All rights reserved.</p>
   </footer>
  )
}

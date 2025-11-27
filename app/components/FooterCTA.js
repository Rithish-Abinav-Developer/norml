import Link from 'next/link'
import React, { useState } from 'react'
import RightArrow from '@/app/src/arrow-right.svg'
import Image from 'next/image'
import FormPopup from './FormPopup';


export default function FooterCta() {

    const [contactPopup, setContactPopup] = useState(false);
  

  return (
    <div className='footer_cta'>
        <div className='container'>
            <div className='content'>
                <h2 className='common_heading heading'>Let’s <span>connect with us</span></h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                 <Link href="/" className='common_btn' data-aos="fade-up" data-aos-delay="500" onClick={()=>setContactPopup(true)}>
          <span>Know More <Image src={RightArrow} alt="button icon" /> </span>
           </Link>
            </div>
        </div>
  {contactPopup && (
  <FormPopup
  setContactPopup={setContactPopup}
/>

      )}
    </div>
  )
}

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
                <p>Have a project in mind or need expert support for your business? Our team is ready to help you with strategic solutions tailored to your goals. Get in touch with us today to discuss your requirements and explore how we can work together to achieve measurable results.</p>
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

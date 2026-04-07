"use client"
import React, { useEffect, useState } from 'react'
import style from "./contact.module.css"
import Header from '../components/Header'
import AnimatedText from '../components/AnimatedText'
import Image from 'next/image'
import Link from 'next/link'
import AnimatedBtn from '../components/AnimatedBtn'

export default function page() {

      const [mobile,setMobile] = useState(false);
    
      useEffect(() => {
        setMobile(window.innerWidth <= 768);
        window.addEventListener('resize', () => {
          setMobile(window.innerWidth <= 768);
        });
        return () => window.removeEventListener('resize', () => {
          setMobile(window.innerWidth <= 768);
        });
      }, []);

  return (
    <>
   <section className={`common_section ${style.hero_section}`}>
  <div className={`container ${style.hero_container}`}>

    <p className={`small_text ${style.small_text}`}>NORML <br className='desktop_break'/>CONTACT /17-21</p>

    <div className={style.hero_title}>
      <AnimatedText tag="h1" text="give us a nudge" />
    </div>

    <div className={style.heroContent}>
      <AnimatedText 
        tag="p" 
        text="We’d love to hear what you’re working on and figure out where we fit in. Get in touch with us to discuss your project, request a quote or even just to pick our brains. We’re always open to making new connections"
        delay={150}
      />
    </div>

  </div>
</section>


<section className={`common_section ${style.contact_section}`}>
  <div className={`container ${style.contact_container}`}>

    <div className={style.top}>
      <AnimatedText tag="p" text="We don’t bite." />
      {!mobile && <AnimatedText tag="p" text="/Info" delay={100} />}
    </div>

    <div className={style.contact_image}>
      <Image 
        src="/images/contact_image.png" 
        alt="contact us" 
        width={620} 
        height={552} 
      />
    </div>

    <div className={style.contact_content}>

      {mobile && <AnimatedText tag="p" text="/Info" />}

      <div className={`${style.contact_content_item} ${style.address}`}>
        <AnimatedText tag="h3" text="Address" />
        <AnimatedText 
          tag="p" 
          text={`20619 Torrence Chapel Rd\nSuite 116 #1040, Cornelius, NC 28031`} 
          delay={100}
        />
      </div>

      <div className={`${style.contact_content_item} ${style.getDirection}`}>
        <AnimatedBtn delay={150}>
          <a className="common_btn" href="#">
            Get direction  
            <Image src="/images/btn_arrow.svg" width={24} height={24} alt="" />
          </a>
        </AnimatedBtn>
      </div>

      <div className={style.col}>
        <div className={`${style.contact_content_item} ${style.phone}`}>
          <AnimatedText tag="h3" text="Phone Number" />
          <AnimatedBtn delay={200}>
            <a href="tel:18002011019">1-800-201-1019</a>
          </AnimatedBtn>
        </div>

        <div className={`${style.contact_content_item} ${style.mail}`}>
          <AnimatedText tag="h3" text="Email Address" />
          <AnimatedBtn delay={250}>
            <a href="mailto:support@norml.com">support@norml.com</a>
          </AnimatedBtn>
        </div>
      </div>

      <div className={style.col}>
        <div className={`${style.contact_content_item} ${style.social}`}>
          <AnimatedText tag="h3" text="Social" />

          {["Facebook", "LinkedIn", "Instagram", "Twitter"].map((item, idx) => (
            <AnimatedBtn key={idx} delay={300 + idx * 100}>
              <a href="#">{item}</a>
            </AnimatedBtn>
          ))}

        </div>
      </div>

    </div>

  </div>
</section>
    
    </>
  )
}

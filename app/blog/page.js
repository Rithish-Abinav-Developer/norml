"use client"
import React, { useEffect, useState } from 'react'
import style from "./blog.module.css"
import Header from '../components/Header'
import AnimatedText from '../components/AnimatedText'
import Image from 'next/image'
import Link from 'next/link'
import AnimatedBtn from '../components/AnimatedBtn'
import NewsData from '../data/NewsData';

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

    <p className={`small_text ${style.small_text}`}>NORML <br className='desktop_break'/>/BLOGS</p>

    <div className={style.hero_title}>
      <AnimatedText tag="h1" text="our stories" />
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


<section className={`common_section ${style.news_section}`}>
<div className={`container ${style.news_container}`}>


  <div className={style.news_cards}>
    {NewsData.map((item, i) => (
      <div key={i} className={style.card}>

<div className={style.card_image}>
        <Image src={item.image} width={490} height={350} alt='' />
</div>
<div className={style.card_content}>
   <AnimatedText tag="h3" className="" text={item.title} />
   <div>
       <AnimatedBtn delay={150}>
                  <Link className='common_btn' href={item.slug}>Read More <Image src="/images/btn_arrow.svg" width={24} height={24} alt='' /></Link>
                </AnimatedBtn>
        <AnimatedText tag="p" className={`small_text ${style.post_date}`} text={item.date} />

   </div>
</div>

      </div>
    ))}
  </div>

</div>
</section>

    
    </>
  )
}

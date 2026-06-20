"use client"
import React, { useState } from 'react'
import style from './service.module.css'
import AnimatedText from '../components/AnimatedText'
import Image from 'next/image'
import Link from 'next/link'
import AnimatedBtn from '../components/AnimatedBtn'
import ServicesData from '../data/ServicesData'
import Popup from '../components/Popup'


export default function page() {

   const [popupOpen, setPopupOpen] = useState(false); 

    const [activeTab, setActiveTab] = useState("services");
     const allProjects = ServicesData.flatMap(service => service.servicesList);

  return (
    <>

  <Popup popupOpen={popupOpen} setPopupOpen={setPopupOpen} />

     <section className={style.hero_section}>
        <a className={style.arrow} href='#'> <Image src="/images/service_arrow.svg" alt="arrow" width={121} height={121} /> </a>
         <div className={`container ${style.hero_container}`}>
            <div className={style.hero_title}>
           <>
  <AnimatedText tag="h1" text="we only make digital products and services" />
</>
            </div>
            <div className={style.heroContent}>
                  <div className={style.col1}>
                 <p className='small_text'>ABOUT
<br/>NORML/{allProjects.length}</p>
</div>

<AnimatedText 
  tag="p" 
  text="You won’t find any beasts of burden at Norml. What you WILL find is a wild and unstoppable force dedicated to strategic thinking, great design and technical finesse."
/>


            </div>
         </div>
    </section>


  <section className={style.serviceSection} >
      <div className={`container ${style.serviceContainer}`}>

        {/* Tabs */}
        <div className={style.seviceTabSection}>
          <button
            className={activeTab === "services" ? style.activeTab : ""}
            onClick={() => setActiveTab("services")}
          >
             <AnimatedText tag="span" text="services" />
          </button>


<button
  className={activeTab === "projects" ? style.activeTab : ""}
  onClick={() => setActiveTab("projects")}
>
  <AnimatedText tag="span" text="all projects" />
</button>

          {/* ✅ dynamic count */}

 <AnimatedText tag="span" text={`/${activeTab === "services" ? ServicesData.length : allProjects.length}`} />

        </div>

        {/* SERVICES */}
        {activeTab === "services" && (
          <div className={style.servicesLists}>
            {ServicesData.map((service, i) => (
              <div key={i} className={style.serviceColumn}>

                <div className={style.overview}>
                  <AnimatedText tag="h2" text={service.service} />
                  <AnimatedText tag="p" text={service.content} />

                  {/* <AnimatedBtn delay={0}>
                    <Link className='common_btn' href="#">
                      Explore More
                      <Image src="/images/btn_arrow.svg" width={24} height={24} alt='' />
                    </Link>
                  </AnimatedBtn> */}
                </div>

                <div className={style.cards}>
                  {service.servicesList
                    .slice(-2) // ✅ only latest 2
                    .map((item, idx) => (
                      <div key={idx} className={style.card}>
                        <Image src={item.image} width={360} height={360} alt='' />

                        {/* <AnimatedBtn delay={150 + idx * 100}>
                          <Link className='common_btn' href={item.slug}>
                            Explore More
                          </Link>
                        </AnimatedBtn> */}

                        <AnimatedBtn delay={150 + idx * 100}>
                  <button className='common_btn' onClick={() => setPopupOpen(true)}>
                    Enquire Now
                  </button>
                </AnimatedBtn>

                      </div>
                    ))}
                </div>

              </div>
            ))}
          </div>
        )}

        {/* ALL PROJECTS */}
        {activeTab === "projects" && (
          <div className={style.allProjects}>
            {allProjects.map((item, i) => (
              <div key={i} className={style.card}>
                <Image src={item.image} width={360} height={360} alt='' />

                <AnimatedText tag="h2" text={item.title} />

                <AnimatedBtn delay={0}>
                  <button className='common_btn' onClick={() => setPopupOpen(true)}>
                    Enquire Now
                    <Image src="/images/btn_arrow.svg" width={24} height={24} alt='' />
                  </button>
                </AnimatedBtn>
              </div>
            ))}
          </div>
        )}

      </div>
    </section>
    
    </>
  )
}

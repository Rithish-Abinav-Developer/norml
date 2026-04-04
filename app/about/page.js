import React from 'react'
import style from './about.module.css'
import Image from 'next/image'
import AnimatedText from '../components/AnimatedText'

export default function page() {
  return (
    <>
    
    <section className={style.hero_section}>
         <div className={`container ${style.hero_container}`}>
            <div className={style.hero_title}>
           <>
  <AnimatedText tag="h1" text="people. culture." />
  <br className="desktop_break" />
  <AnimatedText tag="h1" text="results." />
</>
            </div>
            <div className={style.heroImage}>
                <Image src="/images/about_hero.png" alt="" height={755} width={1530} />
            </div>
         </div>
    </section>


    <section className={`common_section ${style.about_section}`}>
        <div className={`container ${style.about_container}`}>

           <div className={style.col1}>
                 <p className='small_text'>ABOUT
<br className='desktop_break'/> NORML/21</p>
</div>

<div className={style.contentArea}>
    <AnimatedText tag="h2" className="common_heading xl" text="Are you looking for a meek, mediocre and rigidly repetitive marketing agency? Well keep looking" />
<AnimatedText 
  tag="p" 
  text="You won't find tired strategies at NORML. What you WILL find is a team that gets excited about your goals as much as you do, blending sharp strategy, honest creativity and real digital know-how to get you where you want to be. We've been in the game long enough to know what works, and bold enough to try what doesn't exist yet - building real relationships, solving real problems and creating work that actually means something."
/>

<div className={style.sideContent}>
  <AnimatedText 
    tag="p" 
    text="We hate playing it safe while the world moves fast around us. We are passionate about creativity and digital thinking and we specialise in crafting powerful campaigns intelligently, strategically and profitably, on-brand, every time. Our goal is to bring fresh thinking to every project and treat each client as a partner worth fighting for. We've been trusted by some of the most driven businesses in the market, working with both local and international brands and our work has consistently delivered results that speak for themselves."
  />

  <ul>
  <li><AnimatedText tag="span" text="1. Branding" delay={0} /></li>
  <li><AnimatedText tag="span" text="2. Podcast" delay={75} /></li>
  <li><AnimatedText tag="span" text="3. SEO/GEO" delay={150} /></li>
  <li><AnimatedText tag="span" text="4. UI/UX" delay={225} /></li>
  <li><AnimatedText tag="span" text="5. Graphics design" delay={300} /></li>
  <li><AnimatedText tag="span" text="6. Video production" delay={375} /></li>
  <li><AnimatedText tag="span" text="7. Performance marketing" delay={450} /></li>
  <li><AnimatedText tag="span" text="8. Photoshoot" delay={525} /></li>
  <li><AnimatedText tag="span" text="9. Personal branding" delay={600} /></li>
  <li><AnimatedText tag="span" text="10. Social media management" delay={675} /></li>
  <li><AnimatedText tag="span" text="11. Content writing" delay={750} /></li>
</ul>
</div>
</div>

        </div>
    </section>




    <section className={`common_section ${style.ourTeam_section}`}>

<div className={`container ${style.ourTeam_container}`}>

   <div className={style.col1}>
                 <p className='small_text'>ABOUT
<br className='desktop_break'/> NORML/21</p>
</div>


  <div className={style.ourTeamTitle}>
        <AnimatedText tag="h2" className="common_heading" text="OUR TEAM" />
  </div>
  <div className={style.ourTeamContent}>
     <AnimatedText 
    tag="p" 
    text="One core.Many skills. A shared drive and clear focus. The people you meet and speak with are the same ones working on your brand, so there’s no gap between ideas and execution. Alongside our core team, we collaborate with trusted independent specialists bringing in the best minds across disciplines to deliver work that’s thoughtful, refined, and impactful."
  />
     <AnimatedText delay={300}
    tag="p" 
    text="Our studio has grown alongside the fast-moving digital world, with our services expanding across digital marketing, creative strategy, emerging technology, and production."
  />
  </div>


</div>

</section>
    
    </>
  )
}

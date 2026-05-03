"use client"
import React, { useEffect, useState } from 'react'
import style from "../blogDetail.module.css"

import Image from 'next/image'
import Link from 'next/link'
import AnimatedText from '@/app/components/AnimatedText'
import AnimatedBtn from '@/app/components/AnimatedBtn'
import ShareButtons from '@/app/components/ShareButtons'


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

    <div className={style.back}>
        <AnimatedBtn delay={150}>
                  <Link className='common_btn' href="/blog">Back to Blogs <Image src="/images/btn_arrow.svg" width={24} height={24} alt='' /></Link>
                </AnimatedBtn>
    </div>

    <div className={style.hero_title}>
      <AnimatedText tag="h1" text="Is Your Website Invisible to AI?" />
    <div className={style.post_info}>
  <AnimatedText tag="p" className={style.post_date} text="03.05.2026" />
  <AnimatedText tag="p" className={style.post_category} text="Blogs" />
</div>
    </div>

  </div>
</section>


<section className={style.feature_image}>
   <div className={`container`}>
  <Image src="/images/about_hero.png" width={1530} height={755} alt="scroll arrow" />
  </div>
</section>

  <section className={`common_section ${style.post_content}`}>
   <div className={`container ${style.post_content_container}`}>
<ShareButtons textClassName={style.share_text} />

<article>

  <div className={style.post_content_box}>
    <h3>What Every Small Business Owner in India Should Understand Today</h3>
    <p>You created your website, listed your services, and maybe even invested in Google Ads. After that, you shifted your focus back to running your business.</p>
    <p>But the way customers search has completely changed.</p>
    <p>Today, people are not just browsing Google and clicking links. They are asking AI tools like ChatGPT, Google AI, Perplexity, and Gemini for direct answers and those answers often include business recommendations.</p>
    <p>If your business is not appearing in those AI-generated responses, you are missing potential customers before they even reach your website.</p>
    <p>This shift is already affecting small and local businesses across India including restaurants, clinics, salons, coaching centres, and service providers.</p>
    <p>Businesses that are adapting to AI SEO, local SEO, and AI search optimization are gaining visibility, while others are gradually being left out.</p>
    <p>At Norml, we support growing businesses in strengthening their digital presence and improving how they appear in AI-driven search results helping them get discovered and recommended more often.</p>
  </div>

  <div className={style.post_content_box}>
    <h3>What Has Changed in Search?</h3>
    <p>Earlier, online search was simple. A user would type a query into Google, browse through multiple website links, and choose one.</p>
    <p>Now, search works very differently.</p>
    <p>Instead of showing only links, search engines often display a direct AI-generated answer at the top.</p>
    <p>These responses summarise information and may already recommend specific businesses. Most users rely on this answer and do not explore further.</p>
    <p>This trend goes beyond Google.</p>
    <p>People are increasingly asking AI tools questions like:</p>
    <ul>
      <li>Which is the best clinic near me?</li>
      <li>Where should I eat in Chennai?</li>
      <li>Best salon nearby?</li>
    </ul>
    <p>And AI responds with selected recommendations.</p>
    <p>If your business is not included, you lose that opportunity instantly.</p>
  </div>

  <div className={style.post_content_box}>
    <h3>Understanding AI SEO</h3>
    <p>SEO (Search Engine Optimisation) traditionally focused on helping your website rank in search engines.</p>
    <p>AI SEO is the next step: it focuses on helping AI tools recognise, trust, and recommend your business.</p>
    <p>In simple terms:</p>
    <ul>
      <li>Traditional SEO helps users find you</li>
      <li>AI SEO helps AI suggest you</li>
    </ul>
    <p>Think of it like this:</p>
    <p>Earlier, SEO placed your shop on a map.</p>
    <p>Now, AI SEO ensures a trusted guide personally recommends your shop.</p>
  </div>

  <div className={style.post_content_box}>
    <h3>What Is GEO (Generative Engine Optimisation)?</h3>
    <p>GEO is one of the most important digital strategies emerging today.</p>
    <p>AI tools like ChatGPT, Google AI, Perplexity, and Gemini don’t just list options they generate complete answers.</p>
    <p>Within those answers, they may mention specific businesses.</p>
    <p>GEO focuses on ensuring your business is included in those mentions.</p>
    <p>If AI is becoming the new form of word-of-mouth, GEO determines whether your business is part of that conversation.</p>
    <p>Research indicates that a large percentage of users trust AI recommendations making this visibility highly valuable for business growth.</p>
  </div>

  <div className={style.post_content_box}>
    <h3>What Is AEO (Answer Engine Optimisation)?</h3>
    <p>AEO is about becoming the source of information that AI tools rely on.</p>
    <p>For example:</p>
    <p>If someone searches, “How do I care for a dental crown?”, AI pulls structured, easy-to-understand content from websites to build its response.</p>
    <p>A business that clearly explains such topics:</p>
    <ul>
      <li>Gains visibility</li>
      <li>Builds credibility</li>
      <li>Attracts customers</li>
    </ul>
    <p>AEO ensures your content answers real customer questions in a way AI can easily understand and use.</p>
  </div>

  <div className={style.post_content_box}>
    <h3>Do You Need to Worry About AGI?</h3>
    <p>AGI (Artificial General Intelligence) refers to a future stage of AI that can perform any intellectual task like a human.</p>
    <p>It is still under development and not something businesses need to act on right now.</p>
    <p>What matters today is adapting to the AI tools already being used by your customers such as ChatGPT, Google AI, Perplexity, and Gemini.</p>
  </div>

  <div className={style.post_content_box}>
    <h3>Important Terms to Know</h3>
    <p>AI Overviews</p>
    <p>AI-generated summaries shown at the top of search results.</p>

    <p>LLMs (Large Language Models)</p>
    <p>The systems that process and generate AI responses.</p>

    <p>E-E-A-T</p>
    <p>Experience, Expertise, Authoritativeness, and Trustworthiness key factors used to evaluate credibility.</p>
  </div>

  <div className={style.post_content_box}>
    <h3>Which Businesses Are Seeing the Biggest Impact?</h3>
    <p>Almost every business is affected, but some industries are experiencing faster changes:</p>
    <ul>
      <li>Restaurants and cafés</li>
      <li>Clinics and healthcare providers</li>
      <li>Salons and wellness services</li>
      <li>Home service providers</li>
      <li>Coaching and training centres</li>
    </ul>
    <p>Customers are now consulting AI tools before making decisions whether it’s dining, booking, or hiring a service.</p>
  </div>

  <div className={style.post_content_box}>
    <h3>How AI Chooses Which Businesses to Recommend</h3>
    <p>AI tools rely on trust signals to decide which businesses to include in their responses.</p>
    <p>Key factors include:</p>
    <ul>
      <li>Presence across multiple platforms and directories</li>
      <li>Quality and quantity of customer reviews</li>
      <li>Clear, helpful website content</li>
      <li>Updated and relevant information</li>
      <li>Consistent business details across the internet</li>
      <li>Mentions on credible external sources</li>
    </ul>
    <p>The key takeaway: visibility is built through consistency and credibility, not just budget.</p>
  </div>

  <div className={style.post_content_box}>
    <h3>Practical Steps to Make Your Website AI-Friendly</h3>
    <ul>
      <li>Clearly explain your business</li>
      <li>Add a FAQ section</li>
      <li>Encourage customer reviews</li>
      <li>Maintain consistent business details</li>
      <li>Increase your online presence</li>
    </ul>
  </div>

  <div className={style.post_content_box}>
    <h3>Common Gaps (and How to Fix Them)</h3>
    <p>Minimal written content</p>
    <p>AI relies on text. Add meaningful content to key pages.</p>

    <p>Lack of reviews</p>
    <p>Satisfied customers often need to be asked.</p>

    <p>Delaying action</p>
    <p>Starting early gives you a clear advantage over competitors.</p>
  </div>

  <div className={style.post_content_box}>
    <h3>Can You Handle This on Your Own?</h3>
    <p>Yes, many businesses successfully implement these steps independently.</p>
    <p>Most of the work involves:</p>
    <ul>
      <li>Writing clearly</li>
      <li>Staying consistent</li>
      <li>Updating regularly</li>
    </ul>
    <p>It does not always require advanced technical skills.</p>
    <p>However, maintaining momentum and knowing what to prioritise can be challenging alongside running a business.</p>
  </div>

  <div className={style.post_content_box}>
    <h3>When Should You Consider Expert Support?</h3>
    <p>If you want to:</p>
    <ul>
      <li>Save time</li>
      <li>Improve results faster</li>
      <li>Build a structured strategy</li>
      <li>Compete effectively in your local market</li>
    </ul>
    <p>Then working with professionals can help accelerate your progress.</p>
    <p>At Norml, we assist businesses in improving their AI search visibility through:</p>
    <ul>
      <li>AI SEO and GEO strategies</li>
      <li>Local SEO optimisation</li>
      <li>Content designed for AI understanding</li>
      <li>Building strong trust signals</li>
    </ul>
    <p>Whether you choose to implement it yourself or seek guidance, the important step is to start.</p>
  </div>

  <div className={style.post_content_box}>
    <h3>Final Thoughts</h3>
    <p>AI is already shaping how customers discover businesses.</p>
    <p>This shift is not coming it is already here.</p>
    <p>Businesses that adapt early will:</p>
    <ul>
      <li>Gain visibility</li>
      <li>Build trust</li>
      <li>Attract more customers</li>
    </ul>
    <p>Those who delay risk becoming less visible over time.</p>
  </div>

  <div className={style.post_content_box}>
    <h3>Need Help Getting Started?</h3>
    <p>If you’re looking to improve your visibility in AI search or want guidance on where to begin, you can reach out to Norml.</p>
    <p>We’re happy to support you whether you need a complete strategy or just help taking the first step.</p>
  </div>

</article>

  </div>
</section>

    
    </>
  )
}

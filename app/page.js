"use client"
import React, { useEffect, useRef, useState } from 'react'
import style from './page.module.css'
import Image from 'next/image'
import Link from 'next/link';
import AnimatedText from './components/AnimatedText';
import AnimatedBtn from './components/AnimatedBtn';
import WhatWeDoData from './data/WhatWeDo';
import NewsData from './data/NewsData';

export default function Page() {

  // — Reels refs
  const reelsRef = useRef(null);
  const buttonRef = useRef(null);
  const videoRef = useRef(null);
  const mouse = useRef({ x: 0, y: 0 });
  const current = useRef({ x: 0, y: 0 });
  const rafRef = useRef(null);
  const isInside = useRef(false);
  const reelsIsHovering = useRef(false);
  const reelsHasMouseMoved = useRef(false);
  const reelsLastX = useRef(0);
  const reelsLastY = useRef(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const hasPlayed = useRef(false);

  // — Clients refs
  const sectionRef = useRef(null);
  const dragButtonRef = useRef(null);
  const row1Ref = useRef(null);
  const row2Ref = useRef(null);
  const clientMouse = useRef({ x: 0, y: 0 });
  const clientCurrent = useRef({ x: 0, y: 0 });
  const clientRafRef = useRef(null);
  const clientIsInside = useRef(false);
  const clientIsHovering = useRef(false);
  const clientHasMouseMoved = useRef(false);
  const clientLastX = useRef(0);
  const clientLastY = useRef(0);
  const isDragging = useRef(false);
  const dragStartX = useRef(0);
  const row1Offset = useRef(0);
  const row2Offset = useRef(0);
  const [btnText, setBtnText] = useState('Drag');
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

  // — Reels RAF
  useEffect(() => {
    if (reelsRef.current) {
      const cx = reelsRef.current.offsetWidth / 2;
      const cy = reelsRef.current.offsetHeight / 2;
      mouse.current = { x: cx, y: cy };
      current.current = { x: cx, y: cy };
    }

    const lerp = (start, end, factor) => start + (end - start) * factor;

    const animate = () => {
      if (reelsIsHovering.current && reelsHasMouseMoved.current && buttonRef.current) {
        const factor = isInside.current ? 0.08 : 0.06;
        current.current.x = lerp(current.current.x, mouse.current.x, factor);
        current.current.y = lerp(current.current.y, mouse.current.y, factor);
        buttonRef.current.style.left = `${current.current.x}px`;
        buttonRef.current.style.top = `${current.current.y}px`;
      }
      rafRef.current = requestAnimationFrame(animate);
    };

    rafRef.current = requestAnimationFrame(animate);

    if (videoRef.current) {
      videoRef.current.play().catch(() => {});
    }

    return () => cancelAnimationFrame(rafRef.current);

  }, []);

  // — Clients RAF
  useEffect(() => {
    if (sectionRef.current) {
      const cx = sectionRef.current.offsetWidth / 2;
      const cy = sectionRef.current.offsetHeight / 2;
      clientMouse.current = { x: cx, y: cy };
      clientCurrent.current = { x: cx, y: cy };
    }

    const lerp = (start, end, factor) => start + (end - start) * factor;

    const animate = () => {
      if (clientIsHovering.current && clientHasMouseMoved.current && dragButtonRef.current) {
        const factor = clientIsInside.current ? 0.08 : 0.06;
        clientCurrent.current.x = lerp(clientCurrent.current.x, clientMouse.current.x, factor);
        clientCurrent.current.y = lerp(clientCurrent.current.y, clientMouse.current.y, factor);
        dragButtonRef.current.style.left = `${clientCurrent.current.x}px`;
        dragButtonRef.current.style.top = `${clientCurrent.current.y}px`;
      }
      clientRafRef.current = requestAnimationFrame(animate);
    };

    clientRafRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(clientRafRef.current);
  }, []);

  // — Reels handlers
  const handleMouseMove = (e) => {
    if (!reelsIsHovering.current) return;
    const deltaX = Math.abs(e.clientX - reelsLastX.current);
    const deltaY = Math.abs(e.clientY - reelsLastY.current);
    reelsLastX.current = e.clientX;
    reelsLastY.current = e.clientY;
    if (deltaX > 2 || deltaY > 2) {
      reelsHasMouseMoved.current = true;
    }
    if (!reelsHasMouseMoved.current) return;
    const rect = reelsRef.current.getBoundingClientRect();
    mouse.current.x = e.clientX - rect.left;
    mouse.current.y = e.clientY - rect.top;
    buttonRef.current.style.opacity = '1';
    buttonRef.current.style.transform = 'translate(-50%, -50%) scale(1)';
    reelsRef.current.style.cursor = 'none';
  };

  const handleMouseEnter = (e) => {
    reelsIsHovering.current = true;
    reelsHasMouseMoved.current = false;
    isInside.current = true;
    const rect = reelsRef.current.getBoundingClientRect();
    current.current.x = e.clientX - rect.left;
    current.current.y = e.clientY - rect.top;
    mouse.current.x = current.current.x;
    mouse.current.y = current.current.y;
  };

  const handleMouseLeave = () => {
    reelsIsHovering.current = false;
    reelsHasMouseMoved.current = false;
    isInside.current = false;
    mouse.current.x = reelsRef.current.offsetWidth / 2;
    mouse.current.y = reelsRef.current.offsetHeight / 2;
    buttonRef.current.style.opacity = '0';
    buttonRef.current.style.transform = 'translate(-50%, -50%) scale(0.8)';
    reelsRef.current.style.cursor = 'default';
  };

  const handleVideoToggle = () => {
    const video = videoRef.current;
    if (!video) return;
    if (isPlaying) {
      video.pause();
      setIsPlaying(false);
    } else {
      video.play();
      setIsPlaying(true);
      hasPlayed.current = true;
    }
  };

  // — Clients handlers
  const handleClientMouseMove = (e) => {
    if (!clientIsHovering.current) return;
    const deltaX = Math.abs(e.clientX - clientLastX.current);
    const deltaY = Math.abs(e.clientY - clientLastY.current);
    clientLastX.current = e.clientX;
    clientLastY.current = e.clientY;
    if (deltaX > 2 || deltaY > 2) {
      clientHasMouseMoved.current = true;
    }
    if (!clientHasMouseMoved.current && !isDragging.current) return;
    const rect = sectionRef.current.getBoundingClientRect();
    clientMouse.current.x = e.clientX - rect.left;
    clientMouse.current.y = e.clientY - rect.top;
    dragButtonRef.current.style.opacity = '1';
    dragButtonRef.current.style.transform = 'translate(-50%, -50%) scale(1)';
    sectionRef.current.style.cursor = 'none';

    if (isDragging.current) {
      const delta = e.clientX - dragStartX.current;
      dragStartX.current = e.clientX;

      // Max scroll distance — content width minus container width
      const row1 = row1Ref.current;
      const maxOffset = row1.scrollWidth - row1.parentElement.offsetWidth;

      // Clamp row1 — drag right stops at 0, drag left stops at -maxOffset
      row1Offset.current = Math.min(0, Math.max(-maxOffset, row1Offset.current + delta));

      // Clamp row2 — opposite direction
      row2Offset.current = Math.max(0, Math.min(maxOffset, row2Offset.current - delta));

      row1Ref.current.style.transform = `translateX(${row1Offset.current}px)`;
      row2Ref.current.style.transform = `translateX(${row2Offset.current}px)`;
    }
  };

  const handleClientMouseEnter = (e) => {
    clientIsHovering.current = true;
    clientHasMouseMoved.current = false;
    clientIsInside.current = true;
    const rect = sectionRef.current.getBoundingClientRect();
    clientCurrent.current.x = e.clientX - rect.left;
    clientCurrent.current.y = e.clientY - rect.top;
    clientMouse.current.x = clientCurrent.current.x;
    clientMouse.current.y = clientCurrent.current.y;
  };

  const handleClientMouseLeave = () => {
    clientIsHovering.current = false;
    clientHasMouseMoved.current = false;
    clientIsInside.current = false;
    isDragging.current = false;
    setBtnText('Drag');
    clientMouse.current.x = sectionRef.current.offsetWidth / 2;
    clientMouse.current.y = sectionRef.current.offsetHeight / 2;
    dragButtonRef.current.style.opacity = '0';
    dragButtonRef.current.style.transform = 'translate(-50%, -50%) scale(0.8)';
    sectionRef.current.style.cursor = 'default';
  };

  const handleMouseDown = (e) => {
    isDragging.current = true;
    dragStartX.current = e.clientX;
    setBtnText('Dragging');
  };

  const handleMouseUp = () => {
    isDragging.current = false;
    setBtnText('Drag');
  };

  const logos = Array(10).fill(null);

  return (
    <>
      <section className={style.hero_section}>
        <div className={`container ${style.hero_container}`}>
          <div className={style.norml_text}>
            <span>n</span>
            <span>o</span>
            <span>r</span>
            <span>m</span>
            <span>l</span>
            <span>.</span>
            </div>
          <AnimatedText tag="p" delay={850}
            text="In an industry full of 'noise' and 'hype' we're just norml. Built on clarity, guided by intent, and focused on work that delivers lasting value."
          />
        </div>
      </section>

      <section className={style.scroll_arrow}>
        <Image src="/images/scroll_arrow.svg" width={45} height={45} alt="scroll arrow" />
      </section>

      <section className={`common_section`}>
        <div className='container'>
          <div
            className={style.reels_video}
            ref={reelsRef}
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onClick={handleVideoToggle}
          >
            <video ref={videoRef} playsInline autoPlay muted>
              <source src='/images/reels_video.mp4' />
            </video>
            <button
              ref={buttonRef}
              onClick={(e) => {
                e.stopPropagation();
                handleVideoToggle();
              }}
            >
              <Image
                src={isPlaying ? "/images/pause.svg" : "/images/play.svg"}
                width={24}
                height={24}
                alt=''
              />
              {isPlaying ? 'Pause' : hasPlayed.current ? 'Continue' : 'Our Reels'}
            </button>
          </div>

          <div className={style.reels_content_area}>
            <div className={style.content}>
              <AnimatedText
                tag="h2"
                text="Building digital presence that work"
                className="common_heading xl"
              />
              <AnimatedText tag="div"
                text="Website / e-commerce / photoshoot / more n more…"
              />
              <AnimatedText
                text="We help brands connect better with people through thoughtful digital experiences, blending strategy, design, and technology to support steady, meaningful growth."
              />
              <div className={style.buttons}>
                <AnimatedBtn delay={0}>
                  <Link className='common_btn' href="#">About Us <Image src="/images/btn_arrow.svg" width={24} height={24} alt='' /></Link>
                </AnimatedBtn>
                <AnimatedBtn delay={150}>
                  <Link className='common_btn' href="#">What we do <Image src="/images/btn_arrow.svg" width={24} height={24} alt='' /></Link>
                </AnimatedBtn>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={`common_section ${style.growing_section}`}>
        <div className={`container ${style.growing_container}`}>
          <AnimatedText tag="h2" className="common_heading" text="People growing with us" />
          <AnimatedText tag="p" className="small_text" text="Lorem ipsum dolor sit amet" />
        </div>

        <div
          className={style.clients_section}
          ref={sectionRef}
          onMouseMove={handleClientMouseMove}
          onMouseEnter={handleClientMouseEnter}
          onMouseLeave={handleClientMouseLeave}
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
        >
          <div className={style.clients} ref={row1Ref}>
            {logos.map((_, i) => (
              <div key={i}>
                <Image src="/images/client_logo.svg" width={230} height={50} alt={`client ${i + 1}`} draggable={false} />
              </div>
            ))}
          </div>

          <div className={style.clients} ref={row2Ref}>
            {logos.map((_, i) => (
              <div key={i}>
                <Image src="/images/client_logo.svg" width={230} height={50} alt={`client ${i + 1}`} draggable={false} />
              </div>
            ))}
          </div>

          <button ref={dragButtonRef}>
            {btnText}
          </button>
        </div>
      </section>


<section className={`common_section ${style.whatDo_section}`}>

<div className={`container ${style.whatDo_section_container}`}>

<div className={style.topSection}>

  <div className={style.row}>
     {mobile && 
  <div className={style.col1}>
               <p className='small_text'>FEATURED<br className='desktop_break'/>WORKS</p>

  </div>
  }
  <div className={style.col1}>
      <AnimatedText tag="h2" className="common_heading" text="What We Do" />
  </div>
   <div className={style.col2}>
          <AnimatedText tag="p" text="A selection of recent work reflecting our thinking, execution, and dedication to building effective digital solutions for brands" />
  </div>
   <div className={style.col3}>
     <h3>17-26<sup>©</sup></h3>
  </div>
  </div>

   <div className={style.row}>
 {!mobile && 
  <div className={style.col1}>
               <p className='small_text'>FEATURED<br className='desktop_break'/>WORKS</p>

  </div>
  }
   <div className={style.col2}>
 <AnimatedBtn delay={150}>
                  <Link className='common_btn' href="#">What we do <Image src="/images/btn_arrow.svg" width={24} height={24} alt='' /></Link>
                </AnimatedBtn>
                  </div>

  </div>

</div>


<div className={style.whatDo_cards}>

  {WhatWeDoData.map((item, i) => (
    <div key={i} className={style.card}>
      <div className={style.card_image}>
      <Image src={item.image} width={360} height={438} alt='' />
      </div>
      <AnimatedText tag="h3" className="common_heading" text={item.title} />
      <AnimatedText tag="p" className="small_text" text={item.description} />
      <AnimatedText tag="p" className={`small_text ${style.tag}`} text={item.tag} />
    </div>
  ))}

</div>

</div>

</section>

<section className={`common_section ${style.news_section}`}>
<div className={`container ${style.news_container}`}>

  <div className={style.topSection}>
<div className={style.col1}>
                 <p className='small_text'>FEATURED<br className='desktop_break'/>WORKS</p>
</div>
 <div className={style.col2}>
      <AnimatedText tag="h2" className="common_heading" text="News & Updates" />
  </div>
   <div className={style.col3}>
        <AnimatedBtn delay={150}>
                  <Link className='common_btn' href="#">View all Blog <Image src="/images/btn_arrow.svg" width={24} height={24} alt='' /></Link>
                </AnimatedBtn>
  </div>
  </div>

  <div className={style.news_cards}>
    {NewsData.map((item, i) => (
      <div key={i} className={style.card}>

<div className={style.card_image}>
        <Image src={item.image} width={490} height={350} alt='' />
</div>
<div className={style.card_content}>
   <AnimatedText tag="h3" className="" text={item.title} />
   <div>
        <AnimatedText tag="p" className="small_text" text={item.date} />
<AnimatedBtn delay={150}>
                  <Link className='common_btn' href="#">What we do <Image src="/images/btn_arrow.svg" width={24} height={24} alt='' /></Link>
                </AnimatedBtn>
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

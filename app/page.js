"use client"
import React, { useEffect, useRef, useState } from 'react'
import style from './page.module.css'
import Image from 'next/image'
import Link from 'next/link';
import AnimatedText from './components/AnimatedText';
import AnimatedBtn from './components/AnimatedBtn';

export default function Page() {

  // — Reels refs
  const reelsRef = useRef(null);
  const buttonRef = useRef(null);
  const videoRef = useRef(null);
  const mouse = useRef({ x: 0, y: 0 });
  const current = useRef({ x: 0, y: 0 });
  const rafRef = useRef(null);
  const isInside = useRef(false);
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
  const isDragging = useRef(false);
  const dragStartX = useRef(0);
  const row1Offset = useRef(0);
  const row2Offset = useRef(0);
  const [btnText, setBtnText] = useState('Drag');

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
      if (!buttonRef.current) return;
      const factor = isInside.current ? 0.08 : 0.06;
      current.current.x = lerp(current.current.x, mouse.current.x, factor);
      current.current.y = lerp(current.current.y, mouse.current.y, factor);
      buttonRef.current.style.left = `${current.current.x}px`;
      buttonRef.current.style.top = `${current.current.y}px`;
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
      if (!dragButtonRef.current) return;
      const factor = clientIsInside.current ? 0.08 : 0.06;
      clientCurrent.current.x = lerp(clientCurrent.current.x, clientMouse.current.x, factor);
      clientCurrent.current.y = lerp(clientCurrent.current.y, clientMouse.current.y, factor);
      dragButtonRef.current.style.left = `${clientCurrent.current.x}px`;
      dragButtonRef.current.style.top = `${clientCurrent.current.y}px`;
      clientRafRef.current = requestAnimationFrame(animate);
    };

    clientRafRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(clientRafRef.current);
  }, []);

  // — Reels handlers
  const handleMouseMove = (e) => {
    const rect = reelsRef.current.getBoundingClientRect();
    mouse.current.x = e.clientX - rect.left;
    mouse.current.y = e.clientY - rect.top;
  };

  const handleMouseEnter = (e) => {
    isInside.current = true;
    const rect = reelsRef.current.getBoundingClientRect();
    current.current.x = e.clientX - rect.left;
    current.current.y = e.clientY - rect.top;
    mouse.current.x = current.current.x;
    mouse.current.y = current.current.y;
    buttonRef.current.style.opacity = '1';
    buttonRef.current.style.transform = 'translate(-50%, -50%) scale(1)';
    reelsRef.current.style.cursor = 'none';
  };

  const handleMouseLeave = () => {
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
  const rect = sectionRef.current.getBoundingClientRect();
  clientMouse.current.x = e.clientX - rect.left;
  clientMouse.current.y = e.clientY - rect.top;

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
    clientIsInside.current = true;
    const rect = sectionRef.current.getBoundingClientRect();
    clientCurrent.current.x = e.clientX - rect.left;
    clientCurrent.current.y = e.clientY - rect.top;
    clientMouse.current.x = clientCurrent.current.x;
    clientMouse.current.y = clientCurrent.current.y;
    dragButtonRef.current.style.opacity = '1';
    dragButtonRef.current.style.transform = 'translate(-50%, -50%) scale(1)';
    sectionRef.current.style.cursor = 'none';
  };

  const handleClientMouseLeave = () => {
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
          <div className={style.norml_text}>norml.</div>
          <AnimatedText tag="p" delay={2000}
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
                className="common_heading"
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
          <h2 className='common_heading'>People growing with us</h2>
          <p className='small_text'>Lorem ipsum dolor sit amet</p>
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
    </>
  )
}
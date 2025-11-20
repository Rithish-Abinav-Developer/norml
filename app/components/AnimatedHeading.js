"use client";

import { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

export default function AnimatedHeading() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const mobile = window.innerWidth <= 500;

    document.querySelectorAll(".common_heading").forEach((heading) => {
        // console.log(heading)
      const span = heading.querySelector("span");
      const text = span.innerText;
      span.innerHTML = ""; 

      // Split letters
      text.split("").forEach((letter) => {
        const letterSpan = document.createElement("span");
        letterSpan.innerText = letter;
        span.appendChild(letterSpan);
      });

      // GSAP animation
      gsap.to(span.querySelectorAll("span"), {
        scrollTrigger: {
          trigger: heading.querySelector("span"),
          start: `top ${mobile ? "90%" : "80%"}`,
          end: `top ${mobile ? "70%" : "60%"}`,
          scrub: 1,
        },
        opacity: 1,
        stagger: 0.1,
      });
    });
  }, []);

  return null; // This component only runs the animation setup
}

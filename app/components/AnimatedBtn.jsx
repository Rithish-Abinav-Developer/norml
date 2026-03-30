"use client"
import { useEffect, useRef } from 'react'
import style from './AnimatedBtn.module.css'

export default function AnimatedBtn({ children, className = '', delay = 0 }) {
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add(style.visible);
          }, delay);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.2 });

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={`${style.hidden} ${className}`}>
      {children}
    </div>
  );
}
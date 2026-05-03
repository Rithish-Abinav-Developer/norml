"use client"
import { useEffect, useRef } from 'react'
import style from './AnimatedText.module.css'

export default function AnimatedText({ text, tag = 'p', className = '', delay = 0,  ...props }) {
  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const wordEls = entry.target.querySelectorAll('.word--element');
          wordEls.forEach((el, i) => {
            setTimeout(() => {
              el.style.transform = 'translate(0px, 0%)';
              el.style.opacity = '1';
            }, delay + i * 20); // delay shifts the whole animation start
          });
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 1 });

    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  const words = text.split(' ');
  const Tag = tag;

  return (
    <Tag ref={containerRef} className={`${style.animated_text} ${className}`} {...props}>
      {words.map((word, i) => (
        <span key={i} className={`${style.word_parent}`}>
          <span className="word--element">{word}</span>
          {i < words.length - 1 && ' '}
        </span>
      ))}
    </Tag>
  );
}
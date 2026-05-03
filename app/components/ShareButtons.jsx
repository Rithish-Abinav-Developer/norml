"use client"
import { useEffect, useState } from 'react'
import Image from 'next/image'
import AnimatedText from './AnimatedText'

export default function ShareButtons({ className, textClassName }) {
  const [url, setUrl] = useState('');

  useEffect(() => {
    setUrl(window.location.href);
  }, []);

  const fbUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
  const twitterUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}`;
  const emailUrl = `mailto:?body=${encodeURIComponent(url)}`;

  return (
    <aside className={className}>
      <AnimatedText tag="p" className={textClassName} text="Share" />
      <ul>
        <li><a href={fbUrl} target="_blank" rel="noopener noreferrer"><Image src="/images/fb.svg" width={20} height={20} alt="fb" /></a></li>
        <li><a href={twitterUrl} target="_blank" rel="noopener noreferrer"><Image src="/images/twitter.svg" width={20} height={20} alt="twitter" /></a></li>
        <li><a href={emailUrl}><Image src="/images/email.svg" width={20} height={20} alt="email" /></a></li>
      </ul>
    </aside>
  );
}

"use client"

import { useEffect } from 'react';
import Lenis from 'lenis';

const ENABLE_LENIS = true;

export default function LenisProvider({ children }) {
  useEffect(() => {
    if (!ENABLE_LENIS) return;

    const lenis = new Lenis({
      duration: 2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });

    let rafId;

    function raf(time) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }

    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  return children;
}

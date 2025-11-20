"use client"; // very important

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function AosComponent({ children }) {
  useEffect(() => {
    AOS.init({
      duration: 800, 
      once: true,  
    });
  }, []);
  return (
    <div>{children}</div>
  )
}

"use client"
import React from 'react'
import style from './popup.module.css'
import Image from 'next/image'

export default function Popup({ popupOpen, setPopupOpen }) {

  if (!popupOpen) return null; 

  return (
    <div className={style.popup}>
      
      <div 
        className={style.popupOverlay} 
        onClick={() => setPopupOpen(false)} 
      ></div>

      <div className={style.popupContent}>
        <h2>Enquire Now</h2>

        <form>
          <input type='text' placeholder='Name' />
          <input type='email' placeholder='Email' />
          <input type='text' placeholder='Phone' />
          <textarea placeholder='Message'></textarea>

          <button className='common_btn'>
            Submit 
            <Image src="/images/btn_arrow.svg" width={24} height={24} alt='' />
          </button>
        </form>

      </div>

    </div>
  )
}
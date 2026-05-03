"use client"
import React, { useState } from 'react'
import style from './popup.module.css'
import Image from 'next/image'

export default function Popup({ popupOpen, setPopupOpen }) {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState(null); // 'success' | 'error' | null
  const [loading, setLoading] = useState(false);

  const handlePhoneKeyDown = (e) => {
    const allowed = ['Backspace', 'Delete', 'ArrowLeft', 'ArrowRight', 'Tab'];
    if (!allowed.includes(e.key) && !/^\d$/.test(e.key)) {
      e.preventDefault();
    }
  };

  const handlePhoneChange = (e) => {
    setPhone(e.target.value.replace(/\D/g, ''));
    if (errors.phone) setErrors((prev) => ({ ...prev, phone: '' }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = {};

    if (!name.trim())    newErrors.name  = 'Name is required.';
    if (!email.trim())   newErrors.email = 'Email is required.';
    if (phone.length < 10) newErrors.phone = phone.length === 0
      ? 'Phone number is required.'
      : 'Phone number must be at least 10 digits.';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    setStatus(null);
    setLoading(true);

    try {
      const res = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, phone, message }),
      });

      if (res.ok) {
        setStatus('success');
        setName('');
        setEmail('');
        setPhone('');
        setMessage('');
      } else {
        const data = await res.json();
        setStatus(data.error || 'Something went wrong. Please try again.');
      }
    } catch {
      setStatus('error');
    } finally {
      setLoading(false);
    }
  };

  if (!popupOpen) return null;

  return (
    <div className={style.popup}>

      <div
        className={style.popupOverlay}
        onClick={() => setPopupOpen(false)}
      ></div>

      <div className={style.popupContent}>
        <h2>Enquire Now</h2>

        {status === 'success' ? (
          <p className={style.successMsg}>
            Thank you! Your message has been sent. We'll be in touch soon.
          </p>
        ) : (
          <form onSubmit={handleSubmit}>
            <input
              type='text'
              placeholder='Name'
              value={name}
              onChange={(e) => { setName(e.target.value); if (errors.name) setErrors((p) => ({ ...p, name: '' })); }}
            />
            {errors.name && <span className={style.error}>{errors.name}</span>}

            <input
              type='email'
              placeholder='Email'
              value={email}
              onChange={(e) => { setEmail(e.target.value); if (errors.email) setErrors((p) => ({ ...p, email: '' })); }}
            />
            {errors.email && <span className={style.error}>{errors.email}</span>}

            <input
              type='text'
              placeholder='Phone'
              value={phone}
              onKeyDown={handlePhoneKeyDown}
              onChange={handlePhoneChange}
            />
            {errors.phone && <span className={style.error}>{errors.phone}</span>}

            <textarea
              placeholder='Message'
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>

            {status === 'error' && (
              <span className={style.error}>Failed to send. Please try again.</span>
            )}

            <button className='common_btn' disabled={loading}>
              {loading ? 'Sending…' : 'Submit'}
              <Image src="/images/btn_arrow.svg" width={24} height={24} alt='' />
            </button>
          </form>
        )}

      </div>

    </div>
  )
}

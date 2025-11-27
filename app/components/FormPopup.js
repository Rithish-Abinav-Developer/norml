"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import closeBtn from "@/app/src/close.svg";
import emailjs from "@emailjs/browser";

export default function FormPopup({ setContactPopup, selectedService }) {

const [form, setForm] = useState({
  name: "",
  email: "",
  phone: "",
  service:"",
  message: "",
});

useEffect(() => {
  setForm((prev) => ({ ...prev, service: selectedService || "" }));
}, [selectedService]);

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    // phone validation
    if (!/^[0-9]{10}$/.test(form.phone)) {
      alert("Mobile number must be exactly 10 digits.");
      setLoading(false);
      return;
    }

    try {
      await emailjs.send(
        "service_ypwryvy",
        "template_y0g6diw",
        {
          name: form.name,
          email: form.email,
          phone: form.phone,
          service: form.service,
          message: form.message,
        },
        "UZWeuH-UUTrHr6U6C"
      );

      alert("Message sent successfully!");

      setForm({
        name: "",
        email: "",
        phone: "",
        service: "",
        message: "",
      });

      // close popup
      setContactPopup(false);

    } catch (error) {
      console.error(error);
      alert("Failed to send message. Try again.");
    }

    setLoading(false);
  };

  return (
    <div className="form_popup">
      <div>
        <Image
          id="form_close"
          src={closeBtn}
          alt="close"
          className="close_btn"
          onClick={() => setContactPopup(false)}
        />

        <form onSubmit={handleSubmit}>
          <h2 className="heading">Get In Touch</h2>

          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            value={form.name}
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            value={form.email}
            onChange={handleChange}
            required
          />

          <input
            type="tel"
            name="phone"
            placeholder="Enter your phone number"
            maxLength="10"
            value={form.phone}
            onChange={handleChange}
            required
          />

          <select
            name="service"
           value={form.service || selectedService}
            onChange={handleChange}
            required
          >
            <option value="">Select Service</option>
            <option value="Branding">Branding</option>
            <option value="Podcasting">Podcasting</option>
            <option value="UI/UX Design">UI/UX Design</option>
            <option value="Social media management">Social media management</option>
            <option value="Video production">Video production</option>
          </select>

          <textarea
            name="message"
            placeholder="Enter your message"
            value={form.message}
            onChange={handleChange}
            required
          />

          <button type="submit" disabled={loading}>
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </div>
    </div>
  );
}

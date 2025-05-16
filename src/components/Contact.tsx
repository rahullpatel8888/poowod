
import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import DOMPurify from "dompurify";
import { slideIn } from "../utils/motion";
import { EarthContainer } from "./Earth/index";
import "./styles/Contact.css";

function Contact() {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    const sanitizedValue = DOMPurify.sanitize(value);
    setForm({ ...form, [name]: sanitizedValue });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.message) {
      alert("All fields are required.");
      return;
    }

    const emailPattern = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
    if (!emailPattern.test(form.email)) {
      alert("Please enter a valid email address.");
      return;
    }

    setLoading(true);

    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: DOMPurify.sanitize(form.name),
          to_name: "Your Name",
          from_email: DOMPurify.sanitize(form.email),
          to_email: "your.email@example.com",
          message: DOMPurify.sanitize(form.message),
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        setLoading(false);
        alert("Thank you for your message. I will get back to you soon.");
        setForm({
          name: "",
          email: "",
          message: "",
        });
      })
      .catch((error) => {
        setLoading(false);
        console.log(error);
        alert("Something went wrong. Please try again later.");
      });
  };

  return (
    <div className="contact-wrapper">
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="contact-form-container"
      >
        <p className="contact-subtitle">Get in touch</p>
        <h3 className="contact-title">Contact.</h3>

        <form ref={formRef} onSubmit={handleSubmit} className="contact-form">
          <label>
            <span className="form-label">Your Name</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="What's your name?"
              className="form-input"
            />
          </label>
          <label>
            <span className="form-label">Your Email</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="What's your email address?"
              className="form-input"
            />
          </label>
          <label>
            <span className="form-label">Your Message</span>
            <textarea
              rows={7}
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="What do you want to say?"
              className="form-textarea"
            />
          </label>

          <button type="submit" className="form-button">
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="earth-container"
      >
        <EarthContainer />
      </motion.div>
    </div>
  );
}

export default Contact;

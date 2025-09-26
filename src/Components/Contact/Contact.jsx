import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { AiOutlineMail } from "react-icons/ai";
import { BsWhatsapp } from "react-icons/bs";
import { RiMessengerLine } from "react-icons/ri";
import "./contact.css";

const Contact = () => {
  const [isSentMessage, setIsSentMessage] = useState("");

  useEffect(() => {
    const messageTimer = setTimeout(() => {
      setIsSentMessage("");
    }, 5000);

    return () => clearTimeout(messageTimer);
  }, [isSentMessage]);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      disable: false,
      startEvent: "DOMContentLoaded",
      offset: 120,
      easing: "ease",
      mirror: false,
      anchorPlacement: "top-bottom",
    });
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    try {
      const response = await fetch("https://formspree.io/f/xnngnynw", {
        method: "POST",
        headers: {
          Accept: "application/json",
        },
        body: formData,
      });

      if (response.ok) {
        setIsSentMessage("Your message has been sent. Keep in touch.");
        e.target.reset();
      } else {
        setIsSentMessage("Sorry! Your message send failed!");
      }
    } catch (error) {
      setIsSentMessage("Sorry! Your message send failed!");
      console.error("Error sending message:", error);
    }
  };

  return (
    <section id="contact">
      <Helmet>
        <title>Sk Sahed Ahmed</title>
      </Helmet>

      <h5>Be in Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        {/* contact options */}
        <div data-aos="slide-right" className="contact__options">
          <article className="contact__option">
            <AiOutlineMail className="contact__option__icon" />
            <h4>Email</h4>
            <h5>ssahed65@gmail.com</h5>
            <a href="mailto: ssahed65@gmail.com">Send a Message</a>
          </article>

          <article className="contact__option">
            <RiMessengerLine className="contact__option__icon" />
            <h4>Messanger</h4>
            <h5>Sk Sahed Ahmed</h5>
            <a
              href="https://www.m.me/sahedstar"
              rel="noreferrer"
              target="_blank"
            >
              Send a Message
            </a>
          </article>

          <article className="contact__option">
            <BsWhatsapp className="contact__option__icon" />
            <h4>WhatsApp</h4>
            <h5>+8801616516753</h5>
            <a
              href="https://api.whatsapp.com/send?phone=8801616516753"
              rel="noreferrer"
              target="_blank"
            >
              Send a Message
            </a>
          </article>
        </div>

        {/* form section */}
        <form data-aos="slide-left" onSubmit={handleSubmit}>
          <input
            type="text"
            name="fname"
            placeholder="Enter first name..."
            required
          />

          <input
            type="text"
            name="lname"
            placeholder="Enter last name..."
            required
          />

          <input
            type="text"
            name="subject"
            placeholder="Enter your subject..."
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Enter your email..."
            required
          />

          <textarea
            name="message"
            rows="10"
            cols="10"
            placeholder="Write your message..."
            required
          ></textarea>

          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
          {isSentMessage && <p>{isSentMessage}</p>}
        </form>
      </div>
    </section>
  );
};

export default Contact;

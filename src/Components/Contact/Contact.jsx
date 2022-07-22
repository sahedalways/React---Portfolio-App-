import React, { useState, useEffect } from "react";
import "./contact.css";
import { AiOutlineMail } from "react-icons/ai";
import { RiMessengerLine } from "react-icons/ri";
import { BsWhatsapp } from "react-icons/bs";
import { useRef } from "react";
import emailjs from "emailjs-com";
import AOS from "aos";
import "aos/dist/aos.css";
import { Helmet } from "react-helmet-async";

const Contact = () => {
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

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_5qhohv8",
        "template_p8nkbxh",
        form.current,
        "Nk-hMLTrGFcKehoTP",
        e.target.reset()
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <section id="contact">
      <Helmet>
        <title>Sk Sahed Ahmed</title>
      </Helmet>

      <h5>Be in Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        {/* contact options starts from here */}
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
              href="https://www.m.me/altamish.sahed.5"
              rel="noreferrer"
              target="_blank"
            >
              Send a Message
            </a>
          </article>

          <article className="contact__option">
            <BsWhatsapp className="contact__option__icon" />
            <h4>WhatsApp</h4>
            <h5>+8801791674690</h5>
            <a
              href="https://api.whatsapp.com/send?phone=+8801791674690"
              rel="noreferrer"
              target="_blank"
            >
              Send a Message
            </a>
          </article>
        </div>
        {/* contact options ends here */}

        {/* form section starts from here */}
        <form data-aos="slide-left" ref={form} onSubmit={sendEmail}>
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
        </form>
      </div>
    </section>
  );
};

export default Contact;

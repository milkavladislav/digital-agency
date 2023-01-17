import React, { useRef } from "react";
import "./ContactUs.css";

const ContactUs = () => {
  const form = useRef<HTMLFormElement | null>(null);

  return (
    <section className="contact" id="contact">
      <div className="contact__card">
        <div className="contact__card-text">
          <h2>Start a new project!</h2>
          <p>
            If the path is beautiful, let us not ask where it leads. my religion
            is very simple. my religion is kindness.
          </p>
        </div>
        <form ref={form} className="contact__form">
          <input
            type={"text"}
            required
            name="name"
            placeholder="Your full name"
          />
          <input
            type={"text"}
            required
            name="email"
            placeholder="Your e-mail address"
          />
          <textarea
            required
            name="messages"
            placeholder="Drop us a message here…"
            rows={7}
          />
          <button type="submit" className="yellow__button main__button">
            Send Now
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactUs;

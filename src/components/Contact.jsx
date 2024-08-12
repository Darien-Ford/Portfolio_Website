import "./styles/Contact.css";
import { useState } from "react";
import emailjs from "@emailjs/browser";

export const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Your EmailJS service ID, template ID, and Public Key
    const serviceID = "";
    const templateID = "";
    const publicKey = "";

    // Create a new object that contains dynamic template params
    const templateParams = {
      fromName: name,
      fromEmail: email,
      toName: "Darien",
      message: message,
    };

    // Send the email using EmailJS
    emailjs
      .send(serviceID, templateID, templateParams, publicKey)
      .then((response) => {
        console.log("Email Sent Successfully!", response);
        setName("");
        setEmail("");
        setMessage("");
      })
      .catch((error) => {
        console.error("Error Sending Email: ", error);
      });
  };

  return (
    <div className="contact" id="contact">
      <h2 className="heading">Contact Me</h2>
      <form onSubmit={handleSubmit} className="contactForm">
        <input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          rows="10"
          type="email"
          placeholder="Your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <textarea
          rows="10"
          placeholder="Your Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>
        <button type="submit">Send Email</button>
      </form>
    </div>
  );
};

export default Contact;

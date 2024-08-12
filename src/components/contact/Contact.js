import React, { useRef } from 'react';
import './contact.css';
import emailjs from '@emailjs/browser';

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_oji3zwa', // Service ID
        'template_f36mfhj', // Template ID
        form.current, // HTML form element
        '08dZ4O1fF0hDOD1a9' // Public key
      )
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error);
        }
      );
  };

  return (
    <>
        <h3>Leave your information to support you</h3>
        <form ref={form} onSubmit={sendEmail}>
          <label>Name</label><br/>
          <input type="text" name="user_name" /><br/>
          <label>Email</label><br/>
          <input type="email" name="user_email" /><br/>
          <label>Message</label><br/>
          <textarea rows="8" name="message" className='mess'/><br/>
          <input type="submit" value="Send" className='submit'/><br/>
      </form>
    </>
  );
}

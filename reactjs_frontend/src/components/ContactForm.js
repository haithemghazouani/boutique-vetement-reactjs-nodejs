import React from "react";
import emailjs from "emailjs-com";


const ContactForm = () => {

  function sendEmail(e) {
      e.preventDefault();

  emailjs.sendForm('service_ytg6lpm', 'template_hvfogjr', e.target,'user_khTAz5nltZHKQOieEm4Qr')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
     
      e.target.reset()
  }
  return (
    <form className="contact-form" onSubmit={sendEmail}>
      <h2>contactez-nous</h2>
      <div className="form-content">
        <input
          type="text"
          id="name"
          name="name"
          required
          placeholder="nom *"
        />
        <input
          type="text"
          id="company"
          name="company"
          placeholder="société"
        />
        <input
          type="text"
          id="phone"
          name="phone"
          placeholder="téléphone"
        />
        <div className="email-content">
          <label id="not-mail">Email non valide</label>
          <input
            type="mail"
            id="email"
            name="email"
            required
            placeholder="email *"
          />
        </div>
        <textarea
          id="message"
          name="message"
          placeholder="message *"
          required
        />
      </div>
      <input
        className="button hover"
        type="submit"
        value="envoyer"
      />
      <div className="form-message"></div>
    </form>
  );
};

export default ContactForm;

import React from "react";

const Contact = () => {
  return (
    <div className="contact">
      <h1 className="title">Get in touch</h1>
      <div className="divider"></div>
      <form className="contact-form" action="" method="">
        <input type="text" className="form-text" placeholder="Name" />
        <input type="email" className="form-text" placeholder="Email" />
        <textarea className="form-text" placeholder="Message"></textarea>
        <input type="submit" className="form-button" value="Send" />
      </form>
    </div>
  );
};

export default Contact;

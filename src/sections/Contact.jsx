import React from "react";

const Contact = () => (
  <section id="contact" className="py-5 text-center">
    <div className="container">
      <h2 className="fw-bold mb-4">Contact Me</h2>
      <form className="mx-auto" style={{ maxWidth: "500px" }}>
        <div className="mb-3">
          <input type="text" className="form-control" placeholder="Your Name" required />
        </div>
        <div className="mb-3">
          <input type="email" className="form-control" placeholder="Your Email" required />
        </div>
        <div className="mb-3">
          <textarea className="form-control" placeholder="Your Message" rows="4"></textarea>
        </div>
        <button type="submit" className="btn btn-primary">Send</button>
      </form>
    </div>
  </section>
);

export default Contact;

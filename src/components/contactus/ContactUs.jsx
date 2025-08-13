import React from 'react';
import './ContactUs.css';

const ContactUs = () => {
  return (
    <>
      <div className="contact-header">

        <h1>Contact Informations</h1>

        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
        <a href="#" className="help-line">Help Line</a>
      </div>

      <div className="contact-form">
        <h2>Get In Touch</h2>
        <p>There are attractions in some areas of Lorem Ipsum that offer affordable access to family fun.</p>
        <form>
          <input type="text" name="name" placeholder="Your name" required />
          <input type="email" name="email" placeholder="Email address" required />
          <input type="text" name="phone" placeholder="Phone number" required />
          <input type="text" name="subject" placeholder="Subject" />
          <textarea name="message" placeholder="Message" rows="5" required></textarea>
          <button type="submit">Send Message</button>
        </form>
      </div>

      <div className="faq">
        <h2>Frequently Asked Questions</h2>
        <div className="faq-tabs">
          <button className="active">General</button>
          <button>Admission</button>
          <button>Courses</button>
          <button>Career</button>
          <button>Notice</button>
        </div>
        <div className="faq-content">
          <div className="faq-item">
            <div className="faq-question">How do I get admission?</div>
            <div className="faq-answer">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
          </div>
          <div className="faq-item">
            <div className="faq-question">What is the process of submitting documents?</div>
            <div className="faq-answer">Submit required documents online or via post.</div>
          </div>
          <div className="faq-item">
            <div className="faq-question">What is included in my course?</div>
            <div className="faq-answer">Courses include lectures, assignments, and exams.</div>
          </div>
        </div>
      </div>

      {/* <footer className="footer">
        <div className="footer-links">
          <div>
            <h3>Important Links</h3>
            <ul>
              <li><a href="#">Admissions</a></li>
              <li><a href="#">Library</a></li>
              <li><a href="#">Notice</a></li>
              <li><a href="#">Support</a></li>
            </ul>
          </div>
          <div>
            <h3>Contact Us</h3>
            <p>Email: example@email.com</p>
            <p>Phone: +123-456-7890</p>
            <p>Address: 123 Street Name, City</p>
          </div>
        </div>
        <div className="footer-bottom">
          &copy; 2025 ISKUL. All rights reserved.
        </div>
      </footer> */}
    </>
  );
};

export default ContactUs
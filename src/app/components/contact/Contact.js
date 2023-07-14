import Link from 'next/link';
import React from 'react'
import './Contact.css'

function Contact() {
  return (
      <div className="contact-container">
          <div className="contact">
              <h1 className='title'>Innovate. Validate. Launch</h1>
              <h2 className='subhead'>
                  Let‘s transform your idea into reality with our MVP
                  development services.
              </h2>

              <Link className='button' href={'#'}>Book a free consultation!</Link>
          </div>
      </div>
  );
}

export default Contact
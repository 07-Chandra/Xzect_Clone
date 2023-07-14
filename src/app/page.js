import React from 'react'
import Hero from './components/hero/Hero'
import Service from './components/service/Service';
import Technology from './components/technology/Technology';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';


function page() {
  return (
      <div className="container">
          <main>
              <Hero />
              <Service/>
              <Technology />
              <Contact/>
               <Footer/>
          </main>
      </div>
  );
}

export default page
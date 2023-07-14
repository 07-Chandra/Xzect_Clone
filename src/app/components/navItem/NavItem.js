import React from 'react'
import './NavItem.css';
function NavItem() {
  return (
      <div className="navItem-container">
          <div className="nav-item">
              <div className="popular">
                  <h2 className="title">Popular</h2>
                  <ul className="item-div">
                      <li className="items">Magneto Development</li>
                      <li className="items"> Wordpress Development</li>
                      <li className="items">Ecommerce</li>
                      <li className="items">Shopify</li>
                      <li className="items">NFT</li>
                      <li className="items">MVP</li>
                      <li className="items">Drones</li>
                      <li className="items">View all Popular</li>
                  </ul>
              </div>
              <div className="popular">
                  <h2 className="title">Service</h2>
                  <ul className="item-div">
                      <li className="items">Software & App Development</li>
                      <li className="items">Website Development & SEO</li>
                      <li className="items">Cloud Service</li>
                      <li className="items">Robotics & Automation</li>
                      <li className="items">3D Printing & prototyping</li>
                      <li className="items">Data Science & Analytics</li>
                      <li className="items">AI & Machine Learning</li>
                      <li className="items">IOT, AR & VR</li>
                      <li className="items">Blockchain</li>
                      <li className="items">Tech Consultancy</li>
                      <li className="items">Research & Development</li>
                      <li className="items">View All Services</li>
                  </ul>
              </div>
              <div className="popular">
                  <h2 className="title">Industries</h2>
                  <ul className="item-div">
                      <li className="items">eCommerce</li>
                      <li className="items">Hyperlocal</li>
                      <li className="items">Healthcare</li>
                      <li className="items">Finance</li>
                      <li className="items">Education</li>
                      <li className="items">Gaming</li>
                      <li className="items">Social Networking</li>
                      <li className="items">Agriculture</li>
                      <li className="items">Travel & Aviation</li>
                      <li className="items">Logistics</li>
                      <li className="items">Restaurant</li>
                      <li className="items">Real Estate</li>
                      <li className="items">View all industries</li>
                  </ul>
              </div>

              <div className="popular">
                  <h2 className="title">Industries</h2>
                  <ul className="item-div">
                      <li className="items">About</li>
                      <li className="items">Tech Stack</li>
                      <li className="items">Contact Us</li>
                      <li className="items">Careers</li>
                      <li className="items">Webinars</li>
                      <li className="items">Terms & Conditions</li>
                      <li className="items">Privacy Policy</li>
                      <li className="items">Legal Information</li>
                      <li className="items">Blog</li>
                      <li className="items">Youtube (@xzect_labs)</li>
                      <li className="items">Github (@xzect)</li>
                  </ul>
              </div>
          </div>
      </div>
  );
}

export default NavItem
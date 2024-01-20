import React from 'react';
import './Footer.css'; // Assuming you have a Footer.css for styling

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container row">
        <div className="footer-col">
          <h4>Contact Us</h4>
          <p>BigFoundation : BMS College of Engineering Bull Temple Road, Basavanagudi, Bangalore- 560019</p>
          <ul>
          <li><a href="https://www.google.com/maps/place/BMS+College+of+Engineering/@12.9410122,77.5629509,17z/data=!3m1!4b1!4m6!3m5!1s0x3bae158b11e34d2f:0x5f4adbdbab8bd80f!8m2!3d12.9410122!4d77.5655258!16zL20vMDM5ejcy?entry=ttu" target="_blank" rel="noopener noreferrer"><img width="50" height="50" src="https://img.icons8.com/ios-filled/50/FFFFFF/address--v1.png" alt="address--v1"/> Map</a></li>
          <li><a href="mailto:ciie@bmsce.ac.in"><img width="48" height="48" src="https://img.icons8.com/fluency-systems-regular/48/FFFFFF/filled-message.png" alt="filled-message"/> Email</a></li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>Important</h4>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="/team">Events</a></li>
            <li><a href="#">Blogs</a></li>
            <li><a href="/launchpad">Facilities</a></li>
            <li><a href="#">Gallery</a></li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>Insights</h4>
          <ul>
            <li><a href="#">Vision</a></li>
            <li><a href="#">Mission</a></li>
            <li><a href="#">Objectives</a></li>
            <li><a href="/team">About Us</a></li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>follow us</h4>
          <div className="social-links">
            <a href="https://chat.whatsapp.com/LraWNV787sJDxcB3fGCsgc" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-whatsapp"></i></a>
            <a href="https://www.linkedin.com/company/big-foundation-bmsce/mycompany/" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-linkedin-in"></i></a>
            <a href="https://www.instagram.com/big_foundation_?igsh=emZpdGFwMzNicHl4" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-instagram"></i></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


// news letter
//<div className="newsletter-container">
//<h3>E-Cell IIT (BHU) Varanasi's Weekly Newsletter</h3>
//<div className="newsletter-form">
//  <input type="email" placeholder="Type your email..." />
//  <button type="submit">Subscribe</button>
//</div>
//</div
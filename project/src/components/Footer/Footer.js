import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitter, faGoogle, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { NavLink } from 'react-router-dom';
const Footer = () => (
  <footer className="footer">
    <div className="footer-container">
      <div className="footer-container__items-contact">
        <div className="footer-container__items-contact--content">
          <h2>Lorem Ipsum, dizgi ve baskı endüstrisinde kullanılan mıgır metinlerdir. Lorem Ipsum.</h2><NavLink to="/about-us" className="contact__button contact__button--white"> CONTACT US </NavLink>
        </div>
      </div>
      <div className="footer-container_items--page-links">
        <div className="footer-container_items--page-links-content" >
          <NavLink to="/">Home</NavLink>
          <NavLink to="/products">Products</NavLink>
          <NavLink to="/about-us">About</NavLink>
          <NavLink to="/404">404</NavLink>
        </div>
      </div>
      <div className="footer-container__items" >
        <div className="footer-container__items--social" >
          <a className="social--icons social--icons--facebook" href="https://www.facebook.com" target="__blank" >
            <FontAwesomeIcon icon={faFacebook} />
          </a>
          <a className="social--icons social--icons--instagram" href="https://www.instagram.com" target="__blank">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a className="social--icons social--icons--twitter" href="https://www.twitter.com" target="__blank">
            <FontAwesomeIcon icon={faTwitter} />
          </a>
          <a className="social--icons social-icons--google" href="https://www.google.com" target="__blank">
            <FontAwesomeIcon icon={faGoogle} />
          </a>
          <a className="social--icons social-icons--youtube" href="https://www.youtube.com" target="__blank">
            <FontAwesomeIcon icon={faYoutube} />
          </a>



        </div>
      </div>
      <div className="footer-container_items--copyright">
@Copyright. All right reserved.
</div>
    </div>
  </footer>
)

export default Footer;

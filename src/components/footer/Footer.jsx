import React from 'react'
import './footer.css'
import {FaFacebookF} from 'react-icons/fa'
import {BsInstagram} from 'react-icons/bs'
  import {FaTwitter} from 'react-icons/fa'

const Footer=()=> {
  return (
    <footer>
      <a href="#" className='footer__logo'>EGATOR</a>
      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">about</a></li>
        <li><a href="#experience">experience</a></li>
        <li><a href="#services">services</a></li>
        <li><a href="#portfolio">portfolio</a></li>
        <li><a href="#testimonial">Testimonials</a></li>
        <li><a href="#contact">contact</a></li>

      </ul>
      <div className="footer__socials">
        <a href="https://facebook.com"><FaFacebookF/></a>
        <a href="https://facebook.com"><BsInstagram/></a>
        <a href="https://facebook.com"><FaTwitter/></a>
      </div>
      <div className="footer__copyright">
        <small>&copy; Anisha portfolio.all right reserved</small>
      </div>
    </footer>
  )
}

export default Footer

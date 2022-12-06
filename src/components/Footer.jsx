import React from "react";
import { ImFacebook, ImTwitter, ImGithub } from "react-icons/im";
import {IoLogoInstagram} from "react-icons/io"
import { FaPinterestP } from "react-icons/fa"
import styles from  '../UI/Footer.module.css'

const Footer = () => {
  return (
    <footer>
      <div className="footer-nav-left">
        <h5 className="footer-title">Hit us up on our socials!</h5>
        <div className="container">
          <div className="footer-icon">
          <a href="https://www.devmountain.com" target="_blank" className="icon">
            <ImFacebook size="1.5em"  />
          </a>
          </div>
          <div className="footer-icon">
          <a href="https://www.devmountain.com" target="_blank" className="icon">
            <IoLogoInstagram size="2em" />
          </a>
          </div>
          <div className="footer-icon">
          <a href="https://www.devmountain.com" target="_blank" className="icon">
            <FaPinterestP size="1.5em"  />
          </a>
          </div >
          <div className="footer-icon">
          <a href="https://www.devmountain.com" target="_blank" className="icon">
            <ImTwitter size="1.5em" />
          </a>
          </div>
        </div>
      </div>
      <svg
        width="110"
        height="110"
        viewBox="0 0 512 512"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="dev-mountain"
      >
        <circle cx="256" cy="256" r="248" stroke="#25AAE1" stroke-width="16" />
        <path
          d="M255 222L203 132.5L83.9282 338H233L331 168L427.675 338.571L317.5 338.5"
          stroke="#25AAE1"
          stroke-width="16"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </footer>
  );
};

export default Footer;

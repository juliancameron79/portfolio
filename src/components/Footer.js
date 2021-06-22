import React from "react";
import { TwitterShareButton, TwitterIcon, LinkedinShareButton, LinkedinIcon } from "react-share";
import { Link } from "react-scroll";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-6 col-sm-6">
            <div className="d-flex">
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias!</p>
            </div>
            <div className="d-flex">
              <a href="tel:076-429-1257">+46(0)76-429-1257</a>
            </div>
            <div className="d-flex">
              <p>juliancameron79@gmail.com</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-2 col-sm-6">
            <div className="row">
              <div className="col">
                <Link smooth={true} to="home" className="footer-nav">
                  Home
                </Link>
                <br />
                <Link smooth={true} to="about" className="footer-nav">
                  About me
                </Link>
                <br />
                <Link smooth={true} to="skills" className="footer-nav">
                  Skills
                </Link>
                <br />
              </div>
              <div className="col">
                <Link smooth={true} to="portfolio" className="footer-nav">
                  Portfolio
                </Link>
                <br />
                <Link smooth={true} to="contacts" className="footer-nav">
                  Contact me
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-5 col-md-5 col-sm-6 align-items-center">
            <div className="d-flex justify-content-center">
              <TwitterShareButton url={""} quote={"Full Stack Developer"} hashtag="#fullstack">
                <TwitterIcon className="mx-3" size={36}></TwitterIcon>
              </TwitterShareButton>
              <LinkedinShareButton url={"https://www.linkedin.com/in/julian-cameron/"} quote={"Full Stack Developer"} hashtag="#fullstack">
                <LinkedinIcon className="mx-3" size={36}></LinkedinIcon>
              </LinkedinShareButton>
            </div>
            <p className="pt-3 text-center">
              Copyright&copy;
              {new Date().getFullYear()}&nbsp;Julian Cameron | All Rights Reserved
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

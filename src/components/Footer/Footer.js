import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <React.Fragment>
      <div className="footer">
        <div class="box-container">
          <div class="box">
            <h3>quick links</h3>
            <a class="links" href="#home">
              home
            </a>
            <a class="links" href="#about">
              about
            </a>
            <a class="links" href="#features">
              features
            </a>
            <a class="links" href="#pricing">
              pricing
            </a>
            <a class="links" href="#trainers">
              trainers
            </a>
            <a class="links" href="#blogs">
              blogs
            </a>
          </div>

          <div class="box">
            <h3>opening hours</h3>
            <p>
              monday : <i> 7:00am - 10:30pm </i>
            </p>
            <p>
              tuesday : <i> 7:00am - 10:30pm </i>
            </p>
            <p>
              wednesday : <i> 7:00am - 10:30pm </i>
            </p>
            <p>
              friday : <i> 7:00am - 10:30pm </i>
            </p>
            <p>
              saturday : <i> 7:00am - 10:30pm </i>
            </p>
            <p>
              sunday : <i> closed </i>
            </p>
          </div>

          <div class="box">
            <h3>opening hours</h3>
            <p>
              <i class="fas fa-phone"></i> 98766556456
            </p>
            <p>
              <i class="fas fa-phone"></i> 98766556456
            </p>
            <p>
              <i class="fas fa-envelope"></i> 1243242342@gmail.com
            </p>
            <p>
              <i class="fas fa-map"></i> kathmandu, Nepal - 1232435
            </p>
            <div class="share">
              <a href="#" class="fab fa-facebook-f"></a>
              <a href="#" class="fab fa-twitter"></a>
              <a href="#" class="fab fa-linkedin"></a>
              <a href="#" class="fab fa-pinterest"></a>
            </div>
          </div>

          <div class="box">
            <h3>newsletter</h3>
            <p>subscribe for latest updates</p>
            <form action="">
              <input
                type="email"
                name=""
                class="email"
                placeholder="enter your email"
                id=""
              />
              <input type="submit" value="subscribe" class="btn" />
            </form>
          </div>
        </div>
      </div>
      <div class="copyrignt">
        <h2>
          ALL RIGHT RESERVED <span>@ HB</span>
        </h2>
      </div>
    </React.Fragment>
  );
};

export default Footer;

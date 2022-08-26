import React from "react";
import "./Features.css";
import img1 from "../../Assets/icon-1.png";
import img2 from "../../Assets/icon-2.png";
import img3 from "../../Assets/icon-3.png";
import pic1 from "../../Assets/img1.jpg";
import pic2 from "../../Assets/img2.jpg";
import pic3 from "../../Assets/img3.jpg";

const Features = () => {
  return (
    <React.Fragment>
      <div className="features" id="features">
        <h1 class="heading">
          <span>gym features</span>
        </h1>

        <div class="box-container">
          <div class="box">
            <div class="image">
              <img src={pic1} alt="" />
            </div>
            <div class="content">
              <img src={img1} alt="" />
              <h3>body building</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Similique, atque.
              </p>
              <a href="#" class="btn">
                read more
              </a>
            </div>
          </div>

          <div class="box second">
            <div class="image">
              <img src={pic2} alt="" />
            </div>
            <div class="content">
              <img src={img2} alt="" />
              <h3>gym for men</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Similique, atque.
              </p>
              <a href="#" class="btn">
                read more
              </a>
            </div>
          </div>

          <div class="box">
            <div class="image">
              <img src={pic3} alt="" />
            </div>
            <div class="content">
              <img src={img3} alt="" />
              <h3>gym for women</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Similique, atque.
              </p>
              <a href="#" class="btn">
                read more
              </a>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Features;

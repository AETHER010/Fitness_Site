import React from "react";
import Slider from "react-slick";

import blog1 from "../../Assets/blog-1.jpg";
import blog2 from "../../Assets/blog-2.jpg";
import blog3 from "../../Assets/blog-3.jpg";
import blog4 from "../../Assets/blog-4.jpg";

const Img_Slider = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <React.Fragment>
      <div>
        <h1 class="heading">
          <span>daily posts</span>
        </h1>
        <Slider {...settings}>
          <div>
            <div class="swiper blogs-slider">
              <div class="swiper-wrapper">
                <div class="swiper-slide slide">
                  <div class="image">
                    <img src={blog1} alt="" />
                  </div>
                  <div class="content">
                    <div class="link">
                      <a href="#">by user</a> <span>|</span>
                      <a href="#">21st may, 2021</a>
                    </div>
                    <h3>fitness is not about being better than someone else</h3>
                    <p>
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Aliquam, tenetur?
                    </p>
                    <a href="#" class="btn">
                      read more
                    </a>
                  </div>
                </div>
              </div>
              <div>
                <div class="swiper-slide slide">
                  <div class="image">
                    <img src={blog2} alt="" />
                  </div>
                  <div class="content">
                    <div class="link">
                      <a href="#">by user</a> <span>|</span>
                      <a href="#">21st may, 2021</a>
                    </div>
                    <h3>fitness is not about being better than someone else</h3>
                    <p>
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Aliquam, tenetur?
                    </p>
                    <a href="#" class="btn">
                      read more
                    </a>
                  </div>
                </div>
              </div>
              <div>
                <div class="swiper-slide slide">
                  <div class="image">
                    <img src={blog3} alt="" />
                  </div>
                  <div class="content">
                    <div class="link">
                      <a href="#">by user</a> <span>|</span>
                      <a href="#">21st may, 2021</a>
                    </div>
                    <h3>fitness is not about being better than someone else</h3>
                    <p>
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Aliquam, tenetur?
                    </p>
                    <a href="#" class="btn">
                      read more
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </React.Fragment>
  );
};

export default Img_Slider;

import React from "react";
import "./Trainer.css";

import Trainer1 from "../../Assets/trainer-1.jpg";
import Trainer2 from "../../Assets/trainer-2.jpg";
import Trainer3 from "../../Assets/trainer-3.jpg";
import Trainer4 from "../../Assets/trainer-4.jpg";

const Trainer = () => {
  return (
    <React.Fragment>
      <div className="trainers" id="trainers">
        <h1 class="heading">
          <span>expert trainers</span>
        </h1>

        <div class="box-container">
          <div class="box">
            <img src={Trainer1} alt="" />
            <div class="content">
              <span>expert trainer</span>
              <h3>Lucas wolf</h3>
              <div class="share">
                <a href="#" class="fab fa-facebook-f"></a>
                <a href="#" class="fab fa-twitter"></a>
                <a href="#" class="fab fa-pinterest"></a>
                <a href="#" class="fab fa-linkedin"></a>
              </div>
            </div>
          </div>

          <div class="box">
            <img src={Trainer2} alt="" />
            <div class="content">
              <span>expert trainer</span>
              <h3>Elisabeth ceaser</h3>
              <div class="share">
                <a href="#" class="fab fa-facebook-f"></a>
                <a href="#" class="fab fa-twitter"></a>
                <a href="#" class="fab fa-pinterest"></a>
                <a href="#" class="fab fa-linkedin"></a>
              </div>
            </div>
          </div>

          <div class="box">
            <img src={Trainer3} alt="" />
            <div class="content">
              <span>expert trainer</span>
              <h3>Elijah olsen</h3>
              <div class="share">
                <a href="#" class="fab fa-facebook-f"></a>
                <a href="#" class="fab fa-twitter"></a>
                <a href="#" class="fab fa-pinterest"></a>
                <a href="#" class="fab fa-linkedin"></a>
              </div>
            </div>
          </div>

          <div class="box">
            <img src={Trainer4} alt="" />
            <div class="content">
              <span>expert trainer</span>
              <h3>Asuna welfare</h3>
              <div class="share">
                <a href="#" class="fab fa-facebook-f"></a>
                <a href="#" class="fab fa-twitter"></a>
                <a href="#" class="fab fa-pinterest"></a>
                <a href="#" class="fab fa-linkedin"></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Trainer;

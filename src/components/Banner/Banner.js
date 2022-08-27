import React from "react";
import "./Banner.css";

const Banner = () => {
  return (
    <React.Fragment>
      <div className="banner">
        <span>join us now</span>
        <h3>get upto 50% discount</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
          architecto nesciunt aut sapiente quis inventore quam vitae quod illum
          incidunt.
        </p>
        <a href="#" class="btn">
          get discount
        </a>
      </div>
    </React.Fragment>
  );
};

export default Banner;

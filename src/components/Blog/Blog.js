import React from "react";
import "./Blog.css";
import Slider from "./Img_Slider";

const Blog = () => {
  return (
    <React.Fragment>
      <div className="blogs" id="blogs">
        <Slider />
      </div>
    </React.Fragment>
  );
};

export default Blog;

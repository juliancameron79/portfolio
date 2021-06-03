import React from "react";
import author from "../me.jpeg";

const AboutMe = () => {
  return (
    <div className="container py-5">
      <div className="row">
        <div className="col-lg-6 col-md-12">
          <div className="photo-wrap mb-5">
            <img className="profile-img" src={author} alt="author..." />
          </div>
        </div>
        <div className="col-lg-6 col-md-12">
          <h1 className="about-heading">About Me</h1>
          <h5>Hi, I’m Julian. Nice to meet you.</h5>
          <p>
            I’m a recently qualified Full Stack Web Developer living in Viksjö.
            I enjoy working with and adapting to technologies as they develop.
            I'm quietly confident, naturally curious, and perpetually working on
            improving my chops one design problem at a time. Before starting my
            journey as a developer, I spent nearly 12 years in the corporate
            enviroment successfully managering and running many onsite and
            offsite projects for large and small firms from across the globe.{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;

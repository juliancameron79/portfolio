import React from "react";
import Typed from "react-typed";

const Header = () => {
  return (
    <div id="home" className="header-wraper">
      <div className="main-info">
        <h1>julian cameron</h1>
        <Typed className="typed-text" strings={["Full Stack Developer", "Front End Developer", "Back End Developer", "and all round nice guy..."]} typeSpeed={40} backSpeed={60} loop />
      </div>
    </div>
  );
};

export default Header;

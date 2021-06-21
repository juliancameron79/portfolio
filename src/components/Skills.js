import React from "react";
// REACT FONTAWESOME IMPORTS
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLaptopCode, faServer, faPencilRuler } from "@fortawesome/free-solid-svg-icons";

const Skills = () => {
  return (
    <div className="skills">
      <h1 className="py-5">Skills</h1>
      <div className="container">
        <div className="row">
          <div className="col-md-4 col-sm-6">
            <div className="box">
              <div className="circle">
                <FontAwesomeIcon className="skills-icon" icon={faLaptopCode} size="2x" />
              </div>
              <h3>Front End</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi officia incidunt perspiciatis repellendus iure rerum!</p>
            </div>
          </div>
          {/*  */}
          <div className="col-md-4 col-sm-6">
            <div className="box">
              <div className="circle">
                <FontAwesomeIcon className="skills-icon" icon={faServer} size="2x" />
              </div>
              <h3>Back End</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore officia possimus quasi.</p>
            </div>
          </div>
          {/*  */}
          <div className="col-md-4 col-sm-6">
            <div className="box">
              <div className="circle">
                <FontAwesomeIcon className="skills-icon" icon={faPencilRuler} size="2x" />
              </div>
              <h3>Designer</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, aliquid. Quisquam quasi ex qui repellendus!</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;

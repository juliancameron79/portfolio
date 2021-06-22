import React from "react";
import evcnDeviceImac from "../images/evcn-device-iMac.png";
import milestoneFloristryImac from "../images/milestone-floristry-iMac.png";
import recipeHeavenImac from "../images/recipe-heaven-iMac.png";
// FONTAWESOME IMPORTS
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearchPlus } from "@fortawesome/free-solid-svg-icons";
// REACT POPUPBOX
import { PopupboxManager, PopupboxContainer } from "react-popupbox";
import "react-popupbox/dist/react-popupbox.css";

const Portfolio = () => {
  // EVCN
  const openPopupboxEvcn = () => {
    const content = (
      <>
        <img className="portfolio-image-popupbox" src={evcnDeviceImac} alt="A google maps API project..." />
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque.</p>
        <b>GitHub:</b>{" "}
        <a className="hyper-link" onClick={() => window.open("https://github.com/juliancameron79/evc-network", "_blank")}>
          https://github.com/juliancameron79/evc-network
        </a>
      </>
    );

    PopupboxManager.open({ content });
    PopupboxManager.update({
      content,
      config: {
        titleBar: {
          text: "Netflix clone project",
        },
      },
    });
  };

  const popupConfigEvcn = {
    titleBar: {
      enable: true,
    },
    fadeIn: true,
    fadeInSpeed: 500,
  };
  // MILESTONE FLORISTRY
  const openPopupboxMilestoneFloristry = () => {
    const content = (
      <>
        <img className="portfolio-image-popupbox" src={milestoneFloristryImac} alt="A Milestone Floristry project..." />
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque.</p>
        <b>Demo:</b>{" "}
        <a className="hyper-link" onClick={() => window.open("https://milestone-floristry.herokuapp.com/", "_blank")}>
          https://milestone-floristry.herokuapp.com/
        </a>
        <br />
        <b>GitHub:</b>{" "}
        <a className="hyper-link" onClick={() => window.open("https://github.com/juliancameron79/milestone-floristry", "_blank")}>
          https://github.com/juliancameron79/milestone-floristry
        </a>
      </>
    );

    PopupboxManager.open({ content });
    PopupboxManager.update({
      content,
      config: {
        titleBar: {
          text: "A Milestone Floristry project.",
        },
      },
    });
  };

  const popupConfigMilestoneFloristry = {
    titleBar: {
      enable: true,
    },
    fadeIn: true,
    fadeInSpeed: 500,
  };
  // RECIPE HEAVEN
  const openPopupboxRecipeHeaven = () => {
    const content = (
      <>
        <img className="portfolio-image-popupbox" src={recipeHeavenImac} alt="A Milestone Floristry project..." />
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque.</p>
        <b>Demo:</b>{" "}
        <a className="hyper-link" onClick={() => window.open("https://recipe-heaven-cookbook.herokuapp.com/", "_blank")}>
          https://recipe-heaven-cookbook.herokuapp.com/
        </a>
        <br />
        <b>GitHub:</b>{" "}
        <a className="hyper-link" onClick={() => window.open("https://github.com/juliancameron79/recipe-heaven", "_blank")}>
          https://github.com/juliancameron79/recipe-heaven
        </a>
      </>
    );

    PopupboxManager.open({ content });
    PopupboxManager.update({
      content,
      config: {
        titleBar: {
          text: "A recipe cook book project.",
        },
      },
    });
  };

  const popupConfigRecipeHeaven = {
    titleBar: {
      enable: true,
    },
    fadeIn: true,
    fadeInSpeed: 500,
  };
  return (
    <div id="portfolio" className="portfolio-wrapper">
      <div className="container">
        <h1 className="text-uppercase text-center py-5">portfolio</h1>
        <div className="image-box-wrapper row justify-content-center text-center">
          <div className="portfolio-image-box" onClick={openPopupboxEvcn}>
            <img className="portfolio-image" src={evcnDeviceImac} alt="A google maps API project..." />
            <div className="overflow"></div>
            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
          </div>

          {/* - */}
          <div className="portfolio-image-box" onClick={openPopupboxMilestoneFloristry}>
            <img className="portfolio-image" src={milestoneFloristryImac} alt="A google maps API project..." />
            <div className="overflow"></div>
            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
          </div>

          {/* - */}
          <div className="portfolio-image-box" onClick={openPopupboxRecipeHeaven}>
            <img className="portfolio-image" src={recipeHeavenImac} alt="A google maps API project..." />
            <div className="overflow"></div>
            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
          </div>

          {/* above */}
        </div>
      </div>
      <PopupboxContainer {...popupConfigEvcn} />
      <PopupboxContainer {...popupConfigMilestoneFloristry} />
      <PopupboxContainer {...popupConfigRecipeHeaven} />
    </div>
  );
};

export default Portfolio;

/* eslint-disable jsx-a11y/heading-has-content */
import React from "react";
import Img from "../utility/icons.js";
import "./innerInfo.css";

const { Icon, Bio } = Img;
const Text = () => {
  return (
    <div className="sectionB">
      <div className="innerinfoDiv">
        <h1 className="innerinfoValue">4.6</h1>
        <span>
          <img className="innerinfoImg" src={Icon} alt="logo" />
          <img className="innerinfoImg" src={Icon} alt="logo" />
          <img className="innerinfoImg" src={Icon} alt="logo" />
          <img className="innerinfoImg" src={Icon} alt="logo" />
          <img className="innerinfoImg" src={Icon} alt="logo" />
        </span>
        <h4 className="innerinfoRate">8,378 Ratings</h4>
        <span className="innerinfoText">Shopper Approved</span>
      </div>

      <div className="innersecondDiv">
        <h1 className="innersecondInfo">A+</h1>
        <span>
          <img className="innerinfoImg" src={Icon} alt="logo" />
          <img className="innerinfoImg" src={Icon} alt="logo" />
          <img className="innerinfoImg" src={Icon} alt="logo" />
          <img className="innerinfoImg" src={Icon} alt="logo" />
          <img className="innerinfoImg" src={Icon} alt="logo" />
        </span>
        <h4 className="innersecondRate">93 Customer Reviews</h4>
        <span className="innersecondText">BBB Rating</span>
      </div>
      <div className="innersecondText">
        <h3 className="textOnly">
          "Trusted Over by 15,000 <br />
          bussiness owners worldwide" <br />
          since 1996
        </h3>
        <div className="flexBox">
          <img className="bioImage" src={Bio} alt="img" />
          <span className="innerSecondReview">
            Start with our free basic plan! For <br /> extended use, you can
            switch to our <br /> PRO plan at any time.
          </span>
        </div>
        <div className="endingText">
          <h6 className="innerh6">Mark Masson,</h6>
          <h6 className="innerlasth6">Huntington Farms</h6>
        </div>
      </div>
    </div>
  );
};

export default Text;

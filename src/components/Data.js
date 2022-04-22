import React from "react";
import { Img } from "../utility/images";
import "./Index.css";
const Data = () => {
  const {  Image } = Img;
  return (
    <div>
      <div className="info">
              <div className="secondaryDiv" />
        <img src={Image} alt="myimg" className="guyImg" />
        <h4>find the setup information</h4>
        <h1 className="h2info">
          Full Service <br /> Digital Marketing
        </h1>
        <h1 className="h3info">
          Messages are always reliably delieverd.You <br /> can absoulety subimt
          your online forms <br /> securely and reliably.
        </h1>
      </div>
    </div>
  );
};
export default Data;

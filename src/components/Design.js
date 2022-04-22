import React from "react";
import "./designImages.css";
import Text from "./designText";
import { cardData } from "./mock";

const Design = () => {
  
  return (
    <div className="designImages">
      {cardData.map((item, index) => {
        return <Text items={item} key={index} />;
      })}
    </div>
  );
};

export default Design;

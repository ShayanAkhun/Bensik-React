import React from "react";
import Data from "../components/Data";
import Button from "../components/endButtons";
import "../components/button.css";
import Text from "../components/text";
import DashBoard from "../components/market";
import AnalysisData from "../components/Analysis";

export default function Home() {
  return (
    <div>
      <Data />
      <div className="btn-2">
        <Button btnType="btn1">Contact Us</Button>
        <Button btnType="btn2">Our Projects</Button>
      </div>
      <Text />
      <DashBoard />
      <AnalysisData />
    </div>
  );
}

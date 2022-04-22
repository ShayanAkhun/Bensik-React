import React from "react";
import './dashboard.css'
import InnerHeader from "./InnerHeader";

const DashBoard = () => {
  return (
    <div>
      <h2 className="dashboardText">
        We craft experiences for <br /> business to help
      </h2>
      <InnerHeader/>
    </div>
  );
};
export default DashBoard;

/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import Design from "./Design";
import './innerheader.css'

const InnerHeader = () => {
  return (
    <>
    <div className="innerheader">
      <ul className="Innerul">
        <li className="Innerli">
          <a className="text-active" href="#">All</a>
        </li>
        <li>
          <a href="#" className="text">Development</a>
        </li>
        <li>
          <a href="#" className="text">Design</a>
        </li>
        <li>
          <a href="#" className="text">Header</a>
        </li>
        <li>
          <a href="#" className="text">Product Page</a>
        </li>
        <li>
          <a href="#" className="text">Functionality</a>
        </li>
        <li>
          <a href="#" className="text">Marketing</a>
        </li>
      </ul>
    </div>
      <Design/>
    </>
  );
};
export default InnerHeader;

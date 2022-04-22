/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import Buttons from "./Buttons";
import "./hover.css";
import { Img } from "../utility/images";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { logo, Image } = Img;
  return (
    <div>
      <div className="container">
        <Link to={`/`}>
          <img className="image" src={logo} alt="logo" />
        </Link>
        <ul className="">
          <li className="li">
            <a className="button hover-underline-animation" href="#">
              About
            </a>
            <a className="button hover-underline-animation" href="#">
              Blog
            </a>
            <a className="button hover-underline-animation" href="#">
              Agency
            </a>
            <a className="button hover-underline-animation" href="#">
              Features
            </a>
          </li>
        </ul>
        <Buttons />
      </div>
    </div>
  );
};
export default Navbar;

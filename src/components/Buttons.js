import React from "react";
import { Link } from "react-router-dom";

const Button = () => {

  return (
    <div className="secondButton">
      <div className="div">
        <Link to='/login' className="startButton">Start Free</Link>
        <Link to='/signup' className="signUpButton">Sign Up</Link>
      </div>

    </div>
  );
};

export default Button;

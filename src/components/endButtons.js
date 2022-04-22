import React from "react";

const Button = (props) => {
  return (
    <>
      <button className={props.btnType}>{props.children}</button>
      </>
  );
};
export default Button;

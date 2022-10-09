import React from "react";
import classes from "./Button.module.scss";

const Button = ({ text, action }) => {
  return (
    <button className={classes.button} onClick={action}>
      {text}
    </button>
  );
};

export default Button;

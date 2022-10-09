import React from "react";

import classes from "./Input.module.scss";

const Input = ({ type, placeholder, icon, onChange }) => {
  return (
    <div className={classes.inputWrapper}>
      {icon}
      <input
        type={type}
        id={type}
        placeholder={placeholder}
        onChange={onChange}
      />
    </div>
  );
};

export default Input;

import React from "react";

import classes from "./Step.module.scss";

const Step = ({ image, number, headline, text }) => {
  return (
    <div className={classes.stepWrapper}>
      {image}
      <div className={classes.stepWrapper__text}>
        <span>STEP {number}</span>
        <h3>{headline}</h3>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default Step;

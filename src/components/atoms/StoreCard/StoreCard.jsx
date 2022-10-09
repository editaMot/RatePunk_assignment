import React from "react";

import classes from "./StoreCard.module.scss";

const StoreCard = ({ icon, text, headline, link }) => {
  return (
    <div className={classes.storeCard}>
      <a href={link} aria-label={headline} rel="noopener" target="blank">
        <div>{icon}</div>
        <div className={classes.storeCard__text}>
          <p>{text}</p>
          <h5>{headline}</h5>
        </div>
      </a>
    </div>
  );
};

export default StoreCard;

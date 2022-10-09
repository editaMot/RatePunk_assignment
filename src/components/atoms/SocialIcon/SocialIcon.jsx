import React from "react";

import classes from "./SocialIcon.module.scss";

const SocialIcon = ({ icon }) => {
  return <div className={classes.socialIcon}>{icon}</div>;
};

export default SocialIcon;

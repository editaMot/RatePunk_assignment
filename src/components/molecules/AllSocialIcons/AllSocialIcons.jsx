import React from "react";
import {
  FacebookIcon,
  InstagramIcon,
  LinkedInIncon,
  TikTopIcon,
  TwitterIcon,
} from "../../../assets/images/images";
import SocialIcon from "../../atoms/SocialIcon/SocialIcon";

import classes from "./AllSocialIcons.module.scss";

const AllSocialIcons = () => {
  return (
    <div className={classes.iconsWrapper}>
      <SocialIcon icon={<InstagramIcon />} />
      <SocialIcon icon={<FacebookIcon />} />
      <SocialIcon icon={<LinkedInIncon />} />
      <SocialIcon icon={<TwitterIcon />} />
      <SocialIcon icon={<TikTopIcon />} />
    </div>
  );
};

export default AllSocialIcons;

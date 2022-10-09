import React from "react";
import { Link } from "react-router-dom";
import { EmailIcon, Logo } from "../../../assets/images/images";
import AllSocialIcons from "../../molecules/AllSocialIcons/AllSocialIcons";

import classes from "./Footer.module.scss";

const Footer = () => {
  return (
    <footer className={classes.footer}>
      <div className={classes.footer__content}>
        <div className={classes.footer__content__about}>
          <Logo />
          <p>
            Ratepunk compares hotel room prices across the major online travel
            agencies. When you search for a room, Ratepunk extension scans the
            top booking sites and runs a price comparison, so you can be
            confident in knowing you’re getting the best deal!
          </p>
        </div>

        <div className={classes.footer__content__right}>
          <div className={classes.footer__content__right__links}>
            <h3>QUICK LINKS</h3>
            <ul>
              <li>
                <Link to="/chrome-extension">Chrome Extension</Link>
              </li>
              <li>
                <Link to="/price-comparison">Price Comparison</Link>
              </li>
              <li>
                <Link to="/how">How It Works</Link>
              </li>
              <li>
                <Link to="/blog">Ratepunk Blog</Link>
              </li>
              <li>
                <Link to="/privacy-policy">Privacy Policy</Link>
              </li>
            </ul>
          </div>

          <div className={classes.footer__content__right__connect}>
            <div className={classes.footer__content__right__connect__contact}>
              <h3>CONTACT</h3>
              <div
                className={
                  classes.footer__content__right__connect__contact__email
                }
              >
                <EmailIcon />
                <p>hi@ratepunk.com</p>
              </div>
            </div>

            <div className={classes.footer__content__right__connect__social}>
              <h3>SOCIAL</h3>
              <AllSocialIcons />
            </div>
          </div>
        </div>

        <span>© {new Date().getFullYear()} Ratepunk. All Rights Reserved.</span>
      </div>
    </footer>
  );
};

export default Footer;

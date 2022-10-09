import React, { useState } from "react";
import { Link } from "react-router-dom";
import { CloseImg, Logo, MenuBurger } from "../../../assets/images/images";

import classes from "./Header.module.scss";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleToggle = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className={classes.header}>
      <div className={classes.header__content}>
        <Link to="/" className={classes.header__content__logo}>
          <Logo />
        </Link>

        <span onClick={handleToggle}>
          {menuOpen ? <CloseImg /> : <MenuBurger />}
        </span>

        <nav className={`${classes.header__content__nav} `}>
          <ul
            onClick={() => closeMenu()}
            className={`${menuOpen ? "" : classes.hideMenu}`}
          >
            <li>
              <Link to="/chrome-extension">Chrome Extension</Link>
            </li>
            <li>
              <Link to="/price-comparison">Price Comparison</Link>
            </li>
            <li>
              <Link to="/blog">Blog</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;

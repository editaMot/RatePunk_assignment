import React, { useState } from "react";

import classes from "./StarRating.module.scss";
import { FaStar } from "react-icons/fa";

const StarRating = () => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(undefined);

  const handleClick = (value) => {
    setRating(value);
  };

  const handleMouseOver = (value) => {
    setHover(value);
  };

  const handleMouseLeave = () => {
    setHover(undefined);
  };

  return (
    <div className={classes.starRating}>
      {[...Array(5)].map((_star, index) => {
        return (
          <FaStar
            key={index}
            onClick={() => handleClick(index + 1)}
            style={{ cursor: "pointer", marginRight: 2 }}
            color={(hover || rating) > index ? "#1F343E" : "#fff"}
            onMouseOver={() => handleMouseOver(index + 1)}
            onMouseLeave={handleMouseLeave}
          />
        );
      })}
      <p>Chrome Store reviews</p>
    </div>
  );
};

export default StarRating;

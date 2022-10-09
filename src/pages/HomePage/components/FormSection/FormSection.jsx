import React, { useState } from "react";
import Button from "../../../../components/atoms/Button/Button";
import Input from "../../../../components/atoms/Input";
import { FormEmailImg } from "../../../../assets/images/images";

import classes from "./FormSection.module.scss";
import AfterSubmitInput from "../../../../components/atoms/AfterSubmitInput/AfterSubmitInput";

const FormSection = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleDataPost = (data) => {
    // Enter Bin id and API key from JSONBIN.io
    const BIN_ID = "";
    const API_KEY = "";

    let req = new XMLHttpRequest();

    req.onreadystatechange = () => {
      if (req.readyState === XMLHttpRequest.DONE) {
        console.log(req.responseText);
      }
    };

    req.open("PUT", `https://api.jsonbin.io/v3/b/${BIN_ID}`, true);
    req.setRequestHeader("Content-Type", "application/json");
    req.setRequestHeader("X-Master-Key", API_KEY);
    req.send(`{"email": "${data}"}`);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (email.length === 0 || !email.includes("@")) {
      setError(true);
      return;
    } else {
      setIsSubmitted(true);
      handleDataPost(email);
    }
  };

  return (
    <div className={classes.formSection}>
      <div className={classes.formSection__content}>
        <div className={classes.formSection__content__text}>
          <h2>REFER FRIENDS AND GET REWARDS</h2>
          <p>
            Refer your friends to us and earn hotel booking vouchers. We'll give
            you 1 coin for each friend that installs our extension. Minimum
            cash-out at 20 coins.
          </p>
          <form
            onSubmit={handleSubmit}
            className={`${isSubmitted ? classes.hide : ""}`}
          >
            {error && email.length <= 0 ? (
              <span>Please enter valid email</span>
            ) : (
              ""
            )}

            <div>
              <Input
                type="email"
                placeholder="Enter your email address"
                icon={<FormEmailImg />}
                onChange={(e) => setEmail(e.target.value)}
              />
              <Button text="Get Referral Link" />
            </div>
          </form>

          <div
            className={`${classes.formSection__content__text__hide} ${
              isSubmitted ? classes.formSection__content__text__show : ""
            }`}
          >
            <AfterSubmitInput />
          </div>
        </div>
        <span>Limits on max rewards apply.</span>
      </div>
    </div>
  );
};

export default FormSection;

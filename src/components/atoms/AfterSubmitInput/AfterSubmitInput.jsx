import React, { useRef, useState } from "react";
import { SuccessIcon } from "../../../assets/images/images";
import classes from "./AfterSubmitInput.module.scss";
import { FaCheck } from "react-icons/fa";

const AfterSubmitInput = () => {
  const [isCopied, setIsCopied] = useState(false);
  const inputRef = useRef(null);

  const handleCopy = async () => {
    setIsCopied(true);
    await navigator.clipboard.writeText(inputRef.current.value);
  };

  return (
    <div className={classes.submitted}>
      <div className={classes.submitted__message}>
        <SuccessIcon /> Your email is confirmed!
      </div>

      <div className={classes.submitted__input}>
        <input
          type="text"
          id="text"
          value="https://ratepunk.com/referral"
          readOnly
          ref={inputRef}
        />
        <button onClick={handleCopy}>{isCopied ? <FaCheck /> : "Copy"}</button>
      </div>
    </div>
  );
};

export default AfterSubmitInput;

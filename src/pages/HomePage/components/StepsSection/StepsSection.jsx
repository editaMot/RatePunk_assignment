import React from "react";
import {
  CollectCoinsImg,
  InviteImg,
  VoucherImg,
} from "../../../../assets/images/images";
import Step from "../../../../components/atoms/Step";

import classes from "./StepsSection.module.scss";

const StepsSection = ({ reverseRow }) => {
  return (
    <div className={classes.stepsWrapper}>
      <Step
        image={<InviteImg />}
        headline="INVITE FRIENDS"
        text="Refer friends with your unique referral link."
        number="1"
        reverseRow={false}
      />
      <Step
        image={<CollectCoinsImg />}
        headline="COLLECT COINS"
        text="Get 1 coin for each friend that installs our extension using your referral link."
        number="2"
        reverseRow={true}
      />
      <Step
        image={<VoucherImg />}
        headline="GET VOUCHER"
        text="Redeem for a $20 hotel booking voucher once you collect 20 coins."
        number="3"
        reverseRow={false}
      />
    </div>
  );
};

export default StepsSection;

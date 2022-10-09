import React from "react";
import { AppleImg, ChromeImg } from "../../assets/images/images";
import StarRating from "../../components/atoms/StarRating/StarRating";
import StoreCard from "../../components/atoms/StoreCard/StoreCard";
import FormSection from "./components/FormSection/FormSection";
import StepsSection from "./components/StepsSection/StepsSection";

import classes from "./HomePage.module.scss";

const HomePage = () => {
  return (
    <main className={classes.main}>
      <section className={classes.main__firstSection}>
        <div className={classes.main__firstSection__content}>
          <FormSection />
          <StepsSection />
        </div>
      </section>
      <section className={classes.main__secondSection}>
        <div className={classes.main__secondSection__content}>
          <StoreCard
            icon={<ChromeImg />}
            text="available in the"
            headline="chrome web store"
            link="https://chrome.google.com/webstore/detail/ratepunk-same-hotel-way-c/gdaioanblcnghddimngklkhgcbomfdck?utm_source=ratepunk"
          />
          <StoreCard
            icon={<AppleImg />}
            text="available in the"
            headline="apple app store"
            link="https://apps.apple.com/app/ratepunk/id1607823726"
          />
          <StarRating />
        </div>
      </section>
    </main>
  );
};

export default HomePage;

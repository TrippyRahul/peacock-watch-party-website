import React from "react";
import styles from "../styles/Hero.module.scss";
import Button from "./Button";

const Hero = () => {
  return (
    <>
      <div className={`${styles.hero} `}>
        <div className={styles.container}>
          <div className={styles.content}>
            <div className={styles["inner-container"]}>
              <div className={styles.headings}>
                <h1>Peacock TV Watch Party: Bringing Watch Parties to Your Home</h1>
              </div>
              <div className={styles.text}>
                <p>
                  In today&apos;s digital age, staying connected with friends and family, especially over long distances, has become more important than ever. <a href="/" className="underline">Peacock TV Watch Party</a> offers a seamless solution for hosting watch parties on Peacock TV, allowing you to enjoy your favorite shows and movies together, no matter where you are. This article will guide you through the features of the Peacock watch party, how it works, and the simple steps to get started with hosting your watch party.
                </p>
              </div>
              <div className={styles.btn}>
                <Button />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;

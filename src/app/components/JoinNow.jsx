import React from "react";
import styles from "@/app/styles/joinNow.module.scss";
import Button from "./Button";

const JoinNow = () => {
  return (
    <div className={styles.joinNow}>
      <div className={styles.container}>
        <div className={styles.titles}>
          <h2>Join Now</h2>
          <p>
            Why wait for the magic to unfold? Gather your friends and family and
            embark on a adventure like never before .Sign up for Amazon Prime
            Watch Party Today!
          </p>
        </div>
        <Button />
      </div>
    </div>
  );
};

export default JoinNow;

"use client";

import React, { useEffect, useState } from "react";
import styles from "../styles/Hero.module.scss";
import Button from "./Button";

const Hero = () => {
  const [bgClass, setBgClass] = useState("");

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setBgClass(styles["hero-mobile"]);
      } else {
        setBgClass(styles["hero-large"]);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <>
      <div className={`${styles.hero} ${bgClass}`}>
        <div className={styles.container}>
          <div className={styles.content}>
            <div className={styles["inner-container"]}>
              <div className={styles.headings}>
                <h1>Experience unlimited series with teleparty peacock</h1>
              </div>
              <div className={styles.text}>
                <p>
                  Experience the ultimate entertainment with the extension and
                  immerse yourself in a world of non-stop enjoyment. With the
                  peacock watch party extension, you can have seamless syncing
                  and view alongside friends and family, sharing laughs and
                  excitement. It has a vast collection of captivating content
                  where you will get every type of content. From thrilling
                  dramas to hilarious comedies, there is everything that you
                  want.
                </p>
              </div>
              <div className={styles.btn}>
                <Button />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles["virtual-party"]}>
        <div className={styles.container}>
          <p>
            Here you will not only get unlimited movie series but also amazing
            features like you can have chat and audio and video calls while
            streaming a movie. You can also create your own watching room and
            enjoy your favorite series with a Chrome watch party.
          </p>
        </div>
      </div>
    </>
  );
};

export default Hero;

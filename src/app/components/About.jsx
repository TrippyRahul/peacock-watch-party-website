import React from "react";
import styles from "../styles/about.module.scss";
import Image from "next/image";

const About = () => {
  return (
    <div className={styles.about}>
      <div className={styles.container}>
        <div className={styles.top}>
          <div className={styles.left}>
            <div className={styles.headings}>
              <h2>About Us</h2>
            </div>
            <div className={styles.desc}>
              <p>
              Peacock Watch Party transforms the way you watch TV and movies with friends and family. By offering coordinated playback, an integrated chat feature, and an easy setup process, Peacock TV Watch Party ensures that distance is no longer a barrier to shared entertainment experiences. Ready to start your first watch party? Install the Peacock Watch Party extension, upgrade to premium, and enjoy your favorite Peacock TV shows and movies together, no matter where you are.  
              </p>
            </div>
          </div>
          <div className={styles.right}>
            <div className={styles["image-container"]}>
              <Image
                src="./about.svg"
                alt="about"
                fill={true}
                className={styles.image}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

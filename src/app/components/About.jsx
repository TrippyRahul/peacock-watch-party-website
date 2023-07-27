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
              <h2>About the Peacock</h2>
            </div>
            <div className={styles.desc}>
              <p>
                Enjoy unlimited streaming fun with friends and family, no matter
                the distance, using the browser extension. View it together and
                chat, and make audio and video calls while enjoying your
                favorite shows. You can also peacock watch together with your
                friends.
              </p>
              <p>
                This extension allows it’s subscribers to see their favorite
                shows and movies together in real-time with their best buddies,
                even if they were in different locations. It synchronized the
                video playback for all participants, so everyone could view
                simultaneously, making it a shared viewing experience. The
                feature also included a chat function, allowing viewers to
                communicate and share their thoughts during the party.
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

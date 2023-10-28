import React from "react";
import styles from "../styles/favorite.module.scss";
import Image from "next/image";

const Favorite = () => {
  return (
    <div className={styles.favorite}>
      <div className={styles.container}>
        <div className={styles.top}>
          <div className={styles.right}>
            <div className={styles["image-container"]}>
              <Image
                src="/favorite.svg"
                alt="favorite"
                fill={true}
                className={styles.image}
              />
            </div>
          </div>
          <div className={styles.left}>
            <div className={styles["left-top"]}>
              <div className={styles.headings}>
                <h2>Time sync</h2>
              </div>
              <div className={styles.desc}>
                <p>
                  Enhance your movie and series-streaming experience with
                  friends using this convenient extension. Simply log in, invite
                  your buddies, and start streaming movies simultaneously. Share
                  videos and enjoy high-quality videos and fast buffering, all
                  within your web browser. You can also connect via audio and
                  video calls while streaming together and making movie nights
                  with friends even more enjoyable and exciting.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.bottom}>
          <div className={styles["bottom-right"]}>
            <div className={styles.headings}>
              <h2>Customize your own extension</h2>
            </div>
            <div className={styles.desc}>
              <p>
                Just click the creative user icon to unlock cool features like
                chat, audio calls, and video calls. Create your perfect movie
                night with friends and family by picking your favorite shows
                from top streaming platforms. Here you can enjoy high-quality
                streaming synchronized for everyone so that you can cheer and
                have a fantastic time together. It&apos;s the best way to make
                unforgettable memories with your loved ones.
              </p>
            </div>
          </div>
          <div className={styles["bottom-left"]}>
            <div className={styles["image-container"]}>
              <Image
                src="/customize.svg"
                alt="customize"
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

export default Favorite;

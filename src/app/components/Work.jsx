import React from "react";
import styles from "../styles/work.module.scss";
import Image from "next/image";

const Work = () => {
  return (
    <>
      <div className={styles.work} id="how-it-works">
        <div className={styles.container}>
          <h2 id="work">
            Make your own watching room within the watch party on peacock
          </h2>

          <p>
            In this extension, you can create your own personalized chat room,
            make an audio or video call while viewing a movie together in
            real-time. You can also customize the experience by adding fun
            emojis and reactions with others to share your thoughts on the
            entertainment.
          </p>

          <p>
            So, get ready to enjoy the thrill of streaming your preferred
            content on Peacock’s vast collection. It`&apos;s a shared
            entertainment experience like no other, making memories and enjoying
            entertainment together from the comfort of your homes.
          </p>
        </div>
      </div>
    </>
  );
};

export default Work;

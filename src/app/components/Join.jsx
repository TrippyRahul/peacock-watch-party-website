import React from "react";
import styles from "../styles/join.module.scss";
import Button from "./Button";
import Image from "next/image";

const Join = () => {
  return (
    <div className={styles.join}>
      <div className={styles.container}>
        <h2>How does this peacock group watch on your browser?</h2>
        <p>
          Firstly install the extension and add it to your Chrome. After adding
          it to your Chrome, log in with your valid account and start using it.
          It allows you to view shows and movies together with family and
          friends directly in your web browser. Now, to group streaming, you
          need to click on the creative user icon or the group button while
          logged into your valid account.
        </p>
        <p>
          Then, invite your buddies to join the party by sharing a link or
          sending them an invitation. Once everyone is in, the video playback
          will be synchronized, so you can all stream simultaneously and share
          the experience in real time. You can also chat, make audio calls, and
          have video calls with your friends during the party, making it a fun
          and interactive shared viewing experience.
        </p>
      </div>
    </div>
  );
};

export default Join;

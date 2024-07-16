import React from "react";
import styles from "../styles/footer.module.scss";
import Button from "./Button";
import { BsFacebook } from "react-icons/bs";
import Link from "next/link";
import Image from "next/image";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <div className={styles["image-container"]}>
            <Image
              src="/logo.svg"
              alt="ott-party"
              fill={true}
              className={styles["image"]}
            />
          </div>
          <h2>Ready to start <br/>the Peacock TV Watch Party now</h2>
        </div>
        <Button />

        <hr className={styles.line} style={{ color: "gray" }} />

        <div className={styles.content}>
          <div className={styles["popular-searches"]}>
            <p>
              <span>Popular searches:</span>{" "}
              <a href="https://www.watchottparty.com/" target="_blank">
                watchottparty
              </a>
              Peacock Watch Party,Peacock Party,Peacock TV Party,Peacock TV Watch Party,Peacock Watch <br/>Party Firefox,Peacock Watch Party Edge Addon,Peacock Watch Party Chrome Extension,Peacock Party Chrome,Peacock Watch Party Extension,Peacock <br/> Watch Party Addon,Peacock Party Edge,Peacock Party Firefox,Peacock TV Edge Addon,Peacock TV Firefox Addon,Peacock TV Chrome Extension
            </p>
          </div>
          <ul>
            <li className="inline-block pl-4">
              <Link target="blank" href="https://www.facebook.com/peac0ck.watch.party/" className="hover:text-yellow-500">
                <BsFacebook size={25} />
              </Link>
            </li>
            <li className="inline-block pl-6">
              <Link target="blank" href="https://www.instagram.com/peacock_watch_party?igsh=MWh3eWQzanBxYnJiZA==" className="hover:text-yellow-500">
                <FaInstagram size={25} />
              </Link>
            </li>
          </ul>
          <ul className="pt-6">
            <li>
              <Link href="/privacy-policy">Privacy Policy</Link>
            </li>
            <li>
              <Link href="/support">Contact Us</Link>
            </li>
          </ul>

          <div className={styles.copyright}>
            <p>© Copyright {new Date().getFullYear()}, All Rights Reserved</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

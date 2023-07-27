"use client";

import React, { useState } from "react";
import styles from "../styles/accordian.module.scss";
import Button from "../components/Button";
import Image from "next/image";

const questions = [
  {
    id: 1,
    ques: "How to do a watch party?",
    ans: "How to do a watch party?",
  },
  {
    id: 2,
    ques: "Does Peacock have a watch party?",
    ans: "Yes, in this extension you can stream together with your friends, where you will get unlimited options of movies and series. ",
  },
  {
    id: 3,
    ques: "How to host a watch party?",
    ans: "It’s just you need to install the extension. Then log in with your valid account, iinvite your close ones and choose a movie or show to see with them and join the synchronized viewing experience.",
  },
  {
    id: 4,
    ques: "Does peacock have shareplay?",
    ans: "Yes, it has a shared play where you can share your screen with your friends to view  the content together.",
  },
  {
    id: 5,
    ques: "How many people can watch Peacock at once?",
    ans: "A maximum of 3 people can stream from Peacock using the same account at the same time.",
  },
];

const Accordian = () => {
  const [showAnswer, setShowAnswer] = useState(null);

  const toggleAnswer = (questionId) => {
    if (showAnswer === questionId) {
      setShowAnswer(null);
    } else {
      setShowAnswer(questionId);
    }
  };

  return (
    <div className={styles.accordian}>
      <div className={styles.container}>
        <h2>FREQUENTLY ASKED QUESTION</h2>

        <ol>
          {questions.map((question) => (
            <li key={question.id} onClick={() => toggleAnswer(question.id)}>
              <div className={styles.question}>
                <p>{question.ques}</p>
                <div className={styles["image-container"]}>
                  <Image
                    src="./addLogo.svg"
                    alt="add-logo"
                    fill={true}
                    className={styles.image}
                  />
                </div>
              </div>
              {showAnswer === question.id && (
                <div
                  className={`${styles.answer} ${
                    showAnswer === question.id ? styles.active : ""
                  }`}
                >
                  <p>{question.ans}</p>
                </div>
              )}

              {/*
               */}
            </li>
          ))}
        </ol>
        <Button />
      </div>
    </div>
  );
};

export default Accordian;

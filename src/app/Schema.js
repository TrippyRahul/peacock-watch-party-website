import Script from "next/script";
import React from "react";

const Schema = () => {
  return (
    <>
      <Script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            {
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "How to do a watch party?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Firstly, download the extension and log in with your valid account. Then invite your friends to join the synchronized viewing experience online.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Does Peacock have a watch party?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes, in this extension you can stream together with your friends, where you will get unlimited options of movies and series.",
                  },
                },
                {
                  "@type": "Question",
                  name: "How to host a watch party?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "It’s just you need to install the extension. Then log in with your valid account, iinvite your close ones and choose a movie or show to see with them and join the synchronized viewing experience.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Does peacock have shareplay? ",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes, it has a shared play where you can share your screen with your friends to view  the content together.",
                  },
                },
                {
                  "@type": "Question",
                  name: "How many people can watch Peacock at once?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "A maximum of 3 people can stream from Peacock using the same account at the same time.",
                  },
                },
              ],
            },
            null,
            "\t"
          ),
        }}
        id="schema"
      />
    </>
  );
};

export default Schema;

import React from "react";
import styles from "../styles/favorite.module.scss";
import Image from "next/image";

const Favorite = () => {
  const data = [
    {
      Title: 'Step 1: Install the Peacock Watch Party Extension',
      Desc: 'The first step is to install the Peacock Watch Party extension in your browser. Click the "Install Peacock Watch Party " button available on the Peacock Watch Party website. Once installed, make sure to pin the extension for easy access.'
    },
    {
      Title: 'Step 2: Choose a Video on Peacock TV',
      Desc: "With Peacock Watch Party, head over to peacocktv.com and select the video you want to watch. When you're on the video play screen, click the Peacock Watch Party button on your browser to generate a unique link for your watch party."
    },
    {
      Title: 'Step 3: Share the Link to Your Party',
      Desc: "Send the generated link to your friends. If they still need to install the Peacock Watch Party Chrome Extension, the link will guide them through the installation process. Once everyone has the extension, they're ready to join your party."
    },
    {
      Title: 'Step 4: Watch Together',
      Desc: "After your friends have joined the watch party, start the video and enjoy the show together. Use the chat feature to interact, share reactions, and have a great time watching your favorite content on Peacock TV."
    }
  ]

  const whyPecocok = [
    {
      Title: 'Social Interaction :',
      Desc: 'Watching a show or movie with others allows for real-time interaction. You can share laughs, gasp at plot twists, and discuss the storyline as it unfolds.'
    },
    {
      Title: 'Convenience :',
      Desc: "You no longer have to wait for a physical gathering to enjoy a movie night with friends. With a watch party, everyone can join from the comfort of their own home."
    },
    {
      Title: 'Shared Experience :',
      Desc: "Watching together creates a shared experience, making it more enjoyable. It’s like having a virtual movie theater with your favorite people."
    }
  ]

  const data1 = [
    {
        heading: "Social Interaction",
        Desc: "Watching a show or movie with others allows for real-time interaction. You can share laughs, gasp at plot twists, and discuss the storyline as it unfolds."
    },
    {
        heading: "Convenience",
        Desc: "You no longer have to wait for a physical gathering to enjoy a movie night with friends. With a watch party, everyone can join from the comfort of their own home."
    },
    {
        heading: "Shared Experience",
        Desc: "Watching together creates a shared experience, making it more enjoyable. It’s like having a virtual movie theater with your favorite people."
    }
]
  return (
    <div id="how-it-works">
     <div className={styles.favorite}>
      <div className={styles.container}>
        <div className={styles.top}>
          <div className={styles.left}>
            <div className={styles["image-container"]}>
              <Image
                src="/favorite.svg"
                alt="favorite"
                fill={true}
                className={styles.image}
              />
            </div>
          </div>
          <div className={styles.right}>
            <div className={styles["left-top"]}>
              <div className={styles.headings}>
                <h2>How Does Peacock Watch Party Work?</h2>
              </div>
              <div className={styles.desc}>
                <p>
                  Getting started with Peacock Watch Party is simple. Here are the steps to host your Peacock TV watch party:
                </p>
              </div>
              <div>
                <ul>
                  {
                    data?.map((item, ind) => (
                      <li key={ind}><span className={styles.title}>{item.Title}</span> <span className={styles.installaionDesc}>{item.Desc}</span></li>
                    ))
                  }
                </ul>
              </div>
            </div>
          </div>
        </div>

        
      </div>
      
    </div>
    <>
          <div className='text-center pt-10 text-[5rem] pb-10 font-semibold text-[#DbDE07]'>Why Peacock TV Watch Party is Popular?</div>
          <div>
            <p className='text-center text-[2.3rem] w-[90%] md:w-[80%] mx-auto pb-10'>Peacock TV Watch Party has gained popularity for several reasons. They bring people together, especially those who are far apart. Here are a few reasons why people enjoy watch parties:</p>
          </div>
          <div className='bg-white w-full py-10'>

            <div className='grid grid-cols-12 md:gap-x-10 py-10 w-[80%] mx-auto'>
              {
                data1?.map((item, ind) => (
                  <div key={ind} className='p-8 col-span-12 md:col-span-6 lg:col-span-4'>
                    <div className='flex justify-center items-start flex-col pb-5'>
                      <span className='inline-block bg-[#d7d949] w-[60px] h-[3px]'></span>
                      <div className='text-center font-semibold text-black pt-5 text-[3rem]'>{item.heading}</div>
                    </div>
                    <div>
                      <p className='text-black text-[2rem] w-[80%]'>{item.Desc}</p>
                    </div>
                  </div>
                ))
              }
            </div>
          </div>
        </>
    </div>
   
  );
};

export default Favorite;

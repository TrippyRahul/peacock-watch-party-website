import React from "react";
import styles from "../styles/work.module.scss";
import Image from "next/image";

const Work = () => {
  return (
      <div className="grid grid-cols-12 pt-40 pb-10 items-center gap-x-10 w-[96%] mx-auto">
        <div className="col-span-6">
          <h2 className="text-[4rem] font-semibold text-[#DBDE07]">
            Make your own watching room within the watch party on peacock
          </h2>

          <p className="text-[2.5rem] py-10">
            In this extension, you can create your own personalized chat room,
            make an audio or video call while viewing a movie together in
            real-time. You can also customize the experience by adding fun
            emojis and reactions with others to share your thoughts on the
            entertainment.
          </p>

          <p className="text-[2.5rem]">
            So, get ready to enjoy the thrill of streaming your preferred
            content on Peacock’s vast collection. It`&apos;s a shared
            entertainment experience like no other, making memories and enjoying
            entertainment together from the comfort of your homes.
          </p>
        </div>
        <div className="col-span-6">
          <Image src={'/customize.svg'} height={200} width={200} className="w-full h-full"/>
        </div>
      </div>
  );
};

export default Work;

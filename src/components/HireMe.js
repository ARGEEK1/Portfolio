import React from "react";
import { CircularText, WhatsappIcon } from "./Icons";

const HireMe = () => {
  return (
    <div
      className="fixed left-4 bottom-4 flex flex-col items-center justify-center md:right-8 sm:right-0  overflow-hidden md:bottom-auto md:left-auto md:top-0 md:absolute z-10"
    >
      <div className="w-48 h-auto flex items-center justify-center relative md:w-24">
        <CircularText
          className={"fill-dark animate-spin-slow dark:fill-light"}
        />
        <a
          href="https://wa.link/e759qs"
          target="_blank"
          className="flex items-center justify-center
        absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-dark text-light
        shadow-md border border-solid border-dark w-16 h-16 p-2 rounded-full hover:bg-light hover:text-dark
        duration-300 dark:bg-light dark:text-dark hover:dark:border-light hover:dark:bg-dark
        hover:dark:text-light md:w-10 md:h-10 md:p-1 md:text-[10px]"
        >
          <WhatsappIcon className={"m-1"} />
        </a>
      </div>
    </div>
  );
};

export default HireMe;

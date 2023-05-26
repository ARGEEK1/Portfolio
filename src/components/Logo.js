import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const MotionLink = motion(Link);

export const Logo = () => {
  return (
    <div className="flex items-center justify-center mt-2">
      <MotionLink
        href="/"
        className="p-0.5 border-4 border-dark flex items-center justify-center text-2xl font-bold"
        whileHover={{
          // backgroundColor: ["#121212","rgba(131,58,180,1)","rgba(253,29,29,1)","rgba(252,176,69,1)","rgba(131,58,180,1)", "#121212"],
          // transition: {
          //   duration: 1,
          //   repeat: Infinity,
          // },
          scale: 1.1,
        }}
      >
        <div className="bg-dark text-light font-mono p-0.5 flex items-center justify-center">
          {"{A"}
        </div>
        <div className="bg-light text-dark font-mono p-0.5 flex items-center justify-center">
          {"R}"}
        </div>
      </MotionLink>
    </div>
  );
};

export default Logo;

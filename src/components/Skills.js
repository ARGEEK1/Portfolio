import { motion } from "framer-motion";
import React from "react";
import {
  HtmlIcon,
  ReactIcon,
  JsIcon,
  MySQLIcon,
  PostgresSQLIcon,
  NodeIcon,
  MongoDbIcon,
  NextJsIcon,
  ReduxIcon,
  ExpressJsIcon,
  TailwindIcon,
  CssIcom,
  TypeScriptIcom,
} from "./Icons";

const Skill = ({ icon, name, x, y }) => {
  return (
    <motion.div
      className="flex items-center justify-center rounded-full font-semibold bg-dark text-light
          py-3 px-6 shadow-dark cursor-pointer absolute dark:bg-light dark:text-dark lg:py-2 lg:px-4
          md:text-sm md:py-1.5 md:px-3 xs:bg-transparent xs:dark:bg-transparent xs:text-dark xs:dark:text-light
          xs:font-bold"
      whileHover={{ scale: 1.05 }}
      initial={{ x: 0, y: 0 }}
      whileInView={{ x: x, y: y, transition: { duration: 1.5 } }}
      viewport={{ once: true }}
    >
      <div className="mr-1 w-6 h-6 xs:hidden">{icon}</div>
      {name}
    </motion.div>
  );
};

const Skills = () => {
  return (
    <>
      <h2 className="font-bold text-8xl mt-64 w-full text-center md:text-6xl xs:text-4xl md:mt-32">
        Habilidades
      </h2>
      <div
        className="w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight dark:bg-circularDark
      lg:h-[80vh] sm:h-[60vh] xs:h-[50vh] lg:bg-circularLightLg lg:dark:bg-circularDarkLg md:bg-circularLightMd md:dark:bg-circularDarkMd
      sm:bg-circularLightSm sm:dark:bg-circularDarkSm"
      >
        <motion.div
          className="flex items-center justify-center rounded-full font-semibold bg-dark text-light
          p-8 shadow-dark cursor-pointer dark:bg-light dark:text-dark lg:p-6 md:p-4 xs:text-xs xs:p-2"
          whileHover={{ scale: 1.05 }}
        >
          Web
        </motion.div>
        <Skill icon={<HtmlIcon />} name="HTML" x="-20vw" y="2vw" />
        <Skill icon={<CssIcom />} name="CSS" x="1vw" y="22vw" />
        <Skill icon={<JsIcon />} name="JavaScript" x="20vw" y="6vw" />
        <Skill icon={<ReactIcon />} name="ReactJS" x="0vw" y="10vw" />
        <Skill icon={<NextJsIcon />} name="NextJS" x="-20vw" y="-15vw" />
        <Skill icon={<ReduxIcon />} name="Redux" x="15vw" y="-12vw" />
        <Skill icon={<NodeIcon />} name="NodeJS" x="32vw" y="-5vw" />
        <Skill icon={<ExpressJsIcon />} name="ExpressJS" x="0vw" y="-22vw" />
        <Skill icon={<MongoDbIcon />} name="MongoBD" x="-5vw" y="-10vw" />
        <Skill
          icon={<PostgresSQLIcon />}
          name="PostgresSQL"
          x="-20vw"
          y="20vw"
        />
        <Skill icon={<MySQLIcon />} name="MySQL" x="30vw" y="16vw" />
        <Skill icon={<ReactIcon />} name="React Native" x="-35vw" y="10vw" />
        <Skill icon={<TypeScriptIcom />} name="TypeScript" x="27vw" y="-18vw" />
        <Skill icon={<TailwindIcon />} name="TailwindCSS" x="-35vw" y="-5vw" />
      </div>
    </>
  );
};

export default Skills;

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
} from "./Icons";

const Skill = ({ icon, name, x, y }) => {
  return (
    <motion.div
      className="flex items-center justify-center rounded-full font-semibold bg-dark text-light
          py-3 px-6 shadow-dark cursor-pointer absolute dark:bg-light dark:text-dark "
      whileHover={{ scale: 1.05 }}
      initial={{ x: 0, y: 0 }}
      whileInView={{ x: x, y: y, transition: { duration: 1.5 } }}
      viewport={{ once: true }}
    >
      <div className="mr-1">{icon}</div>
      {name}
    </motion.div>
  );
};

const Skills = () => {
  return (
    <>
      <h2 className="font-bold text-8xl mt-64 w-full text-center">
        Habilidades
      </h2>
      <div className="w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight dark:bg-circularDark">
        <motion.div
          className="flex items-center justify-center rounded-full font-semibold bg-dark text-light
          p-8 shadow-dark cursor-pointer dark:bg-light dark:text-dark"
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
        <Skill
          icon={<NodeIcon className={"w-6 h-6"} />}
          name="NodeJS"
          x="32vw"
          y="-5vw"
        />
        <Skill icon={<ExpressJsIcon />} name="ExpressJS" x="0vw" y="-22vw" />
        <Skill icon={<MongoDbIcon />} name="MongoBD" x="-5vw" y="-10vw" />
        <Skill
          icon={<PostgresSQLIcon />}
          name="PostgresSQL"
          x="-25vw"
          y="18vw"
        />
        <Skill icon={<MySQLIcon />} name="MySQL" x="30vw" y="18vw" />
        <Skill icon={<TailwindIcon />} name="TailwindCSS" x="-35vw" y="-5vw" />
      </div>
    </>
  );
};

export default Skills;

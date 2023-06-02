import Link from "next/link";
import React, { useState } from "react";
import Logo from "./Logo";
import { useRouter } from "next/router";
import { GitHubIcon, LinkedInIcon, MailIcon, SunIcon, MoonIcon } from "./Icons";
import { motion } from "framer-motion";
import useThemeSwitcher from "./hooks/useThemeSwitcher";

const CustomLink = ({ href, title, className = "" }) => {
  const router = useRouter();
  return (
    <Link href={href} className={`${className} relative group`}>
      {title}
      <span
        className={`h-[1.5px] inline-block bg-dark dark:bg-light absolute left-0 -bottom-1 group-hover:w-full transition-[width] ease duration-3000 ${
          router.asPath === href ? "w-full" : "w-0"
        }`}
      >
        &nbsp;
      </span>
    </Link>
  );
};

const MotionLink = motion(Link);

const NavBar = () => {
  const [mode, setMode] = useThemeSwitcher();

  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header
      className="w-full px-32 py-8 font-medium flex items-center justify-between
    dark:text-light"
    >
      <button
        className="flex flex-col justify-center items-center"
        onClick={handleClick}
      >
        <span className="bg-dark dark:bg-light block h-0.5 w-6 rounded-sm -translate-y-0.5"></span>
        <span
          className={`bg-dark dark:bg-light block h-0.5 w-6 rounded-sm my-0.5`}
        ></span>
        <span className="bg-dark dark:bg-light block h-0.5 w-6 rounded-sm translate-y-0.5"></span>
      </button>

      <nav>
        <CustomLink href="/" title="Inicio" className="mr-4" />
        <CustomLink href="/about" title="Sobre Mí" className="mx-4" />
        <CustomLink href="/projects" title="Proyectos" className="mx-4" />
      </nav>

      <nav className="flex items-center justify-center flex-wrap">
        <motion.a
          href="https://github.com/ARGEEK1"
          target="_blank"
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.9 }}
          className="w-6 mx-3"
        >
          <GitHubIcon />
        </motion.a>
        <motion.a
          href="https://www.linkedin.com/in/antonio-rodr%C3%ADguez-toro/"
          target="_blank"
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.9 }}
          className="w-6 mx-3"
        >
          <LinkedInIcon />
        </motion.a>
        <MotionLink
          href="mailto:antonio198889@gmail.com"
          target="_blank"
          title="Contáctame"
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.9 }}
          className="w-6 mx-3"
        >
          <MailIcon />
        </MotionLink>

        <button
          onClick={() => setMode(mode === "light" ? "dark" : "light")}
          className={`ml-3 flex items-center justify-center rounded-full p-1
          ${mode === "light" ? "bg-dark text-light" : "bg-light text-dark"}
          `}
        >
          {mode === "dark" ? (
            <MoonIcon className={"fill-dark"} />
          ) : (
            <SunIcon className={"fill-dark"} />
          )}
        </button>
      </nav>

      <div className="absolute left-[50%] top-2 translate-x-[-50%]">
        <Logo />
      </div>
    </header>
  );
};

export default NavBar;

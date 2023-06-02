import React from "react";
import Layout from "./Layout";

const Footer = () => {
  return (
    <footer
      className="w-full h-auto border-t-2 border-solid border-dark font-medium text-lg
    dark:text-light dark:border-light sm:text-base"
    >
      <Layout className="py-8 flex items-center justify-between lg:flex-col lg:py-6">
        <div className="flex items-center lg:py-2">
          &copy; 2023{" "}
          <a
            href="https://github.com/ARGEEK1"
            target="_blank"
            className="underline underline-offset-2 cursor-pointer"
          >
            ARGEEK1
          </a>
        </div>
        <div className="flex items-center lg:flex-col">
          <div>
            Desarrollado con{" "}
            <span className="text-primary dark:text-primaryDark text-2xl px-1">
              &#9825;
            </span>{" "}
          </div>
          por&nbsp; Antonio Rodríguez
        </div>
      </Layout>
    </footer>
  );
};

export default Footer;

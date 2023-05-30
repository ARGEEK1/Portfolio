import React from "react";
import Layout from "./Layout";

const Footer = () => {
  return (
    <footer className="w-full h-7 border-t-2 border-solid border-dark font-medium text-lg">
      <Layout className="py-8 flex items-center justify-between">
        <span>
          &copy; 2023{" "}
          <a
            href="https://github.com/ARGEEK1"
            target="_blank"
            className="underline underline-offset-2 cursor-pointer"
          >
            ARGEEK1
          </a>
        </span>
        <div className="flex items-center">
          Desarrollado con{" "}
          <span className="text-red-700 text-2xl px-1">&#9825;</span> por&nbsp;
          Antonio Rodríguez | Full Stack Web developer
        </div>
      </Layout>
    </footer>
  );
};

export default Footer;

import { motion, useScroll } from "framer-motion";
import React, { useRef } from "react";
import LiIcon from "./LiIcon";

const Details = ({ position, company, companyLink, time, address, work }) => {
  const ref = useRef(null);

  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mt-0 w-[60%] mx-auto flex flex-col items-center justify-between"
    >
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3 className="capitalalize font-bold text-2xl">
          {position}&nbsp;
          <a
            href={companyLink}
            target="_blank"
            className="text-primary dark:text-primaryDark capitalize"
          >
            @{company}
          </a>
        </h3>
        <span className="capitalize font-medium text-dark/75 dark:text-light/75">
          {time} | {address}
        </span>
        <p className="font-medium w-full">{work}</p>
      </motion.div>
    </li>
  );
};

const Experience = () => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });

  return (
    <div className="my-64">
      <h2 className="font-bold text-8xl mb-32 w-full text-center">
        Experiencia
      </h2>

      <div ref={ref} className="w-[75%] mx-auto relative">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light"
        />

        <ul className="w-full flex flex-col items-start justify-between ml-4">
          <Details
            position="Full Stack Developer"
            company="Club Agrononomía central"
            companyLink="https://www.agronomiacentral.com/"
            time="abr. 2023 - may. 2023 · 2 meses"
            address="Buenos Aires - Argentina"
            work="En este puesto, tuve la oportunidad de colaborar estrechamente con un equipo en el diseño y desarrollo de un sitio web para un club. Fue un proyecto emocionante donde creamos una página web moderna e interactiva para los usuarios. Además, desarrollamos un dashboard administrativo con diversas funcionalidades, permitiendo gestionar el contenido del sitio de manera eficiente. También implementamos una pasarela de pago para donaciones, asegurando que los usuarios pudieran realizar contribuciones de forma segura y fácil. Fue gratificante ver cómo el sitio web y las herramientas que creamos proporcionaron una experiencia fluida y eficaz tanto para los usuarios como para el club."
          />

          <Details
            position="Teaching Assistant Full-Stack"
            company="Henry"
            companyLink="https://www.soyhenry.com/"
            time="mar. 2023 - may. 2023 · 3 meses"
            address="Buenos Aires - Argentina"
            work="Asistente de enseñanza (TA) para alumnos de Henry Full-Stack, coordinar el grupo de estudiantes con el objetivo de lograr su adaptación al programa, orientar a los estudiantes en los primeros pasos de la cursada y resolver sus inquietudes, asistir y acompañar en la resolución de ejercicios y promover la colaboración grupal (Pair Programming)."
          />

          <Details
            position="Técnico en Electrónica y Microsoldadura"
            company="iGeek Fixer"
            companyLink="https://www.agronomiacentral.com/"
            time="2019 - 2022 · 3 años"
            address="Región Metropolitana de Santiago - Chile"
            work="Diagnóstico y reparación de placas electrónicas, mantenimiento de equipos móviles, entre otros. Diagnóstico y reparación de fallas en componentes electrónicos de placas, como circuitos integrados, resistencias, capacitores y transistores. Manejo y cuidado adecuado de herramientas y equipos de trabajo, como estaciones de soldadura, microscopio, osciloscopios y multímetros entre otros."
          />
        </ul>
      </div>
    </div>
  );
};

export default Experience;

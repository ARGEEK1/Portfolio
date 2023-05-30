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
            className="text-primary capitalize"
          >
            @{company}
          </a>
        </h3>
        <span className="capitalize font-medium text-dark/75">
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
          className="absolute left-9 top-0 w-[4px] h-full bg-dark origin-top"
        />

        <ul className="w-full flex flex-col items-start justify-between ml-4">
          <Details
            position="Full Stack Developer"
            company="Club Agrononomía central"
            companyLink="https://www.agronomiacentral.com/"
            time="abr. 2023 - may. 2023 · 2 meses"
            address="Buenos Aires - Argentina"
            work="Proyecto bajo el marco de trabajo de la metodología ágil Scrum. Este proyecto exigía una página web fácil de usar, informativa y útil para los propósitos del cliente, así como también un dashboard administrativo para gestionar el contenido de la página y herramientas de visualización y control de información importante para el club. Para el desarrollo del proyecto, utilizamos tecnologías como NodeJS, Express, Jwt, MongoDB, Mongoose, Cloudinary, NextJS, Zustand y Tailwind CSS, las cuales nos permitieron crear una aplicación web sólida y eficiente."
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
            work=" Diagnóstico y reparación de placas electrónicas, mantenimiento de equipos móviles, entre otros. Diagnóstico y reparación de fallas en componentes electrónicos de placas, como circuitos integrados, resistencias, capacitores y transistores. Manejo y cuidado adecuado de herramientas y equipos de trabajo, como estaciones de soldadura, microscopio, osciloscopios y multímetros entre otros.• Diagnóstico y reparación de placas electrónicas, mantenimiento de equipos móviles, entre otros. • Diagnóstico y reparación de fallas en componentes electrónicos de placas, como circuitos integrados, resistencias, capacitores y transistores. • Manejo y cuidado adecuado de herramientas y equipos de trabajo, como estaciones de soldadura, microscopio, osciloscopios y multímetros entre otros."
          />
        </ul>
      </div>
    </div>
  );
};

export default Experience;

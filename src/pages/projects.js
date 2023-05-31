import AnimatedText from "@/components/AnimatedText";
import { GitHubIcon } from "@/components/Icons";
import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import project1 from "../../public/images/projects/project-1.png";

const FeaturedProject = ({ type, title, summary, img, link, github }) => {
  return (
    <article
      className="w-full flex items-center justify-between
    rounded-3xl border border-solid border-dark bg-light shadow-2xl p-12 relative
    rounded-br-2xl"
    >
      <div
        className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem]
      bg-dark rounded-br-3xl"
      />
      <Link
        href={link}
        target="_blank"
        className="w-1/2 cursor-pointer overflow-hidden rounded-lg"
      >
        <Image src={img} alt={title} className="w-full h-auto" />
      </Link>

      <div className="w-1/2 flex flex-col items-start justify-between pl-6">
        <span className="text-primary font-medium text-xl">{type}</span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-4xl font-bold">{title}</h2>
        </Link>
        <p className="my-2 font-medium text-dark">{summary}</p>
        <div className="mt-2 flex items-center">
          <Link href={github} target="_blank" className="w-10">
            <GitHubIcon />
          </Link>

          <Link
            href={link}
            target="_blank"
            className="ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold"
          >
            Visitar proyecto
          </Link>
        </div>
      </div>
    </article>
  );
};

const Project = ({ type, title, img, link, github }) => {
  return (
    <article
      className="w-full flex flex-col items-center justify-center rounded-2xl border border-solid border-dark
      bg-light p-6 relative"
    >
      <div
        className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem]
      bg-dark rounded-br-3xl"
      />
      <Link
        href={link}
        target="_blank"
        className="w-full cursor-pointer overflow-hidden rounded-lg"
      >
        <Image src={img} alt={title} className="w-full h-auto" />
      </Link>

      <div className="w-full flex flex-col items-start justify-between mt-4">
        <span className="text-primary font-medium text-xl">{type}</span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-3xl font-bold">{title}</h2>
        </Link>

        <div className=" w-full mt-2 flex items-center justify-between">
          <Link
            href={link}
            target="_blank"
            className="text-lg font-semibold underline"
          >
            Visitar
          </Link>

          <Link href={github} target="_blank" className="w-8">
            <GitHubIcon />
          </Link>
        </div>
      </div>
    </article>
  );
};

const projects = () => {
  return (
    <>
      <Head>
        <title>Antonio Rodríguez | Projects Page</title>
        <meta name="description" content="any description" />
      </Head>

      <main className="w-full mb-16 flex flex-col items-center justify-center">
        <Layout className="pt-16">
          <AnimatedText text="constancia e imaginación!" className="mb-16" />

          <div className="grid grid-cols-12 gap-24 gap-y-32">
            <div className="col-span-12">
              <FeaturedProject
                title="Club Agrononomía central"
                summary="Para el desarrollo del proyecto, utilizamos tecnologías como NodeJS, Express, Jwt, MongoDB, Mongoose, Cloudinary, NextJS, Zustand y Tailwind CSS."
                link="https://club-agronomia-central.vercel.app/"
                img={project1}
                github="https://github.com/Brycot/Club-Agronomia-Central"
                type="Sitios web - Aplicaciones web"
              />
            </div>

            <div className="col-span-6">
              <Project
                title="Club Agrononomía central"
                summary="Para el desarrollo del proyecto, utilizamos tecnologías como NodeJS, Express, Jwt, MongoDB, Mongoose, Cloudinary, NextJS, Zustand y Tailwind CSS."
                link="https://club-agronomia-central.vercel.app/"
                img={project1}
                github="https://github.com/Brycot/Club-Agronomia-Central"
                type="Sitios web - Aplicaciones web"
              />
            </div>

            <div className="col-span-6">
              <Project
                title="Club Agrononomía central"
                summary="Para el desarrollo del proyecto, utilizamos tecnologías como NodeJS, Express, Jwt, MongoDB, Mongoose, Cloudinary, NextJS, Zustand y Tailwind CSS."
                link="https://club-agronomia-central.vercel.app/"
                img={project1}
                github="https://github.com/Brycot/Club-Agronomia-Central"
                type="Sitios web - Aplicaciones web"
              />
            </div>

            <div className="col-span-6">
              <Project
                title="Club Agrononomía central"
                summary="Para el desarrollo del proyecto, utilizamos tecnologías como NodeJS, Express, Jwt, MongoDB, Mongoose, Cloudinary, NextJS, Zustand y Tailwind CSS."
                link="https://club-agronomia-central.vercel.app/"
                img={project1}
                github="https://github.com/Brycot/Club-Agronomia-Central"
                type="Sitios web - Aplicaciones web"
              />
            </div>

            <div className="col-span-6">
              <Project
                title="Club Agrononomía central"
                summary="Para el desarrollo del proyecto, utilizamos tecnologías como NodeJS, Express, Jwt, MongoDB, Mongoose, Cloudinary, NextJS, Zustand y Tailwind CSS."
                link="https://club-agronomia-central.vercel.app/"
                img={project1}
                github="https://github.com/Brycot/Club-Agronomia-Central"
                type="Sitios web - Aplicaciones web"
              />
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
};

export default projects;

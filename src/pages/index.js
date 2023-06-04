import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import profilePic from "../../public/images/profile/developer-pic-1.png";
import AnimatedText from "@/components/AnimatedText";
import Link from "next/link";
import { LinkArrow } from "@/components/Icons";
import HireMe from "@/components/HireMe";

export default function Home() {
  return (
    <>
      <Head>
        <title>Antonio Rodríguez | Home Page</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <main className="flex items-center text-dark w-full min-h-screen dark:text-light">
        <Layout className="pt-0 md:pt-16 sm:pt-8">
          <div className="flex items-center justify-between w-full lg:flex-col">
            <div className="w-1/2 md:w-full">
              <Image
                src={profilePic}
                alt="Antonio Rodríguez"
                className="h-auto w-[90%] lg:hidden md:inline-block md:w-full"
                priority
                sizes="(max-width: 768px) 100vw,
                (max-width: 1200px) 50vw,
                33vw"
              />
            </div>

            <div className="w-1/2 flex flex-col items-center self-center lg:w-full lg:text-center">
              <AnimatedText
                text="Transformando ideas en realidad a través del código."
                className="!text-6xl !text-left xl:!text-5xl lg:!text-center lg:!text-6xl md:!text-5xl sm:!text-3xl"
              />
              <p className="my-4 text-bese font-medium md:text-sm sm:text-xs">
                Como desarrollador full-stack, me dedico a convertir ideas en
                aplicaciones web innovadoras. Explora mis últimos proyectos para
                obtener una muestra de mi experiencia en diversas tecnologías
                del desarrollo web.
              </p>

              <div className="flex items-center self-start mt-2 lg:self-center">
                <Link
                  href="/CV_Antonio_Rodríguez.pdf"
                  target="_blank"
                  className="flex items-center bg-dark text-light p-2.5 px-6 rounded-lg
                  text-lg font-semibold hover:bg-light hover:text-dark
                  border border-solid border-transparent hover:border-dark duration-300
                  dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light
                  hover:dark:border-light md:p-2 md:px-4 md:text-base 
                  "
                  download={true}
                >
                  Descargar CV
                  <LinkArrow className={"w-6 ml-2 xs:w-7"} />
                </Link>
                <Link
                  href="mailto:antonio198889@gmail.com"
                  target="_blank"
                  className="ml-4 text-lg font-medium text-dark underline dark:text-light
                  md:text-base"
                >
                  Contacto
                </Link>
              </div>
            </div>
          </div>
        </Layout>

        <HireMe />
      </main>
    </>
  );
}

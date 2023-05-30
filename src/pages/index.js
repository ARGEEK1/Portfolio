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
      <main className="flex items-center text-dark w-full min-h-screen">
        <Layout className="pt-0">
          <div className="flex items-center justify-between w-full">
            <div className="w-1/2">
              <Image
                src={profilePic}
                alt="Antonio Rodríguez"
                className="h-auto w-[90%]"
              />
            </div>

            <div className="w-1/2 flex flex-col items-center self-center">
              <AnimatedText
                text="Transformando ideas en realidad a través de código."
                className="!text-6xl !text-left"
              />
              <p className="my-4 text-bese font-medium">
                Como desarrollador full-stack, me dedico a convertir ideas en
                aplicaciones web innovadoras. Explora mis últimos proyectos para
                obtener una muestra de mi experiencia en diversas tecnologías
                del desarrollo web.
              </p>

              <div className="flex items-center self-start mt-2">
                <Link
                  href="/CV_Antonio_Rodríguez.pdf"
                  target="_blank"
                  className="flex items-center bg-dark text-light p-2.5 px-6 rounded-lg
                  text-lg font-semibold hover:bg-light hover:text-dark
                  border border-solid border-transparent hover:border-dark duration-300"
                  download={true}
                >
                  Descargar CV
                  <LinkArrow className={"w-6 ml-2"} />
                </Link>
                <Link
                  href="mailto:antonio198889@gmail.com"
                  target="_blank"
                  className="ml-4 text-lg font-medium text-dark underline"
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

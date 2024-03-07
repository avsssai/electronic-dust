import type { MetaFunction } from "@remix-run/node";
import Header from "~/components/Header";
import { Masonry } from "~/components/Masonry";
import { easeInOut, motion } from "framer-motion";
import {
  Image10,
  Image12,
  Image13,
  Image14,
  Image15,
  Image16,
  Image18,
} from "~/components/Section";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <div className="relative min-h-screen h-screen px-8">
      <Header />
      {/* <div className="relative h-[calc(100%-72px)] max-w-lg mb-8 mx-auto lg:flex">
        <img
          src="/cameraGifMobile.gif"
          alt="camera gif"
          className="absolute w-full h-[calc(100%-72px)] top-10 rounded-xl"
        />
        <div className="absolute text-5xl text-stone-300 font-extrabold top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center ">
          Electronic <br /> Dust
        </div>
      </div> */}
      <div className="relative my-12 mx-auto flex flex-col gap-4 ">
        <div className="relative">
          <div className="absolute top-10 left-10 hidden lg:block">
            <motion.h1
              className="text-xl md:text-2xl text-black"
              initial={{ y: 100, opacity: 0.1 }}
              animate={{
                y: 0,
                opacity: 1,
                transition: { ease: easeInOut, duration: 1 },
              }}
            >
              Electronic <br />
              Dust
            </motion.h1>
            <motion.p
              className="text-slate-700"
              initial={{ y: 100, opacity: 0 }}
              animate={{
                y: 0,
                opacity: 1,
                transition: { ease: easeInOut, duration: 1, delay: 0.5 },
              }}
            >
              A documentation of reel photography.
            </motion.p>
          </div>
          <img src="/photos/image11.jpeg" alt="dog" className="rounded-lg" />
        </div>
        <Image12 />
        <Image13 />
        <Image14 />
        <Image15 />
        <Image16 />
        <Image10 />
        <Image18 />
      </div>

      <section className="mt-16">
        <Masonry />
      </section>
    </div>
  );
}

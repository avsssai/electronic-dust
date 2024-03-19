import type { MetaFunction } from "@remix-run/node";
import { Copyright } from "lucide-react";
import { Slideshow } from "~/components/Slideshow";
import { Flowers, Landscapes, imageData2 } from "~/components/imageData";
import { motion } from "framer-motion";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <div>
      <section className="bg-mainOrange h-screen relative isolate flex items-center">
        <div className="w-full aspect-video relative flex items-center justify-center max-h-screen">
          {/* <img
            src="/cameraGif.gif"
            alt="Camera gif"
            className="absolute top-0 left-0 inset-0 h-full w-full"
          /> */}
          <h1 className="text-[10vw] text-center font-display z-30 absolute text-black">
            Electronic Dust
          </h1>
        </div>
      </section>
      <div className="grid grid-cols-1 md:grid-cols-2 grid-rows-1 min-h-screen">
        <div className="py-5 px-2 flex flex-col items-center justify-center bg-peach">
          <div className="py-4 px-10">
            <img
              src="/photos/image12.jpeg"
              alt="windowsXP"
              className="object-contain max-h-[calc(100vh-72px)]"
            />
            <p className="text-center font-label mt-4 text-lg">
              The Indian Windows XP
            </p>
          </div>
        </div>
        <div className="py-5 px-2 flex flex-col items-center justify-center bg-pastelWhite">
          <div className="bg-white py-4 px-10 shadow-lg">
            <img
              src="/photos/image5.jpg"
              alt="image1"
              className="object-contain max-h-[calc(100vh-72px)]"
            />
            <p className="text-center font-label  mt-4 text-lg">
              Transcendence
            </p>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 grid-rows-1 min-h-screen">
        <div className="py-5 px-2 flex flex-col items-center bg-pastelGreen justify-center">
          <div className="bg-white p-2 md:p-4 shadow-lg">
            <img
              src="/photos/image21.jpg"
              alt="image1"
              className="object-contain max-h-[calc(100vh-72px)]"
            />
            {/* <p className="text-center font-label  mt-4 text-lg">
              Transcendence
            </p> */}
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 grid-rows-1 min-h-screen">
        <div className="py-5 px-2 flex flex-col items-center justify-center bg-pear">
          <div className="py-4 px-10">
            <img
              src="/photos/image11.jpeg"
              alt="A dog staring at the distance."
              className="object-contain max-h-[calc(100vh-72px)]"
            />
            <p className="text-center font-label mt-4 text-lg">The dog in us</p>
          </div>
        </div>
        <div className="py-5 px-2 flex flex-col items-center justify-center bg-neutral-200">
          <div className="bg-white py-4 px-10 shadow-lg">
            <img
              src="/photos/image13.jpeg"
              alt="A photo of hyderabad around the durgamcheruvu"
              className="object-contain max-h-[calc(100vh-72px)]"
            />
            <p className="text-center font-label  mt-4 text-lg">
              'Bhagya'nagaram
            </p>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 grid-rows-1 min-h-screen">
        <div className="py-5 px-2 flex flex-col items-center bg-slate-800 justify-center relative overflow-hidden">
          <Slideshow imageData={Flowers} />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 grid-rows-1 min-h-screen">
        <div className="py-5 px-2 flex flex-col items-center justify-center bg-white">
          <div className="py-4 px-10">
            <img
              src="/photos/image10.jpg"
              alt="Church"
              className="object-contain max-h-[calc(100vh-72px)]"
            />
            <p className="text-center font-label mt-4 text-lg">
              The Lord's House
            </p>
          </div>
        </div>
        <div className="py-5 px-2 flex flex-col items-center bg-black justify-center">
          <div className="bg-white py-4 px-10 shadow-lg">
            <img
              src="/photos/image15.jpg"
              alt="clouds"
              className="object-contain max-h-[calc(100vh-72px)]"
            />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 grid-rows-1 min-h-screen">
        <div className="py-5 px-2 flex flex-col items-center bg-landscape justify-center relative overflow-hidden">
          <Slideshow imageData={Landscapes} />
        </div>
      </div>
      <footer className="bg-black text-white px-15 py-10 items-center flex flex-col justify-center">
        <h1 className="flex gap-2 text-2xl items-center">
          <Copyright /> Electronic Dust
        </h1>
        <h2>{new Date().getFullYear()}</h2>
      </footer>
    </div>
  );
}

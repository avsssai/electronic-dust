import type { MetaFunction } from "@remix-run/node";
import { Copyright } from "lucide-react";
import { Slideshow } from "~/components/Slideshow";
import { imageData, imageData2 } from "~/components/imageData";
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
          <img
            src="/cameraGif.gif"
            alt="Camera gif"
            className="absolute top-0 left-0 inset-0 h-full w-full"
          />
          <h1 className="text-[10vw] text-center font-display z-30 absolute text-black">
            Electronic Dust
          </h1>
        </div>
      </section>
      <section className="flex flex-col min-h-screen md:flex-row md:h-screen ">
        <div className="flex-1 bg-peach">
          <div className="h-full px-8 py-16 md:px-16  flex items-center">
            <div className="bg-white">
              <img
                src="/photos/image11.jpeg"
                alt=""
                className="w-full p-4 object-contain"
              />
              <h3 className="text-center font-label text-xl pb-4">
                The chill dawg
              </h3>
            </div>
          </div>
        </div>
        <div className="md:flex-1 bg-white h-[50vh] md:h-[80vh] flex flex-col relative my-auto">
          <img
            src="/photos/image5.jpg"
            alt="girl watching the ocean"
            className="absolute h-full w-full object-contain py-10 px-4 "
          />
        </div>
      </section>
      <section className="flex flex-col md:flex-row md:h-screen">
        <div className="flex-1 bg-pastelWhite ">
          <div className="h-full px-8 py-16 md:px-16  flex items-center">
            <div className="bg-white">
              <img
                src="/photos/image13.jpeg"
                alt=""
                className="w-full p-4 object-contain"
              />
              <h3 className="text-center font-label text-xl pb-4">
                'Bhagya'nagaram
              </h3>
            </div>
          </div>
        </div>
        {/* <div className="flex-1 bg-bgBeige flex ">
          <img
            src="/photos/image10.jpg"
            alt="girl watching the ocean"
            className="w-full object-contain py-20 px-4"
          />
        </div> */}
        <div className="md:flex-1 bg-bgBeige h-[50vh] md:h-[100vh] flex flex-col relative my-auto">
          <img
            src="/photos/image10.jpg"
            alt="Church"
            className="absolute h-full w-full object-contain py-10 px-4 "
          />
        </div>
      </section>
      <section className="flex h-screen bg-brown justify-center items-center py-10 px-10">
        <div className="flex relative overflow-hidden justify-center items-center h-full w-full">
          <Slideshow imageData={imageData} />
        </div>
      </section>
      <section className="flex flex-col md:flex-row md:h-screen">
        <div className="flex-1 bg-pastelWhite ">
          <div className="h-full px-8 py-16 md:px-16  flex items-center">
            <div className="bg-white">
              <img
                src="/photos/image2.jpg"
                alt="black and white wall"
                className="w-full p-4 object-contain"
              />
              <h3 className="text-center font-label text-xl pb-4">
                The Wild West
              </h3>
            </div>
          </div>
        </div>
        <div className="flex-1 bg-black flex ">
          <img
            src="/photos/image15.jpg"
            alt="In the clouds"
            className="w-full object-contain py-20 px-4"
          />
        </div>
      </section>
      <section className="flex h-screen bg-peach justify-center items-center py-10 px-10">
        <div className="flex relative overflow-hidden justify-center items-center h-full w-full">
          <Slideshow imageData={imageData2} />
        </div>
      </section>
      <footer className="bg-black text-white px-15 py-10 items-center flex flex-col justify-center">
        <h1 className="flex gap-2 text-2xl items-center">
          <Copyright /> Electronic Dust
        </h1>
        <h2>{new Date().getFullYear()}</h2>
      </footer>
    </div>
  );
}

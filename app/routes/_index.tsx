import type { MetaFunction } from "@remix-run/node";
import Header from "~/components/Header";
import { Button } from "~/components/ui/button";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <div
      style={{ fontFamily: "system-ui, sans-serif" }}
      className="relative min-h-screen h-screen px-8"
    >
      <Header />
      <div className="relative h-[calc(100%-72px)] max-w-lg mb-8 mx-auto lg:flex">
        <img
          src="/cameraGifMobile.gif"
          alt="camera gif"
          className="absolute w-full h-[calc(100%-72px)] top-10 rounded-xl"
        />
        <div className="absolute text-5xl text-stone-300 font-extrabold top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center ">
          Electronic <br /> Dust
        </div>
      </div>

      <section>
        <h2 className="text-xl font-bold">Some of my shots</h2>
      </section>
    </div>
  );
}

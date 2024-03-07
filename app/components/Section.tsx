import React, { useRef } from "react";
import { useInView } from "framer-motion";

export const Image12 = ({ imagePath }: { imagePath?: string }) => {
  const ref = useRef(null);
  const isInView = useInView(ref);
  return (
    <div ref={ref}>
      <img
        src={"/photos/image12.jpeg"}
        alt="dog"
        className="rounded-lg"
        style={{
          transform: isInView ? "none" : "translateY(100px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.1s",
        }}
      />
    </div>
  );
};
export const Image13 = ({ imagePath }: { imagePath?: string }) => {
  const ref = useRef(null);
  const isInView = useInView(ref);
  return (
    <div ref={ref}>
      <img
        src={"/photos/image13.jpeg"}
        alt="dog"
        className="rounded-lg"
        style={{
          transform: isInView ? "none" : "translateY(100px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.1s",
        }}
      />
    </div>
  );
};
export const Image14 = ({ imagePath }: { imagePath?: string }) => {
  const ref = useRef(null);
  const isInView = useInView(ref);
  return (
    <div ref={ref}>
      <img
        src={"/photos/image14.jpg"}
        alt="dog"
        className="rounded-lg"
        style={{
          transform: isInView ? "none" : "translateY(100px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.1s",
        }}
      />
    </div>
  );
};
export const Image15 = ({ imagePath }: { imagePath?: string }) => {
  const ref = useRef(null);
  const isInView = useInView(ref);
  return (
    <div ref={ref}>
      <img
        src={"/photos/image15.jpg"}
        alt="dog"
        className="rounded-lg"
        style={{
          transform: isInView ? "none" : "translateY(100px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.1s",
        }}
      />
    </div>
  );
};
export const Image16 = ({ imagePath }: { imagePath?: string }) => {
  const ref = useRef(null);
  const isInView = useInView(ref);
  return (
    <div ref={ref}>
      <img
        src={"/photos/image16.jpg"}
        alt="dog"
        className="rounded-lg"
        style={{
          transform: isInView ? "none" : "translateY(100px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.1s",
        }}
      />
    </div>
  );
};
export const Image10 = ({ imagePath }: { imagePath?: string }) => {
  const ref = useRef(null);
  const isInView = useInView(ref);
  return (
    <div ref={ref}>
      <img
        src={"/photos/image10.jpg"}
        alt="dog"
        className="rounded-lg"
        style={{
          transform: isInView ? "none" : "translateY(100px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.1s",
        }}
      />
    </div>
  );
};
export const Image18 = ({ imagePath }: { imagePath?: string }) => {
  const ref = useRef(null);
  const isInView = useInView(ref);
  return (
    <div ref={ref}>
      <img
        src={"/photos/image18.jpg"}
        alt="dog"
        className="rounded-lg"
        style={{
          transform: isInView ? "none" : "translateY(100px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.1s",
        }}
      />
    </div>
  );
};

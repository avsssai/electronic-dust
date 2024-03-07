import { motion, useInView, useAnimation, Variants } from "framer-motion";
import { useEffect, useRef } from "react";
export const Masonry = () => {
  const ref = useRef(null);
  const isInView = useInView(ref);
  const controls = useAnimation();
  useEffect(() => {
    controls.start("show");
    console.log(isInView);
  }, [isInView]);
  const animateVariants: Variants = {
    hidden: {
      opacity: 0,
      x: -200,
    },
    show: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1,
      },
    },
  };
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      <motion.div
        className="grid gap-4"
        variants={animateVariants}
        initial="hidden"
        animate="show"
        ref={ref}
      >
        <div className="relative">
          <img
            className="h-auto max-w-full rounded-lg"
            src="/photos/image1.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            className="h-auto max-w-full rounded-lg"
            src="/photos/image2.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            className="h-auto max-w-full rounded-lg"
            src="/photos/image19.jpg"
            alt=""
          />
        </div>
      </motion.div>
      <motion.div
        className="grid gap-4"
        initial={{
          opacity: 0,
          x: -20,
        }}
        animate={{
          opacity: 1,
          x: 0,
          transition: { duration: 1, delay: 0.3 },
        }}
      >
        <div>
          <img
            className="h-auto max-w-full rounded-lg"
            src="/photos/image4.jpg"
            alt=""
          />
          {/* <img
            src="/cameraGifMobile.gif"
            alt="camera gif"
            className="h-[200px] max-w-full rounded-lg"
          />
          <div className="absolute text-5xl text-stone-300 font-extrabold top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center ">
            Electronic <br /> Dust
          </div> */}
        </div>
        <div>
          <img
            className="h-auto max-w-full rounded-lg"
            src="/photos/image5.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            className="h-auto max-w-full rounded-lg"
            src="/photos/image6.jpg"
            alt=""
          />
        </div>
      </motion.div>
      <motion.div
        className="grid gap-4"
        initial={{
          opacity: 0,
          x: -20,
        }}
        animate={{
          opacity: 1,
          x: 0,
          transition: { duration: 1, delay: 0.5 },
        }}
      >
        <div>
          <img
            className="h-auto max-w-full rounded-lg"
            src="/photos/image7.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            className="h-auto max-w-full rounded-lg"
            src="/photos/image8.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            className="h-auto max-w-full rounded-lg"
            src="/photos/image9.jpg"
            alt=""
          />
        </div>
      </motion.div>
      <motion.div
        className="grid gap-4"
        initial={{
          opacity: 0,
          x: -20,
        }}
        animate={{
          opacity: 1,
          x: 0,
          transition: { duration: 1, delay: 0.6 },
        }}
      >
        <div>
          <img
            className="h-auto max-w-full rounded-lg"
            src="/photos/monkeys.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            className="h-auto max-w-full rounded-lg"
            src="/photos/image20.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            className="h-auto max-w-full rounded-lg"
            src="/photos/image3.jpg"
            alt=""
          />
        </div>
      </motion.div>
    </div>
  );
};

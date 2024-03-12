import { AnimatePresence, Variants, motion, spring } from "framer-motion";
import React from "react";
import { wrap } from "@popmotion/popcorn";
import { imageData } from "./imageData";
import { ArrowLeftCircleIcon, ArrowRightCircle } from "lucide-react";

const variants: Variants = {
  enter: (direction: number) => {
    return {
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    };
  },
  center: {
    opacity: 1,
    zIndex: 1,
    x: 0,
  },
  exit: (direction: number) => {
    return {
      opacity: 0,
      x: direction < 0 ? 1000 : -1000,
      zIndex: 0,
    };
  },
};

const swipeConfidenceThreshold = 10000;
const swipePower = (offset: number, velocity: number) => {
  return Math.abs(offset) * velocity;
};

export const Slideshow = ({ imageData }: { imageData: string[] }) => {
  const [[page, direction], setPage] = React.useState([0, 0]);
  const imageIndex = wrap(0, imageData.length, page);
  const paginate = (newDirection: number) => {
    setPage([page + newDirection, newDirection]);
  };

  return (
    <>
      <AnimatePresence initial={false} custom={direction}>
        <motion.img
          className="absolute h-full w-full object-contain aspect-auto"
          key={page}
          src={imageData[imageIndex]}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 },
          }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={1}
          onDragEnd={(e, { offset, velocity }) => {
            const swipe = swipePower(offset.x, velocity.x);
            if (swipe < -swipeConfidenceThreshold) {
              paginate(1);
            } else {
              paginate(-1);
            }
          }}
        />
      </AnimatePresence>
      <div
        className="absolute top-[50% - 20px] right-1 z-10 w-5 h-5 bg-white rounded-full text-2xl flex items-center justify-center leading-4"
        onClick={() => paginate(1)}
      >
        <ArrowRightCircle />
      </div>
      <div
        className="absolute top-[calc(50% - 20px)] left-1 z-10 w-5 h-5 bg-white rounded-full text-2xl flex items-center justify-center leading-4"
        onClick={() => paginate(-1)}
      >
        <ArrowLeftCircleIcon />
      </div>
      <div className="text-2xl z-10 text-white text-end mt-auto">
        {imageIndex + 1}/{imageData.length}
      </div>
    </>
  );
};

import { Image } from "./Image";

export const Masonry = () => {
  return (
    // <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-2">
    //   <Image src="/photos/image1.jpg" alt="image1" />
    //   <Image src="/photos/image2.jpg" alt="image2" />
    //   <Image src="/photos/image3.jpg" alt="image1" />
    //   <Image src="/photos/image4.jpg" alt="image1" />
    //   <Image src="/photos/image5.jpg" alt="image1" />
    //   <Image src="/photos/image6.jpg" alt="image1" />
    //   <Image src="/photos/image7.jpg" alt="image1" />
    //   <Image src="/photos/image8.jpg" alt="image1" />
    //   <Image src="/photos/image9.jpg" alt="image1" />
    // </div>

    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      <div className="grid gap-4">
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
            src="/photos/image3.jpg"
            alt=""
          />
        </div>
      </div>
      <div className="grid gap-4">
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
      </div>
      <div className="grid gap-4">
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
      </div>
      <div className="grid gap-4">
        <div>
          <img
            className="h-auto max-w-full rounded-lg"
            src="/photos/image1.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            className="h-auto max-w-full rounded-lg"
            src="/photos/image1.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            className="h-auto max-w-full rounded-lg"
            src="/photos/image1.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

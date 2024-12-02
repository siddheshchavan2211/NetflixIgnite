import React, { useEffect, useState } from "react";
import Header from "./Header";

const images = [
  "https://assets.nflxext.com/ffe/siteui/vlv3/8e8ff9d3-17b4-4ce1-b571-06ba4e025cca/web_auto_scroll/IN-en-20241125-TRIFECTA-1bc613d1-6f02-44e9-942d-b871f9343b86_large.jpg",
  // Repeat or add more images as needed
];

const EntryPage = () => {
  const [position, setPosition] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    if (!isPlaying) return;

    const imageWidth = 100;
    const moveImage = setInterval(() => {
      setPosition((prevPosition) => {
        return prevPosition <= -imageWidth ? 0 : prevPosition - 0.1;
      });
    }, 50); // Adjust this interval for speed

    return () => clearInterval(moveImage);
  }, [isPlaying]);

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="bg-gradient-to-r from-dark-start to-dark-end h-full bg-black text-white">
      <div className=" h-full min-h-full">
        <Header />
        <div className="pt-24 mx-12 ">
          {/* Container */}
          <div className="relative overflow-hidden  w-full   border-white-700 border-t-2 border rounded-3xl h-[35rem] ">
            {/* Scrolling strip */}
            <div
              className="absolute flex h-full"
              style={{
                transform: `translateX(${position}%)`,
                transition: "transform 0.1s linear",
              }}
            >
              {images.map((src, index) => (
                <img
                  key={index}
                  className="w-full h-full object-cover"
                  src={src}
                  alt={`scrolling-img-${index}`}
                  style={{ minWidth: "100%" }}
                />
              ))}
              {images.map((src, index) => (
                <img
                  key={`duplicate-${index}`}
                  className="w-full h-full object-cover"
                  src={src}
                  alt={`scrolling-img-duplicate-${index}`}
                  style={{ minWidth: "100%" }}
                />
              ))}
            </div>
            {/* Overlay Text */}

            <div className="absolute inset-0 flex flex-col justify-center items-center text-white bg-black bg-opacity-50">
              <h1 className="text-4xl font-bold">
                Unlimited movies, TV shows and more
              </h1>
              <p className="text-lg mt-4">
                Starts at ₹149. Cancel at any time.
              </p>
            </div>
            {/* Play/Pause Button */}
            <button
              onClick={handlePlayPause}
              className="absolute bottom-4 right-4 bg-white text-black px-4 py-2 rounded-full shadow-lg focus:outline-none"
            >
              {isPlaying ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="size-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M15.75 5.25v13.5m-7.5-13.5v13.5"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
        <h1>idsgjsssssssssssssssssss</h1>
        <h1>idsgjsssssssssssssssssss</h1>
        <h1>idsgjsssssssssssssssssss</h1>
        <h1>idsgjsssssssssssssssssss</h1>
        <h1>idsgjsssssssssssssssssss</h1>
        <h1>idsgjsssssssssssssssssss</h1>
        <h1>idsgjsssssssssssssssssss</h1>
        <div className="pb-96"></div>
      </div>
    </div>
  );
};

export default EntryPage;

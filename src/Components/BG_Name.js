import React from "react";

const BG_Name = ({ title, desc }) => {
  return (
    <div className="absolute right-0 top-0 aspect-video w-full bg-opacity-90 bg-gradient-to-r from-black pl-6 pt-20 text-white md:pl-24 md:pt-72">
      <div className="group inline">
        {/* Title */}
        <h1 className="inline cursor-pointer bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-xs font-bold uppercase tracking-wide text-transparent text-white md:text-6xl">
          {title}
        </h1>

        {/* Description (Initially hidden) */}
        <p className="hidden w-1/4 group-hover:block">{desc}</p>
      </div>

      <div className="flex">
        <button className="mt-4 flex justify-between rounded-md bg-white px-2 font-semibold text-black hover:bg-slate-300 md:px-6 md:py-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="black"
            className="mr-2 mt-2 size-4 md:mt-0 md:size-6"
          >
            <path
              fillRule="evenodd"
              d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z"
              clipRule="evenodd"
            />
          </svg>
          {""}
          Play
        </button>
        <button className="mt-4 hidden justify-between rounded-md bg-slate-500 bg-opacity-50 px-3 py-1 font-semibold text-white hover:bg-slate-400 md:ml-6 md:flex md:px-6 md:py-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="mr-2 mt-2 size-4 md:mt-0 md:size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z"
            />
          </svg>
          {""}
          More Info
        </button>
      </div>
    </div>
  );
};

export default BG_Name;

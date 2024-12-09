import React from "react";

const BG_Name = ({ title, desc }) => {
  return (
    <div className="w-full   aspect-video bg-gradient-to-r from-black bg-opacity-90 top-0 right-0 absolute text-white  pt-72 pl-24 ">
      <div className="inline group ">
        {/* Title */}
        <h1 className="font-bold text-6xl cursor-pointer inline text-white tracking-wide uppercase bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
          {title}
        </h1>

        {/* Description (Initially hidden) */}
        <p className="w-1/4 hidden group-hover:block">{desc}</p>
      </div>

      <div className="flex ">
        <button className="px-6 py-2 bg-white text-black flex font-semibold justify-between rounded-md mt-4 hover:bg-slate-300">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="black"
            className="size-6 mr-2"
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
        <button className=" ml-6 px-6 py-2 bg-slate-500 bg-opacity-50 text-white flex font-semibold justify-between rounded-md mt-4 hover:bg-slate-400">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6 mr-2"
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

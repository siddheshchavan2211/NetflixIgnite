import React from "react";
import GeneresCards from "./GeneresCards";
const GeneresMovies = ({ nowplaying, title }) => {
  // console.log(nowplaying);

  //   const { poster_path } = nowplaying[0];
  //   console.log(poster_path);
  return (
    <div className="mx-10">
      <h1 className="text-white text-3xl my-6">{title}</h1>

      <div className=" flex gap-4 overflow-x-scroll scrollbar-hide">
        {nowplaying.map((path) => (
          <GeneresCards key={path.id} poster_path={path.poster_path} />
        ))}
      </div>
    </div>
  );
};

export default GeneresMovies;

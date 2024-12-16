import React from "react";
import GeneresCards from "./GeneresCards";
import { Link } from "react-router-dom";
const GeneresMovies = ({ nowplaying, title }) => {
  // console.log(nowplaying, "123");

  //   const { poster_path } = nowplaying[0];
  //   console.log(poster_path);
  return (
    <div className="mx-10">
      <h1 className="my-6 text-sm text-white md:text-3xl">{title}</h1>

      <div className="flex gap-4 overflow-x-scroll scrollbar-hide">
        {nowplaying.map((path) => (
          <Link
            key={path.id}
            className="flex-shrink-0"
            to={`stream/${path.id}`}
          >
            {" "}
            <GeneresCards poster_path={path.poster_path} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default GeneresMovies;

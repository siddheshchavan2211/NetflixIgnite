import React from "react";
import { Image_Path } from "../Utils/Constants";

const GeneresCards = ({ poster_path }) => {
  //   console.log(poster_path);
  if (!poster_path) return null;
  return (
    <div className="flex-shrink-0">
      <img
        className="object-fit h-60 w-72"
        src={Image_Path + poster_path}
        alt="card-img"
      />
    </div>
  );
};

export default GeneresCards;

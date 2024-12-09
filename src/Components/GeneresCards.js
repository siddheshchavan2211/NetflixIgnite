import React from "react";
import { Image_Path } from "../Utils/Constants";

const GeneresCards = ({ poster_path }) => {
  //   console.log(poster_path);
  return (
    <div className="flex-shrink-0">
      <img
        className="w-72 h-60 object-fit"
        src={Image_Path + poster_path}
        alt="card-img"
      />
    </div>
  );
};

export default GeneresCards;

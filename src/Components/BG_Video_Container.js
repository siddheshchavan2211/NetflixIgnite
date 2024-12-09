import React from "react";
import BG_Video from "./BG_Video";
import BG_Name from "./BG_Name";
import { useSelector } from "react-redux";
const BG_Video_Container = () => {
  const movies = useSelector((store) => store?.movies?.storeMoviesData);
  if (!movies) return null;
  const Bgmovie = movies[0];
  const { original_title, overview, id } = Bgmovie;
  //   console.log(Bgmovie);
  return (
    <div>
      <BG_Name title={original_title} desc={overview} />

      <BG_Video id={id} />
    </div>
  );
};

export default BG_Video_Container;

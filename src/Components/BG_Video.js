import React, { useEffect, useState } from "react";
import NowPlayingMovies from "../Hooks/useNowPlayingMovies";
import { TMDB_AUTHORIZATION } from "../Utils/Constants";

const BG_Video = ({ id }) => {
  //   NowPlayingMovies();
  const [video, setvideo] = useState([]);
  useEffect(() => {
    Getvideobyid();
  }, []);
  const Getvideobyid = async () => {
    const respnse = await fetch(
      `https://api.themoviedb.org/3/movie/${id}/videos  `,
      TMDB_AUTHORIZATION
    );
    const data = await respnse.json();
    // console.log(data);
    const FilterMovieTrailer = data.results.filter(
      (mov) => mov.type === "Trailer"
    );
    const MovieTrailer = FilterMovieTrailer.length
      ? FilterMovieTrailer[0]
      : data.results[0];
    setvideo(MovieTrailer.key);
    console.log(MovieTrailer.key);
  };
  return (
    <div>
      {/* <iframe
        className="w-full h-[600px]"
        src={`https://www.youtube.com/embed/"${video}`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        frameBorder="0"
      ></iframe> */}
      <iframe
        className="w-full h-[600px]"
        src={`https://www.youtube.com/embed/${video}?autoplay=1&mute=1`}
        // src="https://www.youtube.com/embed/bL6dJjxm0x0?si=DrN-OL9CZtniHAm2"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};

export default BG_Video;

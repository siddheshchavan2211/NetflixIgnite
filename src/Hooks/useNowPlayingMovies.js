import { useEffect } from "react";
import { TMDB_AUTHORIZATION } from "../Utils/Constants";

const NowPlayingMovies = (id) => {
  useEffect(() => {
    Getvideobyid();
  }, []);
  const Getvideobyid = async () => {
    const respnse = await fetch(
      `https://api.themoviedb.org/3/movie/${id}/videos  `,
      TMDB_AUTHORIZATION
    );
    const data = await respnse.json();
    console.log(data);
  };
  return <div></div>;
};
export default NowPlayingMovies;

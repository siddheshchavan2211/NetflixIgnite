import { useEffect } from "react";
import { TMDB_AUTHORIZATION } from "../Utils/Constants";
import { Bgmovierunning } from "../Utils/MoviesSlice";
import { useDispatch } from "react-redux";

const NowPlayingMovies = (id) => {
  const dispatch = useDispatch();
  useEffect(() => {
    Getvideobyid();
  }, []);
  const Getvideobyid = async () => {
    const respnse = await fetch(
      `https://api.themoviedb.org/3/movie/${id}/videos  `,
      TMDB_AUTHORIZATION
    );
    const data = await respnse.json();
    const FilterMovieTrailer = data.results.filter(
      (mov) => mov.type === "Trailer"
    );
    const MovieTrailer = FilterMovieTrailer.length
      ? FilterMovieTrailer[0]
      : data.results[0];
    dispatch(Bgmovierunning(MovieTrailer));
    // console.log(MovieTrailer.key);
  };
};
export default NowPlayingMovies;

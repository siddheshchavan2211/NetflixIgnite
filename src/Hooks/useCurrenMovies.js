import { useEffect } from "react";
import { TMDB_AUTHORIZATION } from "../Utils/Constants";
import { useDispatch, useSelector } from "react-redux";
import { nowplayingmovies } from "../Utils/MoviesSlice";

export const Currentplayingmovies = () => {
  const dispatch = useDispatch();
  const memorization = useSelector((store) => store.movies.storeMoviesData);

  const fetchMovieDetails = async () => {
    try {
      const response = await fetch(
        "https://api.themoviedb.org/3/movie/now_playing?&page=1",
        TMDB_AUTHORIZATION,
      );
      const data = await response.json();
      // console.log(data.results);
      dispatch(nowplayingmovies(data.results));
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  useEffect(() => {
    !memorization && fetchMovieDetails();
  }, []);
};

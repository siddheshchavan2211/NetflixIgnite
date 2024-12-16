import { useEffect } from "react";
import { TMDB_AUTHORIZATION } from "../Utils/Constants";
import { useDispatch, useSelector } from "react-redux";
import { Trendingmovie } from "../Utils/MoviesSlice";

export const Trendingmovies = () => {
  const dispatch = useDispatch();
  const memorization = useSelector((store) => store.movies.Trending);

  const fetchMovieDetails = async () => {
    try {
      const response = await fetch(
        "https://api.themoviedb.org/3/trending/movie/day?language=en-IN",
        TMDB_AUTHORIZATION,
      );
      const data = await response.json();
      // console.log(data.results);
      dispatch(Trendingmovie(data.results));
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    !memorization && fetchMovieDetails();
  }, []);
};

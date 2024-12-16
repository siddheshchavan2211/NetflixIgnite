import { useEffect } from "react";
import { TMDB_AUTHORIZATION } from "../Utils/Constants";
import { useDispatch, useSelector } from "react-redux";
import { Upcomingmovie } from "../Utils/MoviesSlice";

export const Upcomingmovies = () => {
  const dispatch = useDispatch();
  const memorization = useSelector((store) => store.movies.upcoming);

  useEffect(() => {
    !memorization && fetchMovieDetails();
  }, []);

  const fetchMovieDetails = async () => {
    try {
      const response = await fetch(
        "https://api.themoviedb.org/3/movie/upcoming?&page=1",
        TMDB_AUTHORIZATION,
      );
      const data = await response.json();
      // console.log(data.results);
      dispatch(Upcomingmovie(data.results));
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
};

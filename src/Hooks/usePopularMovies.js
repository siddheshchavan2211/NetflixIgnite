import { useEffect } from "react";
import { TMDB_AUTHORIZATION } from "../Utils/Constants";
import { useDispatch } from "react-redux";
import { Popularmovies } from "../Utils/MoviesSlice";

export const Populargmovies = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const response = await fetch(
          "https://api.themoviedb.org/3/movie/popular?&page=1",
          TMDB_AUTHORIZATION
        );
        const data = await response.json();
        console.log(data.results);
        dispatch(Popularmovies(data.results));
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchMovieDetails();
  }, []);
};

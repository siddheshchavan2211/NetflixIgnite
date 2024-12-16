import React from "react";
import GeneresMovies from "./GeneresMovies";
import { useSelector } from "react-redux";
{
  /** first make main containeer then add in it current movies(horror,comedy etc)and in it another card component
    now playing is in store so useselector then pass nowplaying movies as props to comp
    then destructure poster and title from it and pass to card comp and then first print one card and then map on it 
    
    */
}
const MovieSuggContainer = () => {
  const nowplaying = useSelector((store) => store.movies);
  if (!nowplaying) return;
  const popular = nowplaying.popMovies;
  const upcoming = nowplaying.upcoming;
  const Trending = nowplaying.Trending;
  return (
    nowplaying.storeMoviesData &&
    popular &&
    upcoming &&
    Trending && (
      <div className="bg-black">
        <div className="relative z-20 md:-mt-64">
          <GeneresMovies
            title={"Now Playing"}
            nowplaying={nowplaying.storeMoviesData}
          />
          <GeneresMovies title={"Trending"} nowplaying={Trending} />

          <GeneresMovies title={"Popular"} nowplaying={popular} />
          <GeneresMovies title={"UpComing"} nowplaying={upcoming} />

          <GeneresMovies title={"Sci-Fi"} nowplaying={upcoming} />
          <GeneresMovies title={"Horror"} nowplaying={nowplaying.popMovies} />
        </div>
      </div>
    )
  );
};

export default MovieSuggContainer;

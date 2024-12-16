import Header from "./Header";
import BG_Video_Container from "./BG_Video_Container";
import { Currentplayingmovies } from "../Hooks/useCurrenMovies";
import MovieSuggContainer from "./MovieSuggContainer";
import { Populargmovies } from "../Hooks/usePopularMovies";
import { Upcomingmovies } from "../Hooks/useUpcomingMovies";
import { Trendingmovies } from "../Hooks/useTrending";
import GptSuggestion from "./GptSuggestion";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
/**on browse page there will two containers
 * bg-video container
 * background video
 * title descrption  on video
 * moviessuggestion container
 * list of movies
 * cards for the movies
 */

const Main = () => {
  const TogglePage = useSelector((store) => store?.gpt.ToggleGpt);
  Currentplayingmovies();
  Populargmovies();
  Upcomingmovies();
  Trendingmovies();
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Header />
      <div className="">
        {TogglePage ? (
          <GptSuggestion />
        ) : (
          <>
            <BG_Video_Container />
            <MovieSuggContainer />
          </>
        )}
      </div>
    </div>
  );
};

export default Main;

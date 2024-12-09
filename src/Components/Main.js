import Header from "./Header";
import BG_Video_Container from "./BG_Video_Container";
import { Currentplayingmovies } from "../Hooks/useCurrenMovies";
import MovieSuggContainer from "./MovieSuggContainer";
import { Populargmovies } from "../Hooks/usePopularMovies";
import { Upcomingmovies } from "../Hooks/useUpcomingMovies";
import { Trendingmovies } from "../Hooks/useTrending";
/**on browse page there will two containers
 * bg-video container
 * background video
 * title descrption  on video
 * moviessuggestion container
 * list of movies
 * cards for the movies
 */

const Main = () => {
  Currentplayingmovies();
  Populargmovies();
  Upcomingmovies();
  Trendingmovies();
  return (
    <div className="bg-gray-900 min-h-screen text-white">
      <Header />
      <div className="">
        <BG_Video_Container />
        <MovieSuggContainer />
      </div>
    </div>
  );
};

export default Main;

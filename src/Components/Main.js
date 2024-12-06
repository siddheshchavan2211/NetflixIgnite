import Header from "./Header";
import BG_Video_Container from "./BG_Video_Container";
import { Currentplayingmovies } from "../Hooks/useCurrenMovies";
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
  return (
    <div className="flex flex-col h-screen">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <div className="flex-grow flex items-center justify-center">
        <div className="text-center text-lg font-semibold">
          <BG_Video_Container />
        </div>
      </div>
    </div>
  );
};

export default Main;

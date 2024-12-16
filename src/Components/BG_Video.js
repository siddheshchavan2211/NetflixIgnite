import NowPlayingMovies from "../Hooks/useNowPlayingMovies";
import { useSelector } from "react-redux";

const BG_Video = ({ id }) => {
  NowPlayingMovies(id);

  const ID = useSelector((store) => store.movies.storeBGMovie);
  if (!ID) return null;

  return (
    <div className="aspect-video h-full w-full md:-mt-12">
      <iframe
        className="aspect-video w-full"
        src={`https://www.youtube.com/embed/${ID.key}?autoplay=1&mute=1`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};

export default BG_Video;

import { useParams } from "react-router-dom";
import BG_Video from "./BG_Video";
import { useSelector } from "react-redux";

const StreamingPage = () => {
  const { id } = useParams();
  const stream = useSelector((store) => store.movies.storeMoviesData);
  if (!stream) return null;
  //   console.log(stream, "stream");
  const trailer = stream.find((trail) => String(trail.id) === String(id));
  if (!trailer) {
    return <div>Movie Not Found</div>;
  }
  //   console.log(trailer);

  return (
    <>
      <div>
        <BG_Video id={id} />
        <div className="container mx-auto px-4 py-8">
          <div className="rounded-lg bg-white p-6 shadow-lg">
            <h1 className="mb-4 text-3xl font-semibold text-gray-800">
              {trailer.original_title}
            </h1>
            <p className="mb-2 text-lg text-gray-600">
              <span className="font-bold text-gray-800">Release Date: </span>
              {trailer.release_date}
            </p>

            <p className="text-md mb-4 text-gray-600">
              <span className="font-bold text-gray-800">Overview: </span>
              {trailer.overview}
            </p>

            <div className="mb-4">
              <p className="text-lg text-gray-600">
                <span className="font-bold text-gray-800">Rating: </span>
                {trailer.vote_average}
              </p>
            </div>

            <p className="text-lg text-gray-600">
              <span className="font-bold text-gray-800">Language: </span>
              {trailer.original_language}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
export default StreamingPage;

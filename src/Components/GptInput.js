import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { language } from "../Utils/LanguageConstants";
import { Hugging_Access_Token, TMDB_AUTHORIZATION } from "../Utils/Constants";
import { SearchMovies } from "../Utils/MoviesSlice";

const GptInput = () => {
  const changelang = useSelector((store) => store.gpt.language);
  const searchInput = useRef();
  const dispatch = useDispatch();
  // const GptResults = async () => {
  //   console.log(searchInput.current.value);
  //   const GptSearch =
  //     "act as movie suggestion and give results for this query:" +
  //     searchInput.current.value +
  //     "give only six movie names no description seprated by comma";
  //   const chatCompletion = await client.chat.completions.create({
  //     messages: [{ role: "user", content: GptSearch }],
  //     model: "gpt-3.5-turbo",
  //   });
  //   const json = chatCompletion.json();
  //   console.log(json.content);
  // };
  // const GptResults = async () => {
  //   const apiKey = ""; // Your Hugging Face API key

  //   const GptSearch =
  //     "act as a movie suggestion bot and give results for this query: " +
  //     searchInput.current.value +
  //     ". Give only six movie names, no description, separated by commas.";

  //   const response = await fetch(
  //     "https://api-inference.huggingface.co/models/EleutherAI/gpt-j-6B",
  //     {
  //       method: "POST",
  //       headers: {
  //         Authorization: `Bearer ${apiKey}`,
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({
  //         inputs: GptSearch,
  //         options: { wait_for_model: true }, // Ensures the model is loaded before responding
  //       }),
  //     },
  //   );

  //   const result = await response.json();
  //   console.log(result, "hello");
  // };
  const GptResults = async () => {
    // console.log(searchInput.current.value);
    const response = await fetch(
      `https://api.themoviedb.org/3/search/movie?query=${searchInput.current.value}&include_adult=false&language=en-US&page=1`,
      TMDB_AUTHORIZATION,
    );
    const data = await response.json();
    // console.log(data);
    dispatch(SearchMovies(data.results));
  };
  return (
    <div className="flex justify-center rounded-md pt-28">
      <form onClick={(e) => e.preventDefault()}>
        <input
          type="text"
          ref={searchInput}
          placeholder={language[changelang].gptplaceholder}
          className="mr-3 rounded-lg border border-black py-2 text-black placeholder:text-xs md:w-96 md:py-4 md:pl-5 md:placeholder:text-xl"
        />
        <button
          onClick={GptResults}
          className="rounded-lg bg-red-500 px-3 py-2 md:px-6 md:py-4"
        >
          {" "}
          {language[changelang].search}
        </button>
      </form>
    </div>
  );
};

export default GptInput;

import React, { useRef } from "react";
import { useSelector } from "react-redux";
import { language } from "../Utils/LanguageConstants";
import client from "../Components/openai";
import { Hugging_Access_Token } from "../Utils/Constants";
const GptInput = () => {
  const changelang = useSelector((store) => store.gpt.language);
  const searchInput = useRef();
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
  //   const apiKey = "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"; // Your Hugging Face API key

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

  return (
    <div className="flex justify-center pt-28">
      <form onClick={(e) => e.preventDefault()}>
        <input
          type="text"
          ref={searchInput}
          placeholder={language[changelang].gptplaceholder}
          className="mr-3 w-96 rounded-lg border border-black py-4 pl-5 text-black"
        />
        <button
          // onClick={GptResults}
          className="rounded-lg bg-red-500 px-6 py-4"
        >
          {" "}
          {language[changelang].search}
        </button>
      </form>
    </div>
  );
};

export default GptInput;

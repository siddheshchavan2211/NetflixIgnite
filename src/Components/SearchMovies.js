import React from "react";
import GeneresMovies from "./GeneresMovies";
import { useSelector } from "react-redux";

const SearchMovies = () => {
  const searchdata = useSelector((store) => store.movies.data);
  console.log(searchdata);
  if (!searchdata) return <h1>Loading</h1>;
  const { original_title } = searchdata[0];
  return (
    <div>
      <GeneresMovies title={original_title} nowplaying={searchdata} />
    </div>
  );
};

export default SearchMovies;

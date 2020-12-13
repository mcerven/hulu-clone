import React, { useEffect, useState } from "react";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import requests from './../../requests'
import { MovieSearchOption } from "./MovieSearchOption";

export default function SearchMovie() {
  const [input, setInput] = useState('');
  const [movies, setMovies] = useState([]);

  async function getMovies() {
    try {
      if (!input) return;

      const url = requests.getMoviesByTitle(input);
      const response = await fetch(url);
      const jsonResponse = await response.json();
      setMovies(jsonResponse.results);
    } catch(error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getMovies();
  }, [input]);

  return (
    <div className="search-movie">
      <Autocomplete
        id="search-movie"
        options={movies}
        getOptionLabel={(option) => option.title}
        style={{ width: 300 }}
        onInputChange={(e, v) => setInput(v)}
        renderInput={(params) => {
          return (
            <TextField {...params} label="Search" variant="outlined" />
          );
        }}
        renderOption={(option) => MovieSearchOption(option)} />
    </div>
  );
}

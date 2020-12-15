import React, { forwardRef, useEffect, useImperativeHandle, useState } from "react";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import requests from '../../requests'
import { MovieSearchOption } from "./MovieSearchOption";

export default forwardRef((props, ref) => {
  const [input, setInput] = useState('');
  const [movies, setMovies] = useState([]);
  let inputRef;

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

  useImperativeHandle(ref, () => ({
    focus() {
      inputRef.focus();
    }
  }))

  useEffect(() => {
    getMovies();
  }, [input]);

  return (
    <div className="movie-search" style={{ marginTop: '0.5em' }}>
      <Autocomplete
        options={movies}
        getOptionLabel={(option) => option.title}
        style={{ width: 300 }}
        onInputChange={(e, v) => setInput(v)}
        renderInput={(params) => {
          return (
            <TextField
              {...params}
              label="Search"
              variant="outlined"
              inputRef={input => { inputRef = input }} />
          );
        }}
        renderOption={(option) => MovieSearchOption(option)} />
    </div>
  );
})

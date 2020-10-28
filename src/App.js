import React, { useEffect, useState } from 'react';
import './App.css';
import Header from './components/header/Header';
import Nav from './components/nav/Nav';
import Results from './components/results/Results';
import requests from './requests';
import useLocalStorage from './hooks/useLocalStorage';

export default function App() {
  const [selectedNavItemUrl, setSelectedNavItemUrl] = useLocalStorage('selectedNavItemUrl', requests.getTrending);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    if (!selectedNavItemUrl) return;
    
    fetch(selectedNavItemUrl)
      .then(respone => respone.json())
      .then(data => {
        setMovies(data.results);
      })
      .catch(() => {
        setSelectedNavItemUrl(requests.getTrending);
      });
  }, [selectedNavItemUrl]);

  return (
    <div className="app">
      <Header />
      <div className="app__main">
        <Nav
          selectedNavItemUrl={selectedNavItemUrl}
          setSelectedNavItemUrl={setSelectedNavItemUrl} />
        <Results movies={movies} />
      </div>
    </div>
  );
}
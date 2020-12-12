import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './components/header/Header';
import Nav from './components/nav/Nav';
import MovieDetail from './components/results/movie/MovieDetail';
import Results from './components/results/Results';
import navData from './navData';

export default function App() {
  const [selectedNavItem, setSelectedNavItem] = useState(navData[0]);

  return (
    <div className="app">
      <Router>
        <Header />
        <Nav
          selectedNavItem={selectedNavItem}
          setSelectedNavItem={setSelectedNavItem} />

        <div className="app__main">
            <Switch>
              <Route path="/" exact>
                <Results
                  selectedNavItem={selectedNavItem}
                  setSelectedNavItem={setSelectedNavItem} />
              </Route>
              <Route path="/movies/:id">
                <MovieDetail />
              </Route>
            </Switch>
        </div>
      </Router>
    </div>
  );
}

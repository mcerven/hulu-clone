import React from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './components/header/Header';
import Nav from './components/nav/Nav';
import MovieDetail from './components/results/movie/MovieDetail';
import Results from './components/results/Results';
import NotFound from './components/error/NotFound';

export default function App() {
  return (
    <div className="app">
      <Router>
        <Header />
        <Nav />

        <div className="app__main">
            <Switch>
              <Route path="/movies/category/:id" component={Results} />
              <Route path="/movies/:id" component={MovieDetail} />
              <Route path="/error/404" component={NotFound} />
              <Redirect from="/" to="/movies/category/trending" />
              <Redirect path="/*" to="/error/404" />
            </Switch>
        </div>
      </Router>
    </div>
  );
}

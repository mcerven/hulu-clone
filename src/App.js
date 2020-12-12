import React, { useState } from 'react';
import './App.css';
import Header from './components/header/Header';
import Nav from './components/nav/Nav';
import Results from './components/results/Results';
import navData from './navData';

export default function App() {
  const [selectedNavItem, setSelectedNavItem] = useState(navData[0]);

  return (
    <div className="app">
      <Header />
      <div className="app__main">
        <Nav
          selectedNavItem={selectedNavItem}
          setSelectedNavItem={setSelectedNavItem} />
        <Results
          selectedNavItem={selectedNavItem}
          setSelectedNavItem={setSelectedNavItem} />
      </div>
    </div>
  );
}

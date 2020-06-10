import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import Month from './components/Month';

function App() {

  return (
    <>
      <Route exact path='/' component={Month}/>
      <Route exact path='/:year/:month' component={Month} />
    </>
  );
}

export default App;

import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import Month from './components/Month';
import Redirecter from './components/Link';

function App() {
  return (
    <>
      <Route exact path='/:year/:month' component={Month}/>
      <Route exact path='/' component={Redirecter} />
    </>
  );
}

export default App;

import React from 'react';
import { Route } from 'react-router-dom';
import Welcome from './Welcome';
import Main from './Main';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <Route exact path='/' component={Welcome} />
      <Route path='/:page' component={Main}/>
    </div>
  );
}

export default App;

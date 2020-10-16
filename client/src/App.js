import React from 'react';
import HomeScreen from './screens/HomeScreen'
import Header from './components/header'
import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div className="App">``
      <Router>
      <Header/>
      {/* <Route exact path="/home" component={HomeScreen}/> */}
      <HomeScreen/>
      </Router>
    </div>
  );
}

export default App;

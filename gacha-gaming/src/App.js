import React,{useEffect,useState} from 'react';
import axios from "axios"
import { Route, Link } from "react-router-dom"

import Homepage from "./Homepage"
import Roll from "./Roll.jsx"
import Leaderboard from "./Leaderboard"
import './App.css';

function App() {
  return (
    <div className="App">
      <Route exact path="/">
      <Homepage />
      </Route>
      <Route path="/roll">
        <Roll />
      </Route>
      <Route path="/leaderboard">
        <Leaderboard />
      </Route>
    </div>
  );
}

export default App;

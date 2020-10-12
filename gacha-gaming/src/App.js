import React,{useEffect,useState} from 'react';
import axios from "axios"

import Homepage from "./Homepage"
import Roll from "./Roll.jsx"
import './App.css';

function App() {
  // const airTablePost = async (e) => {
  //   e.preventDefault();
  //   const fields = {
  //     id
  //   }
  //   const airtableurl = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE}/gacha_gaming`
  //   await axios.post(
  //     airtableurl,
  //     { fields }, {
  //       headers: {
  //         Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_KEY}`
  //       }
  //     }
  //   )
  // }

  return (
    <div className="App">
      <Homepage />
      <Roll />
    </div>
  );
}

export default App;

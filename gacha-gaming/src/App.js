import React,{useEffect,useState} from 'react';
import axios from "axios"
import { Route } from "react-router-dom"

import Homepage from "./Homepage"
import Roll from "./Roll.jsx"
import Battle from "./Battle.jsx"
import Leaderboard from "./Leaderboard"
import Victory from "./Victory"
import Defeat from "./Defeat"

import './App.css';

function App() {
 
  const [roll, setRoll] = useState({})
  const [characterStat, setCharacterStat] = useState([])

  const randomRoll = (array) => array[Math.floor(Math.random() * array.length)];

  //upon load pull airtable data and set it to characterData
  useEffect(() => {
    const getCharacterData = async () => {
      const airtableurl = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE}/gacha_gaming`
      const response = await axios.get(airtableurl, {
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_KEY}`
        }
      })
      setCharacterStat(response.data.records)
      setRoll(randomRoll(response.data.records))
    }
    getCharacterData()

  }, [])


  return (
    <div className="App">
      
      <Route exact path="/">
      <Homepage />
      </Route>
      
      <Route path="/roll">
        <Roll roll={roll} />
      </Route>
      
      <Route path="/battle">
        <Battle roll={roll} />
      </Route>
      
      <Route path="/leaderboard">
        <Leaderboard characterStat={characterStat}/>
      </Route>

      <Route path="/victory">
        <Victory roll={roll}/>
      </Route>

      <Route path="/defeat">
        <Defeat roll={roll}/>
      </Route>
    
    </div>
  );
}

export default App;

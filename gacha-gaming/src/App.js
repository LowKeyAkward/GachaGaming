import React,{useEffect,useState} from 'react';
import axios from "axios"
import './App.css';

function App() {
  const [characterID, setCharacterID] = useState("")

  //instead of use effect set to function
  useEffect(() => {
    const getCharacterID = async () => {
      const airtableurl = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE}/gacha_gaming`
      const response = await axios.get(airtableurl, {
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_KEY}`
        }
      })
      setCharacterID(response.data.response)
    }
    getCharacterID()
  }, [])
  
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
      
    </div>
  );
}

export default App;

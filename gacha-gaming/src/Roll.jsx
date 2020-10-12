import React, { useState, useEffect } from "react"
import axios from "axios"
import { Link, Route } from "react-router-dom"

function Roll(props) {
  const [characterData, setCharacterData] = useState([])

  //upon load pull airtable data and set it to characterData
  useEffect(() => {
    const getCharacterData = async () => {
      const airtableurl = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE}/gacha_gaming`
      const response = await axios.get(airtableurl, {
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_KEY}`
        }
      })
      setCharacterData(response.data.records)
    }
    getCharacterData()
    console.log(characterData)
  }, [])

  const randomRoll = (array) => Math.floor(Math.random()*array.length)

  return (
    <div>
      {characterData.map((character) => ( 
        <h2>{character.fields.hero_name}</h2>
      ))}
      <Link to="/">Return</Link>
    </div>
  )
}

export default Roll
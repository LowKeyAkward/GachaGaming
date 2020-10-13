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

  const randomRoll = (array) => Math.floor(Math.random() * array.length)
  let hero = randomRoll(characterData)
  console.log(hero)

  return (
    <div>
      {characterData.map((character) => ( 
        <div>
          {/* <img src={character.fields.hero_img}></img> */}
          {character.fields.hero_name}
        </div>
      ))}
      <Link to="/">Return</Link>
    </div>
  )
}

export default Roll
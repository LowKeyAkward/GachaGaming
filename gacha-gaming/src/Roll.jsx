import React, { useState, useEffect } from "react"
import axios from "axios"

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

  let random = characterData[Math.floor(Math.random() * characterData.length)]
  console.log(random)

  return (
    <div>
      {characterData.map((character) => (
        <h2>{character.fields.hero_name}</h2>
      ))}
    </div>
  )
}

export default Roll
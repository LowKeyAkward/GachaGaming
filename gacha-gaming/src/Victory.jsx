import React, {useEffect} from "react"
import {Link} from "react-router-dom"
import axios from "axios"
import Victorysound from "./sounds/Victory.mp3"

function Victory(props) {
  
  let audio = new Audio(Victorysound)

  let integer = parseInt(props.roll.fields && props.roll.fields.victories) + 1
  let string = integer.toString()
  let characterId = props.roll.id

  useEffect(() => {
    audio.play()
  },[audio])

  const handleClick = async (e) => {
    const fields = {
      victories: string
    }
    const airtableurl = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE}/gacha_gaming/${characterId}`
    await axios.patch(
      airtableurl,
      { fields },
      {
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_KEY}`
        }
      }
    )
  }

  return (
    <div className="victory">
      <h1 className="victoryText">VICTORY</h1>
      {/* display a victory screen and push up +1 to victories */}
      <Link to="/">
        <button className="button greenButton" onClick={handleClick}>Return</button>
      </Link>
    </div>
  )
}

export default Victory
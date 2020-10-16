import React, {useEffect} from "react"
import { Link } from "react-router-dom"
import axios from "axios"
import Died from "./sounds/youDied.mp3"

function Defeat(props) {
  
  let audio = new Audio(Died)

  let integer = parseInt(props.roll.fields && props.roll.fields.defeats) + 1
  let string = integer.toString()
  let characterId = props.roll.id

  useEffect(() => {
    audio.play()
  },[audio])

  const handleClick = async (e) => {
    const fields = {
      defeats: string
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
    <div className="defeatDiv">
      <p className="defeat">YOU DIED</p>
      {/* display a defeat screen and post a +1 to Defeats */}
      <Link to="/">
        <button className="button greenButton" onClick={handleClick}>Return</button>
      </Link>
    </div>
  )
}

export default Defeat
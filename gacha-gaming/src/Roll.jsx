import React from "react"
import { Link } from "react-router-dom"

function Roll(props) {
  const refresh = () => {
    window.location.reload(false)
  }

  if (!props.roll.fields) {
    return null
  }

  return (
    <div>
      
      <img className="rollImage rollGlitch" src={props.roll.fields.hero_img} alt={props.roll.fields.hero_name} ></img>
      
      <p className="rollGlitch">{props.roll.fields.hero_name}</p>
      
      <Link to="/battle">
        <button className="button redButton">Battle</button>
      </Link>

      <button className="button blueButton" onClick={refresh} >Summon</button>
      
      <Link to="/">
        <button className="button plainButton">Return</button>
      </Link>
    
    </div>
  )
}

export default Roll
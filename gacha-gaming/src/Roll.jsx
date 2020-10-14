import React from "react"
import { Link } from "react-router-dom"

function Roll(props) {

  if (!props.roll.fields) {
    return null
  }

  return (
    <div>
      <img className="rollImage" src={props.roll.fields.hero_img} alt={props.roll.fields.hero_name} ></img>
      <p>{props.roll.fields.hero_name}</p>
      <Link to="/battle">
        <button>Battle</button>
       </Link>
      <Link to="/">
        <button>Return</button>
      </Link>
    </div>
  )
}

export default Roll
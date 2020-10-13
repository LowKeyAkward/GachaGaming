import React, { useState, useEffect } from "react"
import axios from "axios"
import { Link, Route } from "react-router-dom"

function Roll(props) {

  if (!props.roll.fields) {
    return null
  }

  return (
    <div>
      <img className="rollImage" src={props.roll.fields.hero_img} ></img>
      <p>{props.roll.fields.hero_name}</p>
      <button>Battle</button>
      <Link to="/">
        <button>Return</button>
      </Link>
    </div>
  )
}

export default Roll
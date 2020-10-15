import React from "react"
import { Link } from "react-router-dom"
import Fate from "./video/fate.mp4"

function Homepage() {
  return (
    <div className="opening">
      <video className="titleVideo" autoPlay loop muted>
        <source src={Fate} type="video/mp4"/>
      </video>
      <div className="titleMenu">
      {/* title */}
      <h1 className="titleText">Gacha Gaming</h1>
      
      {/* Link button that will take you to the Roll.jsx */}
      <Link className="titleButton" to="/roll">
          Start
      </Link>
      
      {/* Link button that will take you to the leaderboard.jsx */}
      <Link className="titleButton" to="/leaderboard">
          Leaderboard
      </Link>
        </div>
    
    </div>
  )
}

export default Homepage
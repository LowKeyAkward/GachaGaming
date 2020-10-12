import React from "react"
import {Route, Link} from "react-router-dom"

function Homepage() {
  return (
    <div>
      {/* title */}
      <h1>Gacha Gaming</h1>
      {/* Link button that will take you to the Roll.jsx */}
      <Link to="/roll">Start</Link>
      {/* Link button that will take you to the leaderboard.jsx */}
      <Link to="/leaderboard">Leaderboard</Link>
    </div>
  )
}

export default Homepage
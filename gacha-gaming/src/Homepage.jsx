import React, {useEffect} from "react"
import {Route, Link} from "react-router-dom"

function Homepage() {
  return (
    <div>
      {/* title */}
      <h1>Gacha Gaming</h1>
      {/* Link button that will take you to the Roll.jsx */}
      <Link to="/roll">
        <button>
          Start
        </button>
        </Link>
      {/* Link button that will take you to the leaderboard.jsx */}
      <Link to="/leaderboard">
        <button>
          Leaderboard
        </button>
        </Link>
    </div>
  )
}

export default Homepage
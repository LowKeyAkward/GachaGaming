import React from "react"
import {Route, Link} from "react-router-dom"

function Leaderboard(props) {
  return (
    <div>
      {/* pull the victory and defeat record from Airtable */}
      <h1>Leaderboard</h1>
      {/* return to the Homepage.jsx */}
      <Link to="/">Return to Title</Link>
    </div>
  )
}

export default Leaderboard
import React from "react"
import { Link } from "react-router-dom"

function Leaderboard(props) {
  return (
    <div>
      {/* pull the victory and defeat record from Airtable */}
      <h1>Leaderboard</h1>
      {props.characterStat.map((characterStats) => (
        <div>
          <h2>{characterStats.fields.hero_name}</h2>
          <h3>{characterStats.fields.victories}</h3>
          <h3>{characterStats.fields.defeats}</h3>
        </div>
      ))}
      {/* return to the Homepage.jsx */}
      <Link className="button greenButton" to="/">Return to Title</Link>
    </div>
  )
}

export default Leaderboard
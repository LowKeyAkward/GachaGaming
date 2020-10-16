import React from "react"
import { Link } from "react-router-dom"

function Leaderboard(props) {
  return (
    <div>
      {/* pull the victory and defeat record from Airtable */}
      <h1>Leaderboard</h1>
      {props.characterStat.map((characterStats) => (
        <div className="leaderboard" key={characterStats.id}>
            <ol>
              <li>
              {characterStats.fields.hero_name}
              </li>
              <li>
                Victories: {characterStats.fields.victories}
              </li>
              <li>
                Defeats: {characterStats.fields.defeats}
              </li>
          </ol>
        </div>
      ))}
      {/* return to the Homepage.jsx */}
      <Link className="button greenButton" to="/">Return to Title</Link>
    </div>
  )
}

export default Leaderboard
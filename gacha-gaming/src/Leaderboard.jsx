import React from "react"
import { Link } from "react-router-dom"

function Leaderboard(props) {
  return (
    <div>
      {/* pull the victory and defeat record from Airtable */}
      <h1>Leaderboard</h1>
      {props.characterStat.map((characterStats) => (
        <div className="leaderboard">
          <table>
            <tr>
              <th>
              {characterStats.fields.hero_name}
              </th>
              <th>
                Victories: {characterStats.fields.victories}
              </th>
              <th>
                Defeats: {characterStats.fields.defeats}
              </th>
            </tr>
          </table>
        </div>
      ))}
      {/* return to the Homepage.jsx */}
      <Link className="button greenButton" to="/">Return to Title</Link>
    </div>
  )
}

export default Leaderboard
import React from "react"
import {Link} from "react-router-dom"

function Defeat(props) {
  return (
    <div>
      <h1>DEFEAT</h1>
      {/* display a defeat screen and post a +1 to Defeats */}
      <Link to="/">
        <button>Quit</button>
      </Link>
    </div>
  )
}

export default Defeat
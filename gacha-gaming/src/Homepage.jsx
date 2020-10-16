import React, {useEffect} from "react"
import { Link } from "react-router-dom"
import Fate from "./video/fate.mp4"
import Glassy from "./sounds/GlassySkyKayou.mp3"

function Homepage() {
  let audio = new Audio(Glassy)

  useEffect(() => {
    audio.play()
  }, [audio])
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
import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"

function Battle(props) {
  const [enemyHp, setEnemyHp] = useState(100)
  
  //Hero hp will be set to the random healthpoints in airtable
  const [heroHp, setHeroHp] = useState(1000)
  const [heroDmg, setHeroDmg] = useState(100)
  // const [heroRecovery, setHeroRecovery] = useState(100)
 
  const [yourTurn, setYourTurn] = useState(true)
 
  useEffect(() => {
    if (props.roll.fields) {
      setHeroHp(props.roll.fields.health_points)
      setHeroDmg(props.roll.fields.damage)
    }
  },[])

  //Button...damage the hero deals to enemy
  let heroAttack = () => {
    if (yourTurn === true) {
      setEnemyHp(enemyHp - heroDmg)
      setYourTurn(false)
    }
  }
  
  //Button...the amount of hp Hero will recover
  let heroHeal = () => {
    if (yourTurn === true) {
      setHeroHp(heroHp + 10)
      setYourTurn(false)
    }
  }

  //The set enemy's attack
    if (yourTurn === false) {
      setHeroHp(heroHp - 10)
      setYourTurn(true)
    }


  //win/loss conditions
  let outcome = () => {
    if (heroHp === 0) {
      //move to or show the Defeat.jsx
    } else if (enemyHp === 0) {
      //move to or show the Victory.jsx
    }
  }

  if (!props.roll.fields) {
    return null
  }

  return (
    <div>
      <p>Hero:{heroHp}</p>
      <p>Enemy:{enemyHp}</p>
      <button onClick={heroAttack}>Attack</button>
      <button onClick={heroHeal}>Heal</button>
      <Link to="/">
        <button>quit</button>
      </Link>
      {/* all game logic will go here*/}
    </div>
  )
}

export default Battle
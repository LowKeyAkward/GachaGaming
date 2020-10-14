import React, { useEffect, useState } from "react"
import { Link, withRouter } from "react-router-dom"

function Battle(props) {
  //Enemy states
  const [enemyHp, setEnemyHp] = useState(100)
  
  //Hero states
  const [heroHp, setHeroHp] = useState(1000)
  const [heroDmg, setHeroDmg] = useState(100)
  const [heroRecovery, setHeroRecovery] = useState(100)
 
  //Universal states
  const [yourTurn, setYourTurn] = useState(true)
 
  //guard statements
  useEffect(() => {
    if (props.roll.fields) {
      setHeroHp(props.roll.fields.health_points)
      setHeroDmg(props.roll.fields.damage)
      setHeroRecovery(props.roll.fields.healing)
    }
  },[])

  //Button...damage the hero deals to enemy
  let heroAttack = () => {
    if (yourTurn) {
      setEnemyHp(enemyHp - heroDmg)
      setYourTurn(!yourTurn)
    }
  }
  
  //Button...the amount of hp Hero will recover
  let heroHeal = () => {
    if (yourTurn) {
      setHeroHp(heroHp + heroRecovery)
      setYourTurn(!yourTurn)
    }
  }

  //Button...ends the your turn and allows enemy to deal damage
  let endTurn = () => {
    if (yourTurn === false) {
      setHeroHp(heroHp - 10)
      setYourTurn(true)
    }
  }

  //win/loss conditions
  if (heroHp <= 0) {
    console.log("Loser")
    props.history.push("/defeat")
      //move to or show the Defeat.jsx
  } else if (enemyHp <= 0) {
    console.log("Victory")
    props.history.push("/victory")
      //move to or show the Victory.jsx
    }

  return (
    <div>

      <p>Hero:{heroHp}</p>
      <p>Enemy:{enemyHp}</p>
      
      <button onClick={heroAttack}>Attack</button>
      
      <button onClick={heroHeal}>Heal</button>

      <button onClick={endTurn}>End Turn</button>
     
      <Link to="/">
        <button>Quit</button>
      </Link>

    </div>
  )
}

export default withRouter(Battle)
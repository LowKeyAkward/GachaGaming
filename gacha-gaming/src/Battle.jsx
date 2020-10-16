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
  },[props.roll.fields])

  //Enemy min max dmg
  let dmg_done = Math.floor(Math.random() * (25 - 15 + 1) + 15)

  //Hero min max dmg
  // let hero_dmg = Math.floor(Math.random() * (25 - 15 + 1) + 15)


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
      setHeroHp(heroHp - dmg_done)
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
    setTimeout(() => { props.history.push("/victory")}, 3)
      //move to or show the Victory.jsx
    }

  return (
    <div className="battle">

      <div className="healthBar">
        <div className="healthHero" style={{ width: `${heroHp}%` }}>Hero:{heroHp}</div>
      </div>
      <div className="healthBarEnemy">
        <div className="healthEnemy" style={{width: `${enemyHp}%`}}>Enemy:{enemyHp}</div>
      </div>

      <div className="battleScene">
        <img className="battleHero" alt="hero" src={props.roll.fields && props.roll.fields.hero_img} />
        <img className="battleEnemy" alt="enemy" src="https://vignette.wikia.nocookie.net/fategrandorder/images/5/55/Lancelot_NewSprite2.png/revision/latest?cb=20180911092724" />
      </div>
      
      
      <button className="button redButton" onClick={heroAttack}>Attack</button>
      
      <button className="button greenButton" onClick={heroHeal}>Heal</button>

      <button className="button whiteButton" onClick={endTurn}>End Turn</button>
     
      <Link to="/defeat">
        <button className="button plainButton">Surrender</button>
      </Link>

    </div>
  )
}

export default withRouter(Battle)
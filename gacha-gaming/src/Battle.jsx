import React, {useState} from "react"

function Battle(props) {
  const [enemyHp, setEnemyHp] = useState(100)
  //Hero hp will be set to the random healthpoints in airtable
  const [heroHp, setHeroHp] = useState(100)
  const [yourTurn, setYourTurn] = useState(true)
 
  //Button...damage the hero deals to enemy
  let heroAttack = () => {
    if (yourTurn === true) {
      setEnemyHp(enemyHp - 20)
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
  let enemyAttack = () => {
    if (yourTurn === false) {
      //allow enemy to attack
      setYourTurn(true)
    }
  }

  //win/loss conditions
  let outcome = () => {
    if (heroHp == 0) {
      //move to or show the Defeat.jsx
    } else if (enemyHp == 0) {
      //move to or show the Victory.jsx
    }
  }

  return (
    <div>
      {/* all game logic will go here*/}
    </div>
  )
}

export default Battle
import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [voteCount, setVoteCount] = useState(0)
  const [voteSum, setVoteSum] = useState(0)
  const [avg, setAvg] = useState(0)
  const [goodPerc, setGoodPerc] = useState(0)

  const updateStats = (voteValue) =>{
    setVoteCount(voteCount +1)
    setVoteSum(voteSum + voteValue)
    setAvg(voteSum/voteCount)
    setGoodPerc(good/voteCount*100)
  }

  const setToGood = (newValue) => {
    setGood(newValue)
    updateStats(1)
  }

  const setToNeutral = (newValue) => {
    setNeutral(newValue)
    updateStats(0)
  }

  const setToBad = (newValue) => {
    setBad(newValue)
    updateStats(-1)
  }



  return (
    <div>
        <h1>anna palautetta</h1>
        <button onClick={() => setToGood(good +1)}>
            hyvä
        </button>
        <button onClick={() => setToNeutral(neutral +1)}>
            neutraali
        </button>
        <button onClick={() => setToBad(bad +1)}>
            huono
        </button>
        <h1>statistiikka</h1>
        <p>hyvä {good}</p>
        <p>neutraali {neutral}</p>
        <p>huono {bad}</p>
        <p>{voteCount} {voteSum} {avg} {goodPerc}</p>
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)
import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const setToGood = (newValue) => {
    setGood(newValue)
  }

  const setToNeutral = (newValue) => {
    setNeutral(newValue)
  }

  const setToBad = (newValue) => {
    setBad(newValue)
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
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)
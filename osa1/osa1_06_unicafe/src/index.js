import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Statistics = ({good, neutral, bad}) => {
    let total = good + neutral + bad
    let voteValue = good - bad
    let avg = 0
    let goodPerc = 0

    if (total>0){
        avg = voteValue/total
        goodPerc = good/total*100
    }
    if(total>0){
        return(
            <div>
                <h1>statistiikka</h1>
                <table>
                    <tbody>
                        <Statistic text="hyvä" value = {good}/>
                        <Statistic text="neutraali" value = {neutral}/>
                        <Statistic text="huono" value = {bad}/>
                        <Statistic text="yhteensä" value = {total}/>
                        <Statistic text="keskiarvo" value = {avg}/>
                        <Statistic text="positiivisia" value = {goodPerc+" %"}/>
                    </tbody>
                </table>
            </div> 
        )
    }else{
        return(
            <div>
                <h1>statistiikka</h1>
                <p>Ei yhtään palautetta annettu</p>
            </div>
        )
    }

}

const Statistic = ({text, value}) =>{
    return(
        <tr>
            <td>{text}</td>
            <td>{value}</td>
        </tr>
    )
}

const Button = ({text, handleClick}) =>{
    return(
    <button onClick={handleClick}>
        {text}
    </button>
    )
} 

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
        <Button text="hyvä" handleClick = {() => setToGood(good +1)}/>
        <Button text="neutraali" handleClick = {() => setToNeutral(neutral +1)}/>
        <Button text="huono" handleClick = {() => setToBad(bad +1)}/>
        <Statistics good = {good} neutral = {neutral} bad={bad}/>
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)
import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = ({text, handleClick}) =>{
  return(
  <button onClick={handleClick}>
      {text}
  </button>
  )
}

const AnecdoteText = ({header, text, points}) => {
  return(
    <div>
      <h1>{header}</h1>
      <p>{text}</p>
      <p>has {points} votes</p>
    </div>
  )

}

const App = (props) => {
  const [selected, setSelected] = useState(0)
  const len = anecdotes.length 
  const [points, setPoints] = useState(Array(len).fill(0))

  const setToPoints = ({selected}) =>{
    const arrCopy = [...points]
    arrCopy[selected] += 1  
    setPoints(arrCopy)
  }

  return (
    <div>
      <AnecdoteText header = "Anecdote of the day" text = {props.anecdotes[selected]} points = {points[selected]}/>
      <Button text="next anecdote" handleClick = {() => setSelected(Math.floor(Math.random()*len))}/>
      <Button text="vote" handleClick = {() => setToPoints({selected})}/>
      <AnecdoteText 
        header = "Anecdote with most votes" 
        text = {props.anecdotes[points.indexOf(Math.max(...points))]} 
        points = {Math.max(...points)}
      />
    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)
import React from 'react'
import ReactDOM from 'react-dom'

const Header = (props) => {
    return(
        <h1>{props.name}</h1>
    )
}

const Content = (props) => {
    return (
        <div>
            <Part exname = {props.parts[0].name} excount = {props.parts[0].exercises}/>
            <Part exname = {props.parts[1].name} excount = {props.parts[1].exercises}/>
            <Part exname = {props.parts[2].name} excount = {props.parts[2].exercises}/>
        </div>
    )
}

const Part = (props) => {
    return(
        <p>
            {props.exname} {props.excount}
        </p>
    )
}

const Total = (props) => {
    return (
        <p>yhteensä {props.parts[0].exercises + 
            props.parts[1].exercises + props.parts[2].exercises} tehtävää</p>
    )
}

const App = () => {
    const course = {
        name: 'Half Stack -sovelluskehitys',
        parts: [
          {
            name: 'Reactin perusteet',
            exercises: 10
          },
          {
            name: 'Tiedonvälitys propseilla',
            exercises: 7
          },
          {
            name: 'Komponenttien tila',
            exercises: 14
          }
        ]
    }

    return (
        <div>
            <Header name ={course.name} /> 
            <Content parts={course.parts} />
            <Total parts={course.parts} />
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'))

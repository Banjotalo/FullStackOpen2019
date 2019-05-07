import React from 'react'
import ReactDOM from 'react-dom'

const Header = ({name}) => {
    return(
        <h1>{name}</h1>
    )
}

const Content = ({course}) => {
    const getParts = () =>
    course.parts.map(part => <Part key={part.id} part={part}/>)

    return (
        <div>
           {getParts()}
        </div>
    )
}


const Part = ({part}) => {
    return(
        <p>
            {part.name} {part.exercises}
        </p>
    )
}

const Course = ({course}) => {
    return(
        <div>
            <Header name = {course.name}/>
            <Content course={course}/>
            <Total parts={course.parts}/>
        </div>
    )
}

const Total = ({parts}) => {
    const total = parts.reduce((sum, part) => sum + part.exercises, 0)

    return(
        <p>yhteensä {total} tehtävää</p>
    )
}


const App = () => {
    const courses = [
        {
          name: 'Half Stack -sovelluskehitys',
          id: 1,
          parts: [
            {
              name: 'Reactin perusteet',
              exercises: 10,
              id: 1
            },
            {
              name: 'Tiedonvälitys propseilla',
              exercises: 7,
              id: 2
            },
            {
              name: 'Komponenttien tila',
              exercises: 14,
              id: 3
            }
          ]
        },
        {
          name: 'Node.js',
          id: 2,
          parts: [
            {
              name: 'Routing',
              exercises: 3,
              id: 1
            },
            {
              name: 'Middlewaret',
              exercises: 7,
              id: 2
            }
          ]
        }
      ]
    
    const getCourses = () =>
    courses.map((course, i) => <Course key={i} course={course}/>)
  
    return (
      <div>
        <Header name="Opetusohjelma"/>
        {getCourses()}
      </div>
    )
  }

ReactDOM.render(<App />, document.getElementById('root'))

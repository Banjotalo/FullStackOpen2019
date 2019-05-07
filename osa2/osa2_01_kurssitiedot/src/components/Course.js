import React from 'react'

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

export default Course
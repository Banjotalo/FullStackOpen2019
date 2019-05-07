import React from 'react'
import { useState } from 'react'

const PhoneList = ({persons}) => {
  const getPersons = () =>
  persons.map(person => <Person key={person.name} person={person}/>)

  return(
    <div>
      {getPersons()}
    </div>
  )
}

const Person = ({person}) => {
  return(
    <div>
      {person.name}
    </div>
  )  
}

const App = () => {
  const [ persons, setPersons] = useState([]) 
  const [ newName, setNewName ] = useState('')

  const addPerson = (event) => {    
    event.preventDefault()
    const nameObject = {
      name: newName
    }
  
    setPersons(persons.concat(nameObject))
    setNewName('')
  }

  const handleNewNameChange = (event) => {     
    setNewName(event.target.value)  
  }

  return (
    <div>
      <h2>Puhelinluettelo</h2>
      <form onSubmit={addPerson}>
        <div>
          nimi: 
          <input value={newName} onChange={handleNewNameChange}/>
        </div>
        <div>
          <button type="submit">lisää</button>
        </div>
      </form>
      <h2>Numerot</h2>
      <PhoneList persons={persons}/>
    </div>
  )

}

export default App

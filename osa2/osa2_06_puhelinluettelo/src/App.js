import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'


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
      {person.name} {person.number}
    </div>
  )  
}

const PersonForm = ({formProps}) => {

  const addPerson = (event) => {    
    event.preventDefault()
    const nameObject = {
      name: formProps.newName,
      number: formProps.newNumber
    }

    var result = formProps.persons.find(person => {
      return person.name.toUpperCase() === formProps.newName.toUpperCase()
    })

    if(result === undefined){
      formProps.setPersons(formProps.persons.concat(nameObject))
      formProps.setNewName('')
      formProps.setNewNumber('')
    }else{
      window.alert(formProps.newName + ' on jo luettelossa')
    }
 
  }

  return(
    <form onSubmit={addPerson}>
       <div>
        nimi: 
        <input value={formProps.newName} onChange={formProps.handleNewNameChange}/> 
         numero:
        <input value={formProps.newNumber} onChange={formProps.handleNewNumberChange}/>
      </div>
       <div>
        <button type="submit">lisää</button>
      </div>
    </form>    
  )
}

const FilterForm =({filterProps}) => {


  var filter = filterProps.persons.filter(person => {
    return person.name.toUpperCase().includes(filterProps.newFilter.toUpperCase())
  })

  const getFilter = () =>
    filter.map(person => {
      return <Person key={person.name} person={person}/>
    })

  return(
    <div>
      <p>numero:
      <input value={filterProps.newFilter} onChange={filterProps.handleNewFilterChange}/></p>
      <div>{getFilter()}</div>
    </div>
  )

}
 
const App = () => {
  const [ persons, setPersons] = useState([]) 
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ newFilter, setNewFilter ] = useState('Arto')

  useEffect(() => {
    console.log('effect')
  
    const eventHandler = response => {
      console.log('promise fulfilled')
      console.log(response)
      setPersons(response.data)
    }
  
    const promise = axios.get('http://localhost:3001/persons')
    promise.then(eventHandler)
  }, [])




  const handleNewNameChange = (event) => {     
    setNewName(event.target.value)  
  }

  const handleNewNumberChange = (event) => {     
    setNewNumber(event.target.value)  
  }

  const handleNewFilterChange = (event) => {
    setNewFilter(event.target.value)
  }

  const formProps = {
    persons: persons,
    newName: newName,
    newNumber: newNumber,
    setPersons: setPersons,
    setNewName: setNewName,
    setNewNumber: setNewNumber,
    handleNewNameChange: handleNewNameChange,
    handleNewNumberChange: handleNewNumberChange
  }

  const filterProps = {
    persons: persons,
    newFilter: newFilter,
    setNewFilter: setNewFilter,
    handleNewFilterChange: handleNewFilterChange
  }

  return (
    <div>
      <h1>Puhelinluettelo</h1>
      <FilterForm filterProps={filterProps}/>
      <h2>lisää henkilöitä</h2>
      <PersonForm formProps={formProps}/>
      <h2>Numerot</h2>
      <PhoneList persons={persons}/>
    </div>
  )

}

export default App

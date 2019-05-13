import React from 'react'
import { useState, useEffect } from 'react'

//komponentit
import PersonForm from './components/PersonForm'
import FilterForm from './components/FilterForm'
import PhoneList from './components/PhoneList'
import Notification from './components/Notification'

//palvelut
import personService from './services/personDB'
 
const App = () => {
  const [ persons, setPersons] = useState([]) 
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ newFilter, setNewFilter ] = useState('nimi')
  const [ notification, setNotification ] = useState([])

  const setNewNotification = (message, styleClass, timeout) =>{
    const newObject = {
      message: message,
      styleClass: styleClass
    }
    setNotification(newObject)

    setTimeout(() => {
      setNotification(null)
    }, timeout)

  }

  //GET: haetaan henkilöt
  useEffect(() => {
    personService
      .selectAll()
      .then(response => {
        setPersons(response.data)
      })
  }, [])

  //POST: lisätään/muutetaan henkilö
  const addPerson = (event) => {    
    event.preventDefault()
    const nameObject = {
      name: newName,
      number: newNumber
    }

    const result = persons.find(person => {
      return person.name.toUpperCase() === newName.toUpperCase()
    })

    if(result === undefined){

    personService
      .insertPerson(nameObject)
        .then(response => {
        setPersons(persons.concat(response.data))
        setNewName('')
        setNewNumber('')
        setNewNotification(`${response.data.name} lisätty onnistuneesti`, 'success', 5000)
        })

    }else{
      if(window.confirm(newName + ' on jo luettelossa, korvataanko vanha numero uudella?')){

        //haetaan henkilön tiedot 
        const resPerson = persons.find(person => {
          return person.name === newName
        })

        personService.updatePerson(resPerson.id, nameObject)
        .then(response => {
          setPersons(persons.map(person => person.id !== resPerson.id ? person : response.data))
          setNewName('')
          setNewNumber('')
          setNewNotification(`${response.data.name} muokattiin onnistuneesti`, 'success', 5000)
          })
          .catch(error => {
            setNewNotification(`${resPerson.name} on poistettu palvelimelta`, 'error', 5000)
            setPersons(persons.filter(n => n.id !== resPerson.id))
          })
      }
    }
 
  }

  //DELETE: poistetaan henkilö
  const deletePerson = (id) => {

    //haetaan henkilön tiedot 
    const resPerson = persons.find(person => {
      return person.id === id
    })

    if (window.confirm(`poistetaanko henkilö ${resPerson.name}`)) { 
      personService
        .deletePerson(id)
        .then(() => {
          setNewNotification(`${resPerson.name} poistettiin onnistuneesti palvelimelta`, 'success', 5000)
          setPersons(persons.filter(n => n.id !== id))
        })
        .catch(error => {
          setNewNotification(`${resPerson.name} on jo poistettu palvelimelta`, 'error', 5000)
          setPersons(persons.filter(n => n.id !== id))
        })
    }
  }

  //formien tekstikenttien setterit
  const handleNewNameChange = (event) => {     
    setNewName(event.target.value)  
  }

  const handleNewNumberChange = (event) => {     
    setNewNumber(event.target.value)  
  }

  const handleNewFilterChange = (event) => {
    setNewFilter(event.target.value)
  }

  //kootaan komponenteille lähettävät propsit
  const personFormProps = {
    persons, newName, newNumber, setPersons, setNewName, addPerson,
    setNewNumber, handleNewNameChange, handleNewNumberChange
  }

  const filterFormProps = {
    persons, newFilter, setNewFilter, handleNewFilterChange, deletePerson
  }

  return (
    <div>
      <Notification notification={notification}/>
      <h1>Puhelinluettelo</h1>
      <FilterForm filterFormProps={filterFormProps}/>
      <h2>lisää henkilöitä</h2>
      <PersonForm personFormProps={personFormProps}/>
      <h2>Numerot</h2>
      <PhoneList persons={persons} deletePerson={deletePerson}/>
    </div>
  )

}

export default App

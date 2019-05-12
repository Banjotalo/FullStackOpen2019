import React from 'react'
import Person from './Person'

const PhoneList = ({persons, handleDeleteClick}) => {
    const getPersons = () =>
      persons.map(person => <Person key={person.id} person={person} handleDeleteClick={() => handleDeleteClick(person.id)}/>)
  
    return(
      <div>
        {getPersons()}
      </div>
    )
  }

export default PhoneList
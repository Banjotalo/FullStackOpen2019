import React from 'react'
import Person from './Person'

const PhoneList = ({persons, deletePerson}) => {
    const getPersons = () =>
      persons.map(person => <Person key={person.id} person={person} deletePerson={() => deletePerson(person.id)}/>)
  
    return(
      <div>
        {getPersons()}
      </div>
    )
  }

export default PhoneList
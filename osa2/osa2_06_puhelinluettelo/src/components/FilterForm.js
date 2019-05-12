import React from 'react'
import Person from './Person'

const FilterForm =({filterFormProps, handleDeleteClick}) => {

    var filter = filterFormProps.persons.filter(person => {
      return person.name.toUpperCase().includes(filterFormProps.newFilter.toUpperCase())
    })
  
    const getFilter = () =>
      filter.map(person => {
        return <Person key={person.id} person={person} handleDeleteClick={() => handleDeleteClick(person.id)}/>
      })
  
    return(
      <div>
        <p>numero:
        <input value={filterFormProps.newFilter} onChange={filterFormProps.handleNewFilterChange}/></p>
        <div>{getFilter()}</div>
      </div>
    )
  
  }

export default FilterForm
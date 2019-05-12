import React from 'react'

const Person = ({person, handleDeleteClick}) => {
    return(
      <div>
        {person.name} {person.number} <button onClick={handleDeleteClick}>Poista</button>
      </div>
    )  
  }

export default Person
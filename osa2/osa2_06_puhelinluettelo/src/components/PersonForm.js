import React from 'react'

const PersonForm = ({personFormProps}) => {
  
    return(
      <form onSubmit={personFormProps.addPerson}>
         <div>
          nimi: 
          <input value={personFormProps.newName} onChange={personFormProps.handleNewNameChange}/> 
           numero:
          <input value={personFormProps.newNumber} onChange={personFormProps.handleNewNumberChange}/>
        </div>
         <div>
          <button type="submit">lisää</button>
        </div>
      </form>    
    )
  }

export default PersonForm
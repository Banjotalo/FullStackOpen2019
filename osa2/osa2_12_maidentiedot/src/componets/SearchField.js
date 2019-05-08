import React from 'react'

const SearchField = ({text, handleOnChange}) => {
    return (
      <div>
        <p>find: 
        <input value={text} onChange={handleOnChange}/></p>
      </div>
    )
}

export default SearchField
import React from 'react'

const CountryShortDesc = ({country, handleClick}) => {
    return (
      <p>
      {country.name}
      <button onClick={handleClick}>show</button>
      </p>
    )
  }

export default CountryShortDesc
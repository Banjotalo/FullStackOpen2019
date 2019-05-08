import React from 'react'
import CountryShortDesc from './CountryShortDesc';

const Countries = ({countries, handleClick}) => {

    const getCountries = () =>
    countries.map(country => 
      <CountryShortDesc key={country.name} country={country} handleClick={() => handleClick(country)}
      />)


    if (countries.length>10){
      return(
        <div>Too many matches, specify another filter</div>
      )
    }else{
      return (
        <div>
          {getCountries()}
        </div>
      )      
    }
  
  }

export default Countries
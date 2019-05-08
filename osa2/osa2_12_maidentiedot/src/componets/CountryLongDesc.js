import React from 'react'
import List from './List'
import Apixu from './Apixu';

const CountryLongDesc = ({country, apiKey}) => {
    if(country!==undefined){
      return (
        <div>
          <h2>{country.name}</h2>
          <p>
            capital {country.capital}<br/>
            population {country.population}
          </p>
          <h3>languages</h3>
          <List list={country.languages}/>
          <img src={country.flag} alt={country.name} width="200px"/> 
          <Apixu city={country.capital} apiKey={apiKey}/>
        </div>
      )   
    }
    else{
      return (
        <div></div>
      )
    }
  }

export default CountryLongDesc
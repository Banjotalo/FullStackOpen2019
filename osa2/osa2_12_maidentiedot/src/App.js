import React from 'react';
import { useState, useEffect } from 'react'
import axios from 'axios'

//komponentit
import Countries from './componets/Countries';
import CountryLongDesc from './componets/CountryLongDesc';
import SearchField from './componets/SearchField'
import ApiKeyField from './componets/ApiKeyField'

function App() {
  const [ countries, setCountries] = useState([])
  const [ filteredCountries, setFilteredCountries] = useState([]) 
  const [ newFilter, setNewFilter ] = useState('')
  const [ selectedCountry, setSelectedCountry ] = useState()
  const [ apiKey, setApiKey ] = useState('')

  const handleNewFilterChange = (event) => {
    setNewFilter(event.target.value)
  }

  const handleApiKeyChange = (event) => {
    setApiKey(event.target.value)
  }

  const setToSelectedCountry = (country) => {
    setSelectedCountry(country)
  }

  //päivitettän filtteri
  useEffect(() => {
    const filtered = countries.filter(country => {
      return country.name.toUpperCase().includes(newFilter.toUpperCase())
    })
    setFilteredCountries(filtered)
  }, [newFilter, countries])

  //päivitetään valittu
  useEffect(() => {
    if(filteredCountries.length===1){
      setSelectedCountry(filteredCountries[0])
    }else{
      setSelectedCountry(undefined)
    }
  }, [filteredCountries])

  //heateen data
  useEffect(() => {
    const eventHandler = response => {
      setCountries(response.data)
    }
  
    const promise = axios.get('https://restcountries.eu/rest/v2/all')
    promise.then(eventHandler)
  }, [])


  return (
    <div>
      <SearchField text={newFilter} handleOnChange={handleNewFilterChange}/>
      <Countries countries={filteredCountries} handleClick={setToSelectedCountry}/>
      <CountryLongDesc country={selectedCountry} apiKey={apiKey}/>
      <ApiKeyField apiKey={apiKey} handleOnChange={handleApiKeyChange}/>
    </div>
  );
}

export default App;

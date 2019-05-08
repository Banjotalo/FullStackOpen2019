import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'

const Apixu = ({city, apiKey}) => {
    //const [ apiKey, setApiKey ] = useState('')
    const [ weather, setWeather] = useState()
    
    useEffect(() => {
        console.log('apikey ', apiKey, ' city ', city)
        if(apiKey!==''){
            const eventHandler = response => {
                setWeather(response.data)
            }
            const httpGet = `http://api.apixu.com/v1/current.json?key=${apiKey}&q=${city}`
            console.log(httpGet)
        
            const promise = axios.get(httpGet)
            promise.then(eventHandler)
        }
      }, [apiKey, city])
      
    if(apiKey!=='' & weather!==undefined){
        return (
            <div>
                <h3>Weather in {city}</h3>
                <p>
                    <b>Temperature: </b>{weather.current.temp_c} &deg;C<br/>
                    <img src={weather.current.condition.icon} alt="weatherIcon"/> <br/>
                    <b>Wind: </b>{weather.current.wind_kph} kph direction {weather.current.wind_dir}<br/>
                </p>
            </div>
        )
    }else{
        return(
        <div>
            <h3>Weather in {city}</h3>
            <p>can't find...</p>
        </div>
        )
    }

}


export default Apixu
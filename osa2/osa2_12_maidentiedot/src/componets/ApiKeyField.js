import React from 'react'

const ApiKeyField = ({apiKey, handleOnChange}) => {
    if(apiKey===''){
    return (
      <div>
        <p>paste Apixu apikey to see weather <br/>
        <input value={apiKey} onChange={handleOnChange}/></p>
      </div>
    )
    }
    return (<div></div>)

}

export default ApiKeyField
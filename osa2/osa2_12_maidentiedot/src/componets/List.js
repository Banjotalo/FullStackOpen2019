import React from 'react'

const List = ({list}) => {
    const getList = () =>
    list.map((item, i) => <li key={i}>{item.name}</li>)
  
    return(
      <div>
        <ul>
          {getList()}
        </ul>
      </div>
  
    )
  }

export default List
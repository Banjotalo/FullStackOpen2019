import React from 'react'
import './Notification.css'

const Notification = ({notification}) => {
    if(notification == null){
        return null
    }
    return(
      <div className={notification.styleClass}>
        {notification.message}
      </div>
    )  
  }

export default Notification
import React from 'react'
import "./Logo.styles.scss"

function Logo({size, color}) {

    
    return (
        <h1 style={{ fontSize : size, color: color}} className="logo">My <span className="logo__c">C</span>ode Academy</h1>
    )
}

export default Logo

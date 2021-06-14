import React from 'react'
import "./Logo.styles.scss"

function Logo({size, color}) {

    
    return (
        <span style={{ fontSize : size, color: color}} className="logo">My <span className="logo__c">C</span>ode Academy</span>
    )
}

export default Logo

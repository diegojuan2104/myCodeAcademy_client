import React from 'react'
import "./Footer.styles.scss"

function Footer() {
    let now = new Date()
    let year = now.getFullYear()
    return (
        <footer className="footer">
            <p>Copyright © {year} My Code Academy</p>
        
        </footer>
    )
}

export default Footer

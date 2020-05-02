import React from 'react'
import { Link } from 'gatsby'

const AboutPage = () => {
    return (
        <div>
            <h1>About</h1>
            <p>Hi, I'm Nick.</p>
            <p><Link to="/contact">Contact info.</Link></p>
        </div>
    )
}

export default AboutPage
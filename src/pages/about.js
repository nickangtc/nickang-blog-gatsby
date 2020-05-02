import React from 'react'
import { Link } from 'gatsby'

import styles from '../styles/about.module.scss'

const AboutPage = () => {
    return (
        <div>
            <h1>About</h1>
            <p>Hi, I'm Nick.</p>
            <p><Link className={styles.link} to="/contact">Contact info.</Link></p>
        </div>
    )
}

export default AboutPage
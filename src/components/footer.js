import React from 'react'
import { Link } from "gatsby"

import { siteFooter, navList, navItem } from './footer.module.scss'

const Footer = () => {
  return (
    <footer className={ siteFooter }>
      <nav>
        <ul className={ navList }>
          <li className={ navItem }>
            <a href="https://twitter.com/nickang" target="_blank" rel="noopener noreferrer" alt="opens new tab to twitter profile">
              <span role="img" aria-label="bird emoji signifying twitter icon">🐦</span>
            </a>
          </li>
          <li className={ navItem }>
            <a href="https://ko-fi.com/nickang" target="_blank" rel="noopener noreferrer" alt="opens new tab to buy me a coffee page">
              <span role="img" aria-label="coffee emoji">☕️</span>
            </a>
          </li>
          <li className={ navItem }>
            <Link to="/contact" alt="goes to contact page">
              <span role="img" aria-label="email emoji">✉️</span>
            </Link>
          </li>
        </ul>
      </nav>
    </footer>
  )
}

export default Footer
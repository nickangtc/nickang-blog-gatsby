import React from 'react'
import { Link } from "gatsby"

import { rhythm } from "../utils/typography"
import headerStyles from "./header.module.scss"

const Header = ({ title }) => {
  return (
    <header>
      <h1
        style={{
          marginBottom: rhythm(1.5),
          marginTop: 0
        }}
      >
        <Link
          style={{
            boxShadow: `none`,
            color: `inherit`,
          }}
          to={`/`}
        >
          {title}
        </Link>
      </h1>
      
      <nav>
          <ul className={ headerStyles.navList }>
            <li className={ headerStyles.navItem }>
              <Link to="/blog">Blog</Link>
            </li>
            <li className={ headerStyles.navItem }>
              <Link to="/newsletter">Newsletter</Link>
            </li>
            <li className={ headerStyles.navItem }>
              <Link to="/recommendations">Recommendations</Link>
            </li>
            <li className={ headerStyles.navItem }>
              <Link to="/now">Now</Link>
            </li>
          </ul>
      </nav>
    </header>
  )
}

export default Header
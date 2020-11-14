import React from 'react'
import { Link } from "gatsby"

import headerStyles from "./header.module.scss"

const Header = ({ title }) => {
  return (
    <header>
      <h1 className={ headerStyles.siteTitle }>
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
            <Link to="/blog" activeClassName={ headerStyles.active }>Blog</Link>
          </li>
          <li className={ headerStyles.navItem }>
            <Link to="/learn-tech" activeClassName={ headerStyles.active }>Tech</Link>
          </li>
          <li className={ headerStyles.navItem }>
            <Link to="/now" activeClassName={ headerStyles.active }>Now</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
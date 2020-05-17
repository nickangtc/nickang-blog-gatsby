import React from 'react'
import { Link } from "gatsby"

import { rhythm, scale } from "../utils/typography"

const Header = ({ title }) => {
  return (
    <header>
      <h1
        style={{
          ...scale(1.2),
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
    </header>
  )
}

export default Header
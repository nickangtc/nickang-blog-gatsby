import React from "react"
import { Link } from "gatsby"

import { rhythm, scale } from "../utils/typography"
import '../styles/index.scss'
import twitterLogo from "../../content/assets/twitter.svg"

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  let header

  if (location.pathname === rootPath) {
    header = (
      <h1
        style={{
          ...scale(1.5),
          marginBottom: rhythm(1.5),
          marginTop: 0,
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
    )
  } else {
    header = (
      <h3
        style={{
          fontFamily: `"Inter var",-apple-system,BlinkMacSystemFont,"Helvetica Neue",Helvetica,sans-serif`,
          marginTop: 0,
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
      </h3>
    )
  }
  return (
    <div
      style={{
        marginLeft: `auto`,
        marginRight: `auto`,
        maxWidth: rhythm(24),
        padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
      }}
    >
      <header>{header}</header>
      <main>{children}</main>
      <footer>
        <p>Nick Ang © {new Date().getFullYear()}</p>
        <a href="https://twitter.com/nickang" target="_blank" rel="noopener noreferrer">
          <img alt="twitter icon" src={twitterLogo} />
        </a>
      </footer>
    </div>
  )
}

export default Layout

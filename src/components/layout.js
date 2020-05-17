import React from "react"
import { Link } from "gatsby"
import { rhythm, scale } from "../utils/typography"

import Footer from '../components/footer'
import '../styles/global.scss'
import layoutStyles from './layout.module.scss'

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
      className={layoutStyles.container}
    >
      <div className={layoutStyles.content}>
        <header>{header}</header>
        <main>{children}</main>
      </div>
      <Footer></Footer>
    </div>
  )
}

export default Layout

import React from "react"
import { rhythm } from "../utils/typography"

import Header from '../components/header'
import Footer from '../components/footer'
import '../styles/global.scss'
import '../styles/prism-custom.scss'
import { container, content, body } from './layout.module.scss'

const Layout = ({ location, title, children }) => {
  // const rootPath = `${__PATH_PREFIX__}/`
  return (
    <div
      style={{
        maxWidth: rhythm(24),
        padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
      }}
      className={ container }
    >
      <div className={ content }>
        <Header title={ title }></Header>
        <main className={ body }>{ children }</main>
      </div>
      <Footer></Footer>
    </div>
  )
}

export default Layout

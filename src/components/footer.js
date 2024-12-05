import React from "react"
import { Link } from "gatsby"

import { siteFooter, navList, navItem } from "./footer.module.scss"

const Footer = () => {
  return (
    <footer className={siteFooter}>
      <nav>
        <ul className={navList}>
          <li className={navItem}>
            <Link to="/contact" alt="goes to contact page">
              <span
                role="img"
                aria-label="email emoji"
                title="Send me an email"
              >
                ✉️
              </span>
            </Link>
          </li>
        </ul>
      </nav>
    </footer>
  )
}

export default Footer

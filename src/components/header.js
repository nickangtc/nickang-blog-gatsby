import React from 'react'
import { useStaticQuery, graphql, Link } from "gatsby"
import Image from "gatsby-image"

import headerStyles from "./header.module.scss"

const Header = ({ title }) => {
  const data = useStaticQuery(graphql`
    query HeaderQuery {
      avatar: file(absolutePath: { regex: "/nick-ang-profile-portrait-11-2020.jpg/" }) {
        childImageSharp {
          fixed(width: 300, height: 300) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      site {
        siteMetadata {
          author {
            name
            summary
          }
        }
      }
    }
  `)

  return (
    <header style={{ display: 'flex' }}>
      <Image
        fixed={data.avatar.childImageSharp.fixed}
        alt={data.site.siteMetadata.author.name}
        style={{
          marginBottom: 0,
          marginRight: '1rem',
          maxWidth: 75,
          maxHeight: 75,
          borderRadius: `100%`,
        }}
        imgStyle={{
          borderRadius: `50%`,
        }}
      />

      <section style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}>
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
            <li className={ headerStyles.navItem }>
              <Link to="/subscribe" activeClassName={ headerStyles.active }>Subscribe</Link>
            </li>
          </ul>
        </nav>
      </section>
    </header>
  )
}

export default Header

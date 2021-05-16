/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image";

import { rhythm } from "../utils/typography"

const Bio = () => {
  const data = useStaticQuery(graphql`query BioQuery {
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
    <div
      style={{
        display: `flex`,
        marginBottom: rhythm(1),
      }}
    >
      <StaticImage
        src="../../content/assets/nick-ang-profile-portrait-11-2020.jpg/"
        imgStyle={{
          borderRadius: `50%`,
        }} 
        alt={ `${ data.site.siteMetadata.author.name } profile picture` }
        style={{
          marginBottom: 0,
          marginRight: '1rem',
          maxWidth: 75,
          maxHeight: 75,
          borderRadius: `100%`,
        }} />
      <div>
        <div>
          If something made you think, I would love to know.
        </div>
        <small>
          <Link to="/contact">contact</Link>
          <span>&nbsp; | &nbsp;</span>
          <a target="_blank" rel="noreferrer" href={`https://ko-fi.com/nickang`}>give coffee</a>
        </small>
      </div>
    </div>
  )
}

export default Bio

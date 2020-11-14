/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import Image from "gatsby-image"

import { rhythm } from "../utils/typography"

const Bio = ({ location }) => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      avatar: file(absolutePath: { regex: "/nickang-profile-pic.jpg/" }) {
        childImageSharp {
          fixed(width: 50, height: 50) {
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

  const { author } = data.site.siteMetadata
  return (
    <div
      style={{
        display: `flex`,
        marginBottom: rhythm(2.5),
      }}
    >
      <Image
        fixed={data.avatar.childImageSharp.fixed}
        alt={author.name}
        style={{
          marginRight: rhythm(1 / 2),
          marginBottom: 0,
          minWidth: 50,
          borderRadius: `100%`,
        }}
        imgStyle={{
          borderRadius: `50%`,
        }}
      />
      <div>
        <div>
          Written by <strong>{author.name}</strong>. <em>{author.summary}</em>
        </div>
        <small>
          send me a message:
          <span>&nbsp;</span>
          <a target="_blank" rel="noreferrer" href={`https://twitter.com/messages/compose?recipient_id=17964382&text=Hey%20Nick!%20I%20was%20reading%20${location.href}`}>twitter</a>
          <span> / </span>
          <Link to="/email">email</Link>
        </small>
        <span>&nbsp; | &nbsp;</span>
        <small>
          <a target="_blank" rel="noreferrer" href={`https://ko-fi.com/nickang`}>buy me coffee</a>
        </small>
      </div>
    </div>
  )
}

export default Bio

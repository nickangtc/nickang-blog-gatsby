import React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/layout"
import SearchEngineOptimisation from "../components/searchengineoptimisation"

const EverydaysPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title
  const everydaysPosts = data.allMarkdownRemark.edges.map((post, index) => {
    return (
      <li key={index}>
        {post.node.frontmatter.date} -{" "}
        <Link to={post.node.fields.slug}>{post.node.frontmatter.title}</Link>
        {post.node.frontmatter.fav && (
          <span
            role="img"
            aria-label="fire emoji indicating this article is a favourite"
          >
            {" "}
            🔥
          </span>
        )}
      </li>
    )
  })

  return (
    <Layout location={location} title={siteTitle}>
      <SearchEngineOptimisation title="Everydays" location={location} />
      <h1>Everydays</h1>
      <p>
        Learning to suck less at programming with one software project or
        learning everyday. Majorly inspired by{" "}
        <a href="https://www.beeple-crap.com/everydays">Mike Winkelmann</a>'s
        ongoing art project.
      </p>
      <ul>{everydaysPosts}</ul>
    </Layout>
  )
}

export default EverydaysPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      filter: { frontmatter: { type: { in: "Everydays" } } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            fav
            date(fromNow: true)
          }
        }
      }
    }
  }
`

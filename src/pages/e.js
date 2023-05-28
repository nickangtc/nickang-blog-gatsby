import React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/layout"
import SearchEngineOptimisation from "../components/searchengineoptimisation"

const EverythingPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title
  const allPosts = data.allMarkdownRemark.edges.map((post, index) => {
    return (
      <li key={index}>
        {post.node.frontmatter.date_published} -{" "}
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
      <SearchEngineOptimisation title="Everything" location={location} />
      <h1>Everything</h1>
      <p>
        Literally every post that exists on this blog, listed in reverse
        chronology for easy cmd/ctrl + f search.
      </p>
      <ul>{allPosts}</ul>
    </Layout>
  )
}

export default EverythingPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      filter: { frontmatter: { status: { ne: "draft" } } }
      sort: { fields: [frontmatter___date_published], order: DESC }
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            fav
            date_published(formatString: "DD MMM YYYY")
          }
        }
      }
    }
  }
`

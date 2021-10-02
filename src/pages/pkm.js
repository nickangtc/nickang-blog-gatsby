import React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/layout"
import SearchEngineOptimisation from "../components/searchengineoptimisation"

const PkmPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title
  const pkmPosts = data.allMarkdownRemark.edges.map((post, index) => {
    return (
      <li key={index}>
        { post.node.frontmatter.date } - <Link to={ post.node.fields.slug }>{ post.node.frontmatter.title }</Link>
        { post.node.frontmatter.fav && (<span role="img" aria-label="fire emoji indicating this article is a favourite"> 🔥</span>) }
      </li>
    )
  })

  return (
    <Layout location={location} title={siteTitle}>
      <SearchEngineOptimisation title="PKM Articles" location={location} />
      <h1>PKM articles</h1>
      <p>Articles about Personal Knowledge Management (PKM).</p>
      <ul>
        { pkmPosts }
      </ul>
    </Layout>
  )
}

export default PkmPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      filter: { frontmatter: { tags: { in: "PKM" } } }
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
            date(formatString: "DD MMM YYYY")
          }
        }
      }
    }
  }
`

import React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/layout"
import SearchEngineOptimisation from "../components/searchengineoptimisation"

const CommunicationPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title
  const communicationPosts = data.allMarkdownRemark.edges.map((post, index) => {
    return (
      <li key={index}>
        { post.node.frontmatter.date } - <Link to={ post.node.fields.slug }>{ post.node.frontmatter.title }</Link>
        { post.node.frontmatter.fav && ' 🔥' }
      </li>
    )
  })

  return (
    <Layout location={location} title={siteTitle}>
      <SearchEngineOptimisation title="Communication Articles" location={location} />
      <h1>Communication articles</h1>
      <p>Articles about mastering the art of communication.</p>
      <ul>
        { communicationPosts }
      </ul>
    </Layout>
  )
}

export default CommunicationPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      filter: { frontmatter: { tags: { in: "Communication" } } }
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

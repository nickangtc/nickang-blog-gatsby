import React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/layout"
import SearchEngineOptimisation from "../components/searchengineoptimisation"

const TechPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title
  const techPosts = data.allMarkdownRemark.edges.map((post, index) => {
    return (
      <li key={index}>
        { post.node.frontmatter.date } - <Link to={ post.node.fields.slug }>{ post.node.frontmatter.title }</Link>
        { post.node.frontmatter.fav && ' 🔥' }
      </li>
    )
  })

  return (
    <Layout location={location} title={siteTitle}>
      <SearchEngineOptimisation title="Learn Tech" location={location} />
      <h1>Tech articles</h1>
      <p>Articles about software engineering and web development.</p>
      <ul>
        { techPosts }
      </ul>
    </Layout>
  )
}

export default TechPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      filter: { frontmatter: { tags: { in: "Tech" } } }
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

import React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/layout"
import SearchEngineOptimisation from "../components/searchengineoptimisation"

const BooksPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title
  const booksPosts = data.allMarkdownRemark.edges.map((post, index) => {
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
      <SearchEngineOptimisation title="Books list" location={location} />
      <h1>Books list</h1>
      <p>
        In 2024 I finally started a spreadsheet to track the books I read. My
        goal is simply to read more, and part of the strategy is to have a
        consistent supply of interesting books written down somewhere.{" "}
        <a
          href="https://docs.google.com/spreadsheets/d/10BBp2cYszi8LZxOmcOKyZIg2edmZrpGxDyG56XJrmS0/edit?usp=sharing"
          target="_blank"
        >
          Open the spreadsheet
        </a>{" "}
        to see what's on my list right now.
      </p>
      <ul>{booksPosts}</ul>
    </Layout>
  )
}

export default BooksPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      filter: { frontmatter: { tags: { in: "Book" } } }
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

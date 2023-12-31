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
        Just like you, I'm trying to read more, period. I currently read an
        average of 10 books a year (including the ones I choose to give up on),
        which I think is a measly portion of what I think I ought to consume.
        Currenty, I'm inclined to read broadly; this means I'll read a mix of
        genres.
      </p>
      <p>
        I've made my longlist of books available to the public. In case you're
        interested,{" "}
        <a
          href="https://docs.google.com/spreadsheets/d/10BBp2cYszi8LZxOmcOKyZIg2edmZrpGxDyG56XJrmS0/edit?usp=sharing"
          target="_blank"
        >
          open the spreadsheet
        </a>{" "}
        to see what I'm reading, what I've read, and what I'm planning to read.
        Below are the notes I've written for books I've read.
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

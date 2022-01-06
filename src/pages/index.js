import React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/layout"
import { articles, navItem } from "./index.module.scss"
import SearchEngineOptimisation from "../components/searchengineoptimisation"

const HomePage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title
  const newestPostsData = data.allMarkdownRemark.edges
  const newestPosts = newestPostsData.map((post, index) => {
    return (
      <li key={index}>
        {post.node.frontmatter.date} -{" "}
        <Link to={post.node.fields.slug}>{post.node.frontmatter.title}</Link>
      </li>
    )
  })

  return (
    <Layout location={location} title={siteTitle}>
      <SearchEngineOptimisation title="Home" location={location} />
      <h1 id="my-digital-garden">
        Hey, I'm Nick.{" "}
        <span role="img" aria-label="hand wave emoji">
          👋
        </span>
      </h1>
      <p>
        I'm currently an Engineering Team Lead at{" "}
        <a href="https://smartly.io">Smartly.io</a>. I write about a broad range
        of things that I learn and observe, and they seem to coalesce around
        topics like technology, living a meaningful life, and communicating
        well.
      </p>
      <p>
        I publish new articles every Sunday.{" "}
        <Link to="/subscribe">Subscribe</Link> for free occasional updates. I
        try to be helpful with each article I publish. If something you read
        helped you, please <Link to="/contact">reach out</Link> and/or{" "}
        <a target="_blank" rel="noreferrer" href={`https://ko-fi.com/nickang`}>
          buy me a coffee
        </a>
        .
      </p>
      <p>
        If you're new here and not sure where to start, I recommend reading
        something recent below or <Link to="/topics">browsing by topic</Link>.
      </p>

      <h3>Recent articles</h3>
      <ul className={articles}>{newestPosts}</ul>
      <nav>
        <p>
          <Link to="/blog" className={navItem}>
            Browse all articles →
          </Link>
        </p>
      </nav>
    </Layout>
  )
}

export default HomePage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      filter: { frontmatter: { status: { ne: "draft" } } }
      sort: { fields: [frontmatter___date], order: DESC }
      limit: 20
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            date(formatString: "DD MMM YYYY")
          }
        }
      }
    }
  }
`

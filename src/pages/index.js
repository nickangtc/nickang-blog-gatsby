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
        I'm a senior software engineer at{" "}
        <a href="https://www.shopify.com/">Shopify</a>. I write broadly about
        what I learn and observe, which seem to coalesce around topics like
        technology, living a meaningful life, and communicating well.
      </p>
      <p>
        I used to publish new articles here every week but I've since changed to
        publishing essays whenever I have something to share. Currently I also
        write shorter, software engineering related notes in the{" "}
        <a href="https://medium.com/re-engineering">
          re-engineering publication on Medium
        </a>
        .{" "}
      </p>
      <p>
        If you like the stuff on here, <Link to="/subscribe">subscribe</Link>{" "}
        for free occasional updates. If you're new here and not sure where to
        start, I recommend reading something recent below or{" "}
        <Link to="/topics">browsing by topic</Link>.
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
      sort: { fields: [frontmatter___date_published], order: DESC }
      limit: 10
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
          }
        }
      }
    }
  }
`

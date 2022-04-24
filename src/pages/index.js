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
        I'm currently a senior software engineer at{" "}
        <a href="https://www.shopify.com/">Shopify</a>. I write broadly about
        what I learn and observe about technology, living a meaningful life, and
        communicating well.
      </p>
      <p>
        If you're new here and not sure where to start, I recommend reading
        something recent below or <Link to="/topics">browsing by topic</Link>.
      </p>
      <p>
        <strong>Update - a new home for new posts: </strong>
        From April 2022, I will be publishing exclusively through my newsletter.
        I laid out my reason in the{" "}
        <a href="https://nickang.substack.com/p/a-mule-a-campervan-and-other-updates">
          first dispatch
        </a>{" "}
        - scroll to "finding my tribe."
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

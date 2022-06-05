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
        <a href="https://www.shopify.com/">Shopify</a>. I'm also a dad, husband,
        rock climber, and all-around avid learner. We live in Berlin, Germany
        and are originally from Singapore.
      </p>
      <p>
        I write and publish regularly my learnings on living a calm, joyful life
        through consistent and kind introspection that I make public as
        dispatches to my newsletter subscribers.
      </p>
      <p>
        <iframe
          src="https://nickang.substack.com/embed"
          width="100%"
          height="320"
          style={{ border: "1px solid #EEE", background: "white" }}
          frameborder="0"
          scrolling="no"
          title="Subscribe to In the End newsletter"
        ></iframe>
      </p>
      <p>
        For an introduction to the stuff I write about, I recommend browsing
        this blog <Link to="/topics">by topic</Link>. There is also a growing{" "}
        <a href="https://nickang.substack.com/archive">archive</a> of free
        newsletter posts that may be interesting.
      </p>
      <p>
        If you like what you read, then I highly recommend{" "}
        <strong>subscribing</strong> to my newsletter (or bookmarking its{" "}
        <a href="https://nickang.substack.com/?s=nickangcom">substack page</a>)
        because I'm publishing new posts exclusively through the newsletter
        starting April 2022.
      </p>
      <p>Thanks for reading!</p>
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

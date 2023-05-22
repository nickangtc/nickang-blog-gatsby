import React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SearchEngineOptimisation from "../components/searchengineoptimisation"
import { title, date, postsNav } from "./blog-post.module.scss"

// Destructuring { data, pageContext, location } = props
const BlogPostTemplate = ({ data, pageContext, location }) => {
  const post = data.markdownRemark
  const siteTitle = data.site.siteMetadata.title
  const { previous, next } = pageContext

  const datesLine =
    post.frontmatter.date_updated &&
    post.frontmatter.date_updated !== post.frontmatter.date_published
      ? `published: ${post.frontmatter.date_published} | updated: ${post.frontmatter.date_updated}`
      : `published: ${post.frontmatter.date_published}`

  return (
    <Layout location={location} title={siteTitle}>
      <SearchEngineOptimisation
        title={post.frontmatter.title}
        description={post.frontmatter.excerpt || post.excerpt}
        location={location}
      />
      <article>
        <header>
          <h1 className={title}>{post.frontmatter.title}</h1>
          <time className={date}>{datesLine}</time>
        </header>
        {post?.frontmatter?.status === "draft" && (
          <p>
            (This is a public <strong>draft</strong>. It can contain errors of
            all sorts. Read with a pinch of salt.)
          </p>
        )}
        <section dangerouslySetInnerHTML={{ __html: post.html }} />
        <hr />
        <footer>
          <Bio location={location} />
        </footer>
      </article>

      <nav>
        <ul className={postsNav}>
          <li>
            {previous && (
              <Link to={previous.fields.slug} rel="prev">
                ← {previous.frontmatter.title}
              </Link>
            )}
          </li>
          <li>
            {next && (
              <Link to={next.fields.slug} rel="next">
                {next.frontmatter.title} →
              </Link>
            )}
          </li>
        </ul>
      </nav>

      <iframe
        src="https://nickang.substack.com/embed"
        width="100%"
        height="320"
        style={{ border: "1px solid #EEE", background: "white" }}
        frameborder="0"
        scrolling="no"
        title="Subscribe to In the End newsletter"
      ></iframe>
    </Layout>
  )
}

export default BlogPostTemplate

// Get a single blog post with specified $slug
// $slug is passed in when createPages Gatsby API is called in gatsby-node.js
export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        status
        title
        date_published(formatString: "DD MMM YYYY")
        date_updated(formatString: "DD MMM YYYY")
        excerpt
      }
    }
  }
`

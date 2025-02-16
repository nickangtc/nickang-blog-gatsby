import React, { useEffect } from "react"
import { Link, graphql, navigate } from "gatsby"

// import Bio from "../components/bio"
import Layout from "../components/layout"
import SearchEngineOptimisation from "../components/searchengineoptimisation"
import {
  title,
  date,
  postsNav,
  creationDuration,
} from "./blog-post.module.scss"

// Destructuring { data, pageContext, location } = props
const BlogPostTemplate = ({ data, pageContext, location }) => {
  const post = data.markdownRemark
  const siteTitle = data.site.siteMetadata.title
  const { previous, next } = pageContext

  // Add keyboard navigation
  useEffect(() => {
    const handleKeyPress = (event) => {
      // Ignore if any modifier keys are pressed (Cmd, Ctrl, Alt, Shift)
      // This prevents disurpting browser navigation keybaord shortcuts.
      if (event.metaKey || event.ctrlKey) {
        return
      }

      if (event.key === "ArrowLeft" && previous) {
        navigate(previous.fields.slug)
      } else if (event.key === "ArrowRight" && next) {
        navigate(next.fields.slug)
      }
    }

    window.addEventListener("keydown", handleKeyPress)
    return () => window.removeEventListener("keydown", handleKeyPress)
  }, [previous, next])

  const datesLine =
    post.frontmatter.date_updated &&
    post.frontmatter.date_updated !== post.frontmatter.date_published
      ? `published: ${post.frontmatter.date_published} | updated: ${post.frontmatter.date_updated}`
      : `published: ${post.frontmatter.date_published}`

  const creationDurationMinutes = post.frontmatter.creation_duration_minutes

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
            <strong>
              (This is a public <strong>draft</strong>. It can contain errors or
              problematic thinking. Read with a teaspoon of salt.)
            </strong>
          </p>
        )}
        {post?.frontmatter?.status === "revisit" && (
          <p>
            <strong>
              (This post has been marked for revisiting, likely because it needs
              a follow-up.)
            </strong>
          </p>
        )}
        {post?.frontmatter?.tags?.includes("Collection") && (
          <p>
            <strong>
              (This is a growing collection, so it's better to think of it as a
              wiki page. Check the updated date below the title for last date of
              update.)
            </strong>
          </p>
        )}
        {post?.frontmatter?.tags?.includes("Strictly 30") && (
          <p>
            <strong>
              (This post was written, edited, and published in under 30 minutes.{" "}
              <Link to="/strictly-30">Learn more</Link>.)
            </strong>
          </p>
        )}
        <section dangerouslySetInnerHTML={{ __html: post.html }} />
        {/* <hr /> */}
        {/* <footer>
          <Bio location={location} />
        </footer> */}

        {creationDurationMinutes && (
          <>
            <hr />
            <p className={creationDuration}>
              Written, edited, and published in {creationDurationMinutes} mins.
            </p>
          </>
        )}
      </article>

      <hr />

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
        tags
        date_published(formatString: "DD MMM YYYY")
        date_updated(formatString: "DD MMM YYYY")
        excerpt
        creation_duration_minutes
      }
    }
  }
`

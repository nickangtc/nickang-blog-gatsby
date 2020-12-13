import React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import blogPostStyles from "./blog-post.module.scss"

// Destructuring { data, pageContext, location } = props
const BlogPostTemplate = ({ data, pageContext, location }) => {
  const post = data.markdownRemark
  const siteTitle = data.site.siteMetadata.title
  const { previous, next } = pageContext

  return (
    <Layout location={location} title={siteTitle}>
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
        location={location}
      />
      <article>
        <header>
          <h1 className={ blogPostStyles.title }>
            {post.frontmatter.title}
          </h1>
          <p className={ blogPostStyles.date }>
            {post.frontmatter.date}
          </p>
        </header>
        <section dangerouslySetInnerHTML={{ __html: post.html }} />
        <hr />
        <footer>
          <Bio location={location} />
        </footer>
      </article>

      <nav>
        <ul className={ blogPostStyles.postsNav }>
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

      <section>
        <form
          action="https://buttondown.email/api/emails/embed-subscribe/nickang"
          method="post"
          target="popupwindow"
          onsubmit="window.open('https://buttondown.email/nickang', 'popupwindow')"
          class="embeddable-buttondown-form"
        >
          <input type="email" name="email" id="bd-email" placeholder="enter email"></input>
          <input type="hidden" value="1" name="embed"></input>
          <span>&nbsp;</span>
          <input type="submit" value="Subscribe by email"></input>
        </form>
      </section>
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
        title
        date(formatString: "MMMM DD, YYYY")
        description
      }
    }
  }
`

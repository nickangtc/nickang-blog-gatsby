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
        description={post.frontmatter.excerpt || post.excerpt}
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
          onSubmit={() => window.open('https://buttondown.email/nickang', 'popupwindow')}
          className="embeddable-buttondown-form"
        >
          <p className={blogPostStyles.newsletterDescription}>
            If you enjoy reading this blog, you might like my <strong>Heart to Heart weekly newsletter</strong>.
            You can find previous issues <a href="https://buttondown.email/nickang/archive" target="_blank" rel="noreferrer">here</a>. See you in the next email?
          </p>
          <input type="email" name="email" id="bd-email" placeholder="Your email address"></input>
          <input type="hidden" value="1" name="embed"></input>
          <input type="hidden" value="blog view article footer form" name="metadata__origin"></input>
          <span>&nbsp;</span>
          <input type="submit" value="Subscribe"></input>
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
        excerpt
      }
    }
  }
`

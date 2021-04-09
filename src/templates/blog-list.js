import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import blogListStyles from "./blog-list.module.scss"

const BlogList = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title
  const posts = data.allMarkdownRemark.edges

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Blog posts" location={location} />
      {posts.map(({ node }) => {
        const title = node.frontmatter.title || node.fields.slug

        return (
          <article key={node.fields.slug} className={ blogListStyles.article }>
            <header>
              <h2 className={ blogListStyles.title }>
                <Link to={node.fields.slug}>
                  {title}
                </Link>
              </h2>
              <time dateTime={ node.frontmatter.date } className={ blogListStyles.date }>{ node.frontmatter.date }</time>
            </header>
            <p
              dangerouslySetInnerHTML={{
                __html: node.frontmatter.excerpt || node.excerpt,
              }}
              className={ blogListStyles.excerpt }
            />
          </article>
        )
      })}
    </Layout>
  )
}

export default BlogList

export const pageQuery = graphql`
  query pageQuery($skip: Int!, $limit: Int!) {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      filter: { frontmatter: { status: { ne: "draft" } } }
      sort: { fields: [frontmatter___date], order: DESC }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            excerpt
          }
        }
      }
    }
  }
`
import React, { useState } from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import blogStyles from "./blog.module.scss"

const BlogIndex = ({ data, location }) => {
  const [isExpanded, setExpand] = useState(false)

  const siteTitle = data.site.siteMetadata.title
  const posts = data.allMarkdownRemark.edges
  const articleCount = posts.length
  const articleLimitOnPage = 50

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Blog | All posts" location={location} />
      {posts.map(({ node }, index) => {
        const title = node.frontmatter.title || node.fields.slug
        const isToBeHiddenArticle = (index > articleLimitOnPage) && !isExpanded

        return (
          <article key={node.fields.slug} className={ isToBeHiddenArticle ? blogStyles.hidden : '' }>
            <header>
              <h2 className={ blogStyles.title }>
                <Link style={{ boxShadow: `none` }} to={node.fields.slug}>
                  {title}
                </Link>
              </h2>
              <small className={ blogStyles.date }>{node.frontmatter.date}</small>
            </header>
            { /** <section>
              <p
                dangerouslySetInnerHTML={{
                  __html: node.frontmatter.description || node.excerpt,
                }}
              />
            </section>
              */ }
          </article>
        )
      })}
      <div id="expand-control" className={ isExpanded ? blogStyles.hidden : '' }>
        <p> </p>
        <small>Displaying { articleLimitOnPage } of { articleCount } articles. <button onClick={() => setExpand(true)}>Show all</button>.</small>
      </div>
    </Layout>
  )
}

export default BlogIndex

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
    ) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "DD.MM.YYYY")
            title
            description
          }
        }
      }
    }
  }
`

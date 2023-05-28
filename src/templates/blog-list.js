import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SearchEngineOptimisation from "../components/searchengineoptimisation"
import {
  date,
  article,
  excerpt,
  postsNav,
  titleStyle,
} from "./blog-list.module.scss"

const BlogList = ({ data, location, pageContext }) => {
  const pathname = "/blog"
  const siteTitle = data.site.siteMetadata.title
  const posts = data.allMarkdownRemark.edges

  const { currentPage, numPages } = pageContext
  const isFirst = currentPage === 1
  const isSecond = currentPage === 2
  const isLast = currentPage === numPages

  const nextPage = `${pathname}/${(currentPage + 1).toString()}`
  let prevPage = isFirst ? "/" : `${pathname}/${(currentPage - 1).toString()}`
  if (isSecond) {
    // /blog/1 is invalid => /blog is the correct 1st page
    prevPage = pathname
  }

  return (
    <Layout location={location} title={siteTitle}>
      <SearchEngineOptimisation title="Blog posts" location={location} />
      <p>
        Want to see a full list instead of pages of results? See{" "}
        <Link to="/e">here</Link>.
      </p>
      {posts.map(({ node }) => {
        const title = node.frontmatter.title || node.fields.slug
        const datesLine =
          node.frontmatter.date_updated &&
          node.frontmatter.date_updated !== node.frontmatter.date_published
            ? `${node.frontmatter.date_published} | updated: ${node.frontmatter.date_updated}`
            : `${node.frontmatter.date_published}`

        return (
          <span key={node.fields.slug}>
            <article className={article}>
              <header>
                <h1 className={titleStyle}>
                  <Link to={node.fields.slug}>{title}</Link>
                </h1>
                <time className={date}>{datesLine}</time>
              </header>
              <p className={excerpt}>{node.excerpt}</p>
            </article>
            <hr></hr>
          </span>
        )
      })}

      <nav>
        <ul className={postsNav}>
          <li>
            {!isFirst && (
              <Link to={prevPage} rel="prev">
                ← Newer posts
              </Link>
            )}
          </li>
          <li>
            Page {currentPage} / {numPages}
          </li>
          <li>
            {!isLast && (
              <Link to={nextPage} rel="next">
                Older posts →
              </Link>
            )}
          </li>
        </ul>
      </nav>
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
      sort: { fields: [frontmatter___date_published], order: DESC }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          html
          excerpt(pruneLength: 300)
          fields {
            slug
          }
          frontmatter {
            date_published(formatString: "DD MMM YYYY")
            title
            excerpt
          }
        }
      }
    }
  }
`

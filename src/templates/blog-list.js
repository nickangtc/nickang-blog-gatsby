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
      {posts.map(({ node }) => {
        const title = node.frontmatter.title || node.fields.slug

        return (
          <span key={node.fields.slug}>
            <article className={article}>
              <header>
                <h1 className={titleStyle}>
                  <Link to={node.fields.slug}>{title}</Link>
                </h1>
                <time dateTime={node.frontmatter.date} className={date}>
                  {node.frontmatter.date}
                </time>
              </header>
              <p
                dangerouslySetInnerHTML={{
                  __html: node.html,
                }}
                className={excerpt}
              />
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
      sort: { fields: [frontmatter___date], order: DESC }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          html
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(fromNow: true)
            title
            excerpt
          }
        }
      }
    }
  }
`

import React from 'react'
import { graphql, Link } from 'gatsby'

import Layout from '../components/layout'
import indexPageStyles from "./index.module.scss"
import SEO from '../components/seo'

const HomePage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title
  const newestPostsData = data.allMarkdownRemark.edges
  const newestPosts = newestPostsData.map((post, index) => {
    const { date } = post.node.frontmatter
    const dateSansYear = date.split(', ')[0]
    return (
      <li key={index} className={ indexPageStyles.articleItem }>
        <time dateTime={date} className={ indexPageStyles.date }>{ dateSansYear }</time>
        <Link to={ post.node.fields.slug } className={ indexPageStyles.articleLink }>{ post.node.frontmatter.title }</Link>
      </li>
    )
  })

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Home" location={location} />
      <h1 id="my-digital-garden">Hey, I'm Nick Ang. <span role="img" aria-label="hand wave emoji">👋</span></h1>
      <p>I work as a software engineer and live as a writer. I explore and write about living a meaningful life.</p>
      <p>New articles every Sunday. <Link to="/subscribe">Subscribe</Link> to get occasional updates.</p>

      <h2>Latest articles</h2>
      <ul className={ indexPageStyles.articles }>
        { newestPosts }
      </ul>
      <nav>
        <p><Link to="/blog" className={ indexPageStyles.navItem }>Browse all articles →</Link></p>
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
      sort: { fields: [frontmatter___date], order: DESC }
      limit: 8
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
          }
        }
      }
    }
  }
`

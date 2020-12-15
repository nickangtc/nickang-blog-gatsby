import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const NowPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Now" location={location} />
      <h1>Now</h1>
      <p>This page was more useful in the past.</p>
      <hr />
      <p><em>Page last updated: 14.12.2020</em></p>
    </Layout>
  )
}

export default NowPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`

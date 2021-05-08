import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const LearnTechPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle}>
      <Seo title="Learn Tech" location={location} />
      <h1>Learn Tech</h1>
      <p>This page was more useful in the past.</p>
      <p><em>Page last updated: 14.12.2020</em></p>
    </Layout>
  )
}

export default LearnTechPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`

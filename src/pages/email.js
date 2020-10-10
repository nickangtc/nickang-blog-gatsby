import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const EmailPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Now" location={location} />
      <h1>Email</h1>
      <p>heynickang at gmail dot com</p>
      <p>If you read my blog, you are likely my kind of person. So email me and let's talk!</p>
    </Layout>
  )
}

export default EmailPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`

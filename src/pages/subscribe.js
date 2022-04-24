import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SearchEngineOptimisation from "../components/searchengineoptimisation"

const SubscribePage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle}>
      <SearchEngineOptimisation title="Subscribe" location={location} />
      <h1>Subscribe</h1>
      <iframe
        src="https://nickang.substack.com/embed"
        width="100%"
        height="320"
        style={{ border: "1px solid #EEE", background: "white" }}
        frameborder="0"
        scrolling="no"
        title="Subscribe to In the End newsletter"
      ></iframe>
    </Layout>
  )
}

export default SubscribePage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`

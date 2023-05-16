import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SearchEngineOptimisation from "../components/searchengineoptimisation"

const ContactPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle}>
      <SearchEngineOptimisation title="Now" location={location} />
      <h1>Contact</h1>
      <p>Drop your email to: heynickang at gmail dot com</p>
      <p>Things I love hearing about:</p>
      <ul>
        <li>What did you just read? What did you think?</li>
        <li>Who are you?</li>
        <li>What made you land on this page?</li>
        <li>Job opportunities</li>
        <li>Ideas for collaboration</li>
      </ul>
    </Layout>
  )
}

export default ContactPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`

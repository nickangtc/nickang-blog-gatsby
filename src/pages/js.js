import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SearchEngineOptimisation from "../components/searchengineoptimisation"

const JobSearchPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle}>
      <SearchEngineOptimisation title="Nick's Job Search" location={location} />
      <h1>Details for recruiters</h1>
      <p>
        Hi! Thank you for visiting this obscure page on the internet. I was laid
        off by Shopify as part of a mass layoff in 2023 where 20% of the global
        workforce was made redundant. I'm now looking out for new opportunities.
      </p>
      <p>
        My{" "}
        <a target="_blank" href="https://www.linkedin.com/in/nickangtc/">
          LinkedIn profile
        </a>{" "}
        is my most up-to-date resume.
      </p>
      <p>
        While I figure out what exactly I want (that's honestly such a tough
        thing to do!), I'm sharing a list of hard requirements that I know I
        don't want 🚫 to be working on next, which is meant to save both you and
        me some time:
      </p>
      <ul>
        <li>No fully in-person work (prefer remote, or hybrid)</li>
        <li>No roles based outside of Germany</li>
      </ul>
    </Layout>
  )
}

export default JobSearchPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`

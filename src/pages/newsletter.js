import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const NewsletterPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Newsletter" />
      <h1>Newsletter</h1>
      <p>Find previous newsletters here. <a target="_blank" rel="noreferrer" href="http://eepurl.com/dj-HR5">Click here</a> to subscribe.</p>

      <h3>April 2020</h3>

      <p><a rel="noreferrer noopener" href="https://us9.campaign-archive.com/?u=b7775ecf0016d7b6b0a26c6f4&amp;id=366ba4f788" target="_blank">Sunday dispatch #5</a>. 26 Apr 2020. Learning from @dan_abramov's approach to iterative course creation with justjavascript.com. Reflection about diving into coding again.</p>

      <p><a rel="noreferrer noopener" href="https://us9.campaign-archive.com/?u=b7775ecf0016d7b6b0a26c6f4&amp;id=366ba4f788" target="_blank">Sunday dispatch #4</a>. 19 Apr 2020. One idea from each book I am currently reading and the Zettelkasten note-taking system.</p>

      <h3>January 2020</h3>

      <p><a href="https://us9.campaign-archive.com/?u=b7775ecf0016d7b6b0a26c6f4&amp;id=6b06747151">Sunday dispatch #3</a>. 19 Jan 2020.</p>

      <p><a href="https://us9.campaign-archive.com/?u=b7775ecf0016d7b6b0a26c6f4&amp;id=ee45108ac5">Sunday dispatch #2</a>. 13 Jan 2020. </p>

      <p><a href="https://us9.campaign-archive.com/?u=b7775ecf0016d7b6b0a26c6f4&amp;id=223923bda0">Sunday dispatch #1</a>. 05 Jan 2020. </p>
    </Layout>
  )
}

export default NewsletterPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`

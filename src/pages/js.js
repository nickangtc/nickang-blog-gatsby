import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SearchEngineOptimisation from "../components/searchengineoptimisation"

const JobSearchPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle}>
      <SearchEngineOptimisation title="Nick's Job Search" location={location} />
      <h1>My next job wishlist</h1>
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
      <p>More details to come.</p>
      <p>What people have said about me:</p>
      <blockquote>
        "Nick is technically strong, a fast learner and takes initiative to
        solve problems. He is a team player and a great communicator and will be
        a great value to any team that he is a part of." - Justin Y.
      </blockquote>
      <blockquote>
        "I've personally seen him rock it as a writer, as a team lead, as a
        software engineer, as a project manager, as a mentor, and as a brilliant
        coworker. Working with Nick really made me feel like I belonged in the
        team." - Milan R.
      </blockquote>
      <blockquote>
        "I had the privilege of being taught by Nick during my time at General
        Assembly. Nick was one of my teaching assistants in the course and he
        was one of the better educators I ever had in my learning journey thus
        far. Nick is patient, logical, and approaches every single challenge
        with a zealous attitude. I am really honoured to have been taught by
        such a marvellous educator." - Zhao L.
      </blockquote>
      <blockquote>
        "I thoroughly enjoyed having Nicholas as a teacher. He is very
        knowledgeable yet able to explain difficult concepts clearly. He made
        the course exciting and interactive, keeping us all engaged. Nicholas
        was always approachable and did go out of his way to help the class
        understand concepts, making himself available outside office hours to
        solve queries, provide guidance debugging code and even keep our spirits
        up!" - Laura G.
      </blockquote>
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

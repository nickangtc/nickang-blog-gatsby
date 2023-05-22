import React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/layout"
import SearchEngineOptimisation from "../components/searchengineoptimisation"

const JobSearchPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle}>
      <SearchEngineOptimisation title="Nick's Job Search" location={location} />
      <h1>I'm looking for my next role</h1>
      <p>
        Environmental Studies major turned Entrepreneur turned Software
        Engineer. I learn constantly, teach openly, communicate clearly, and
        consistently get things done through collaboration & leading through
        influence. The <Link to="/topics">posts</Link> on this blog are the
        result of my continuous learning and sharing.
      </p>
      <p>
        My{" "}
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.linkedin.com/in/nickangtc/"
        >
          LinkedIn profile
        </a>{" "}
        is my most up-to-date resume. I do keep a separate PDF with more details
        - reach out in case you need that.
      </p>
      <p>
        My only must-have for the next role is that it is{" "}
        <strong>fully remote</strong>, and I should be employed in Germany.
      </p>
      <h2>What coworkers and managers say about me</h2>
      <blockquote>
        "I had the pleasure of working closely with Nick for nearly one and a
        half years, and it was truly remarkable. Nick's exceptional project
        ownership skills stood out throughout our collaboration. Whether it was
        tackling tasks on the backend or frontend, he consistently delivered
        outstanding results. What truly impressed me was his natural ability to
        navigate domain complexity with ease and his exceptional communication
        skills when engaging with stakeholders."{" "}
        <cite>Carlos R, senior software engineer (Shopify)</cite>
      </blockquote>
      <blockquote>
        "Nick is technically strong, a fast learner and takes initiative to
        solve problems. He is a team player and a great communicator and will be
        a great value to any team that he is a part of."{" "}
        <cite>Justin Y, ex-manager, cofounder (Altitude Labs)</cite>
      </blockquote>
      <blockquote>
        "I've personally seen him rock it as a writer, as a team lead, as a
        software engineer, as a project manager, as a mentor, and as a brilliant
        coworker. Working with Nick really made me feel like I belonged in the
        team." <cite>Milan R, Product Manager (Smartly.io)</cite>
      </blockquote>
      <blockquote>
        "I had the privilege of being taught by Nick during my time at General
        Assembly. Nick was one of my teaching assistants in the course and he
        was one of the better educators I ever had in my learning journey thus
        far. Nick is patient, logical, and approaches every single challenge
        with a zealous attitude. I am really honoured to have been taught by
        such a marvellous educator."{" "}
        <cite>Zhao L, ex-student, software engineer (GovTech Singapore)</cite>
      </blockquote>
      <blockquote>
        "I thoroughly enjoyed having Nicholas as a teacher. He is very
        knowledgeable yet able to explain difficult concepts clearly. He made
        the course exciting and interactive, keeping us all engaged. Nicholas
        was always approachable and did go out of his way to help the class
        understand concepts, making himself available outside office hours to
        solve queries, provide guidance debugging code and even keep our spirits
        up!"{" "}
        <cite>
          Laura G, ex-student, professional in the publishing industry
        </cite>
      </blockquote>
      <p>
        Have a role where you're looking for someone with these traits? Send me
        a message on{" "}
        <a href="https://www.linkedin.com/in/nickangtc/">LinkedIn</a>, or{" "}
        <Link to="/contact">email</Link> me.
      </p>
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

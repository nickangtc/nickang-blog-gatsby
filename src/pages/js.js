import React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/layout"
import SearchEngineOptimisation from "../components/searchengineoptimisation"

const JobSearchPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle}>
      <SearchEngineOptimisation title="Nick's Job Search" location={location} />
      <h1>I'm looking for a new opportunity</h1>
      <p>
        Have a role where you're looking for someone with these traits? Send me
        a message on{" "}
        <a href="https://www.linkedin.com/in/nickangtc/">LinkedIn</a>, or{" "}
        <Link to="/contact">email</Link> me.
      </p>
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
        is my most up-to-date resume.
      </p>
      <p>
        My only must-have for the next role is that it is{" "}
        <strong>fully remote</strong>, and I should be employed in Germany.
      </p>
      <p>What coworkers and managers have said about me:</p>
      <blockquote>
        "Nick is technically strong, a fast learner and takes initiative to
        solve problems. He is a team player and a great communicator and will be
        a great value to any team that he is a part of." - Justin Y, my
        ex-manager.
      </blockquote>
      <blockquote>
        "I've personally seen him rock it as a writer, as a team lead, as a
        software engineer, as a project manager, as a mentor, and as a brilliant
        coworker. Working with Nick really made me feel like I belonged in the
        team." - Milan R, my ex-colleague.
      </blockquote>
      <blockquote>
        "I had the privilege of being taught by Nick during my time at General
        Assembly. Nick was one of my teaching assistants in the course and he
        was one of the better educators I ever had in my learning journey thus
        far. Nick is patient, logical, and approaches every single challenge
        with a zealous attitude. I am really honoured to have been taught by
        such a marvellous educator." - Zhao L, my ex-student.
      </blockquote>
      <blockquote>
        "I thoroughly enjoyed having Nicholas as a teacher. He is very
        knowledgeable yet able to explain difficult concepts clearly. He made
        the course exciting and interactive, keeping us all engaged. Nicholas
        was always approachable and did go out of his way to help the class
        understand concepts, making himself available outside office hours to
        solve queries, provide guidance debugging code and even keep our spirits
        up!" - Laura G, another ex-student.
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

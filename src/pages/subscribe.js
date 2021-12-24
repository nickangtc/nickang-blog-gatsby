import React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/layout"
import SearchEngineOptimisation from "../components/searchengineoptimisation"

const SubscribePage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle}>
      <SearchEngineOptimisation title="Subscribe" location={location} />
      <h1>Subscribe</h1>
      <p>
        If you enjoy reading this blog, you might like the{" "}
        <strong>Heart to Heart newsletter</strong>. When it lands in your inbox,
        you can expect:
      </p>
      <ul>
        <li>
          Reflections on the process of running{" "}
          <Link to="/everydays">Everydays</Link> and the{" "}
          <a href="https://www.youtube.com/channel/UCaltHUOCehm4Ecl-oTGO2ww">
            YouTube channel
          </a>
        </li>
        <li>Freebies like the ebooks that I know I will eventually write</li>
        <li>
          Behind the scenes look at how I'm juggling my creator journey with
          life and career{" "}
        </li>
        <li>
          ... and everything else in between. As usual, I'm making things up as
          I go
        </li>
      </ul>
      <p>
        You can find previous issues{" "}
        <a
          href="https://buttondown.email/nickang/archive"
          target="_blank"
          rel="noreferrer"
        >
          here
        </a>
        .
      </p>

      <section>
        <form
          action="https://buttondown.email/api/emails/embed-subscribe/nickang"
          method="post"
          target="popupwindow"
          onSubmit={() =>
            window.open("https://buttondown.email/nickang", "popupwindow")
          }
          className="embeddable-buttondown-form"
        >
          <input
            type="email"
            name="email"
            id="bd-email"
            placeholder="Your email address"
          ></input>
          <input type="hidden" value="1" name="embed"></input>
          <input
            type="hidden"
            value="blog dedicated subscribe page"
            name="metadata__origin"
          ></input>
          <span>&nbsp;</span>
          <input type="submit" value="Subscribe"></input>
        </form>
        <small>
          <a
            href="https://buttondown.email"
            target="_blank"
            rel="noreferrer"
            style={{ color: "black" }}
          >
            Powered by Buttondown.
          </a>
          <p>Your email address will always be kept private.</p>
        </small>
      </section>
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

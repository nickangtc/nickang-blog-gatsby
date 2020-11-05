import React from 'react'
import { graphql, Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

const HomePage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title
  const newestPostsData = data.allMarkdownRemark.edges
  const newestPosts = newestPostsData.map((post, index) => {
    const dateParts = post.node.frontmatter.date.split('-')
    const dateFormatted = `${dateParts[1]}.${dateParts[2]}`
    return (
      <li key={index}>
        { dateFormatted } <Link to={ post.node.fields.slug }>{ post.node.frontmatter.title }</Link>
      </li>
    )
  })

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Home" location={location} />
      <div style={{
        backgroundColor: 'lightgray',
        paddingLeft: '1rem'
      }}>
        <em><strong>November 2020 update</strong>: <Link to="/2020-11-01-writing-a-book-during-nanowrimo-2020/">I'm writing a novel</Link>! Follow my progress <a href="https://nickangtc.github.io/nanowrimo-2020">here</a>.</em>
      </div>
      <h1 id="my-digital-garden">Hey, I'm Nick Ang.</h1>
      <p>I'm a guy from Singapore, currently living in Berlin. <span role="img" aria-label="hand wave emoji">👋</span> </p>
      <p>This is my digital garden, where I sow new ideas, tend to the growing and matured ones, and occasionally prune the undesirable. It's open for visitation.</p>
      <p>But like a real-life garden, expect organised chaos when you <Link to="/blog">browse the blog</Link>.</p>

      <h2>Newest articles</h2>
      <ul>
        { newestPosts }
      </ul>

      <h2>Personal favourites</h2>
      <ul>
        <li>
          <Link to="/2018-11-06-im-not-sorry-for-being-confused/">I'm not sorry for being confused</Link>
        </li>
        <li>
          <Link to="/2017-03-19-7-things-i-learned-about-programming-bootcamps/">What I learned about progrmaming bootcamps</Link>
        </li>
        <li>
          <Link to="/2016-08-03-killing-meat/">Anthony Bourdain killed a red stag</Link>
        </li>
        <li>
          <Link to="/2018-07-21-do-individual-efforts-matter/">Do individual efforts matter?</Link>
        </li>
        <li>
          <Link to="/2018-02-13-problems-mine-bear/">My problems are mine to bear</Link>
        </li>
      </ul>

      <h2>Blurb</h2>
      <p>I was born in Singapore, lived there my whole life, and am currently living in Berlin, Germany. At almost 30 years old, <a href="/2020-06-01-why-i-moved-to-berlin/">making this move</a> remains one of my proudest accomplishments because I have dreamed since I was in primary school to experience life abroad. So I guess that means I am living my dream.</p>
      <p>Professionally, and I should say <em>at the moment</em>, I am a software engineer. My strengths are my ability to learn and teach. I currently work full-time as a service operations engineer at <a href="https://smartly.io">Smartly.io</a>, a Finnish ad-tech company.</p>
      <p>I’ve taught close to 100 strangers and colleagues from scratch how to code. That was my first taste of being consequential in people’s lives. I hope to continue to be useful to people beyond the confines of my full-time employment and this site exists to help me fulfil that hope.</p>
      <p>Rapid-fire facts:</p>
      <ul>
        <li>I'm married and have a toy poodle Brownie who has his own <a href="https://www.instagram.com/brownie_ang/">Instagram account</a></li>
        <li>Once I tried to create a "laptop for writers" as a <a href="/2016-03-12-hardware-startup-why-shelf/">startup that failed</a>. Now I unironically write on a product created (later) by another company Astrohaus. They call it the Freewrite and I love <a href="/2019-12-15-first-impressions-of-the-astrohaus-freewrite">my Freewrite</a></li>
        <li>My major is in Environmental Studies from NUS. I don't remember 95 percent of what I learned but rely on the other 5 percent every moment to help me think about the world</li>
      </ul>
      <p>I collated some things that I would recommend, like podcasts and blogs, in the <Link to="/recommendations">Recommendations</Link> corner.</p>
      <p>So, that's my <a href="https://sive.rs/publicu">public persona</a> in brief. Send me a <a target="_blank" rel="noreferrer" href="https://twitter.com/messages/compose?recipient_id=17964382&text=Hey%20Nick!">direct message on twitter</a> or <Link to="/email">email</Link> to talk!</p>
    </Layout>
  )
}

export default HomePage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: 5
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            date
          }
        }
      }
    }
  }
`

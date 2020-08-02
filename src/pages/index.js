import React from 'react'
import { graphql, Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

const HomePage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title
  const latestPostsData = data.allMarkdownRemark.edges
  const latestPosts = latestPostsData.map((post, index) => {
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
      <SEO title="Home" />
      <h1 id="my-digital-garden">Hey, I'm Nick Ang.</h1>
      <p>I'm a software developer and instructor from Singapore <span role="img" aria-label="Singapore flag">🇸🇬</span></p>
      <p>This is my digital garden, where I sow new ideas, tend to the growing and matured ones, and occasionally prune the undesirable.</p>
      <p>Like a real-life garden, you shoud expect some organised chaos when you <Link to="/blog">browse the blog</Link>.</p>

      <h2>Latest posts</h2>
      <ul>
        { latestPosts }
      </ul>

      <h2>Personal favourites</h2>
      <ul>
        <li>
          <Link to="/2020-05-24-my-digital-garden/">My digital garden</Link>
        </li>
        <li>
          <Link to="/2017-03-12-general-assembly-singapore-review/">General Assembly Singapore review</Link>
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
          <Link to="/2017-05-31-branding/">Same product, different brands</Link>
        </li>
      </ul>

      <p>Welcome to my digital garden!</p>

      <h2>A bit more about me</h2>
      <p>I was born in Singapore, lived there my whole life, and am currently living in Berlin, Germany. At almost 30 years old, making this move remains one of my proudest accomplishments because I have dreamed since I was in primary school to experience life abroad. So I guess that means I am living my dream.</p>
      <p>Professionally, I am a software engineer. I am not a &quot;10x engineer&quot;. I think my strengths are my ability to learn and teach, and my soft skills, which are currently being put to use at my full-time job as a Service Operations Engineer at <a href="https://smartly.io">Smartly.io</a>, a Finnish advertising technology company.</p>
      <p>I’ve taught close to 100 strangers and some colleagues how to code from scratch and it gave me a first taste of being consequential in people’s lives. I hope to continue to be useful to people beyond the confines of my full-time employment and this site exists to help me fulfil that hope.</p>
      <p>Some facts:</p>
      <ul>
        <li>I am married, no children yet. We have a toy poodle called Brownie who has his own <a href="https://www.instagram.com/brownie_ang/">Instagram account</a></li>
        <li>I once tried to create a &quot;laptop for writers&quot; as a startup and I failed, and I am unironically writing this on a product created afterwards by Astrohaus called the Freewrite. I love <a href="/2019-12-15-first-impressions-of-the-astrohaus-freewrite">my Freewrite</a></li>
        <li>I majored in Environmental Studies at the National University of Singapore (NUS) and don&#39;t remember 95 percent of the content. The other 5 percent I rely on everyday to help me think about problems and potential solutions</li>
      </ul>
      <p>I collated some things that I would recommend, like podcasts and blogs, in the <Link to="/recommendations">Recommendations</Link> corner.</p>
      <p>So, that&#39;s me in brief. Send me a <a href="https://twitter.com/nickang">tweet</a> if you have something you want to talk about!</p>
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
      limit: 3
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

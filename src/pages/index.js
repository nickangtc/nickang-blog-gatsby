import React from 'react'
import { graphql, Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

const HomePage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Home" />
      <h1 id="my-digital-garden">Hey, I'm Nick Ang.</h1>
      <p>I'm a software developer and instructor from Singapore <span role="img" aria-label="Singapore flag">🇸🇬</span></p>
      <p>This place is my digital garden, a term that I adopted from <a href="https://joelhooks.com/digital-garden">Joel Hooks</a> to describe what I am trying to do with this blog-ish thing. This is where I sow new ideas, tend to the growing and matured ones, and occasionally prune the undesirable. I am an ideas person, so being a state of thinking is a mainstay and I write whenever I can to clear my mind and clarify my thoughts. The ideas that I discover and find worth sharing usually end up here so I can share them with friends and whoever might end up in here.</p>
      <p>Like a real-life garden, you shoud expect some organised chaos when you <Link to="/blog">browse the posts</Link>.</p>
      <p>Welcome to my digital garden!</p>

      <h2>A bit more about me</h2>
      <p>I was born in Singapore, lived there my whole life, and am currently living in Berlin, Germany. At almost 30 years old, making this move remains one of my proudest accomplishments because I have dreamed since I was in primary school to experience life abroad. So I guess that means I am living my dream.</p>
      <p>Professionally, I am a software engineer. I am not a &quot;10x engineer&quot;. I think my strengths are my ability to learn and teach, and my soft skills, which are currently being put to use at my full-time job as a Service Operations Engineer at Smartly.io, a Finnish advertising technology company.</p>
      <p>I’ve taught close to 100 strangers and some colleagues how to code from scratch and it gave me a first taste of being consequential in people’s lives. I hope to continue to be useful to people beyond the confines of my full-time employment and this site exists to help me fulfil that hope.</p>
      <p>Some notable things about me:</p>
      <ul>
      <li>I am married, no children yet. We have a toy poodle called Brownie who has his own <a href="https://www.instagram.com/brownie_ang/">Instagram account</a></li>
      <li>I once tried to create a &quot;laptop for writers&quot; as a startup and I failed, and I am unironically writing this on a product created afterwards by Astrohaus called the Freewrite. I love <a href="/2019-12-15-first-impressions-of-the-astrohaus-freewrite">my Freewrite</a></li>
      <li>I majored in Environmental Studies at the National University of Singapore (NUS) and don&#39;t remember 95 percent of the content. The other 5 percent I rely on everyday to help me think about problems and potential solutions</li>
      </ul>
      <p>I collated some things that I would recommend, like podcasts and blogs, in the <Link to="/recommendations">Recommendations</Link> corner.</p>
      <p>So, that&#39;s me in brief. I&#39;m still learning about myself everyday so what I write here is just a snapshot. Isn’t that the case for all of us? :)</p>
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
  }
`

import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import img1 from "../../content/assets/nick-ang-weird-profile-pic.jpg"

const RecommendationsPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Recommendations" location={location} />
      <h1>Recommendations</h1>
      <img src={img1} alt="nick ang's excited face" style={{ maxWidth: '30%' }} />
      <p><em>The signals above the noise. The things that put this look on my face.</em></p>
      <p>This list is always a work-in-progress to curate the (master)pieces that I come across in my life. I'm depositing them into this public page so that I can refer to it myself and share it with people I meet any time.</p>
      <h2>Personal growth</h2>
      <p><a href="https://tim.blog/podcast/" target="_blank" rel="noreferrer noopener"><strong>The Tim Ferriss Show podcast</strong></a>. A treasure trove of interviews with top-performers in almost every field, from tech entrepreneurship and investing to psychedelics research and blogging. The quality ranges from good to brilliant.</p>
      <p><a href="https://john.do/about/" target="_blank" rel="noreferrer noopener"><strong>John Saddington's blog</strong></a>. I keep going back to reading John's blog because it is inspirational light reading to me. The guy is a software engineer, entrepreneur, and writer all in one. That's the kind of person I think (or hope) I am. Plus, he's a documentarian, having blogged almost every single day <a href="https://john.do/why/" target="_blank" rel="noreferrer noopener">since 2001</a>. How's <em>that</em> for consistency?</p>
      <h2>Productivity</h2>

      <p><a href="https://praxis.fortelabs.co/the-p-a-r-a-method-a-universal-system-for-organizing-digital-information-75a9da8bfb37/" target="_blank" rel="noreferrer noopener"><strong>PARA method for organising things as knowledge workers</strong></a>. I read this recently and it made so much sense that I immediately adopted it. My implementation of PARA is done in the <a href="http://notion.so/" target="_blank" rel="noreferrer noopener">Notion app</a>.</p>
      <h2>Entrepreneurship and Business</h2>

      <p><strong><a href="https://www.goodreads.com/book/show/211099.Losing_My_Virginity" target="_blank" rel="noreferrer noopener">Losing My Virginity</a> by Richard Branson</strong>. I'm often regarded by friends as a bit of a odd because I have a different way of looking at things. I trace that habit of orthogonal thinking to this book. In my opinion, it could be renamed as "The ultimate guide to thinking and acting like an entrepreneur" and it wouldn't be ironic.</p>

      <p><strong><a href="https://sivers.org/a" target="_blank" rel="noreferrer noopener">Anything You Want</a> by Derek Sivers</strong>. Book containing lessons on customer service, working with people, and business strategy that entrepreneur Derek Sivers learned from selling his first business CD-baby in the early days of the internet. Also, he is an incredible storyteller. I particularly like the interview he did with Tim Ferriss (<a href="https://tim.blog/2015/12/14/derek-sivers-on-developing-confidence-finding-happiness-and-saying-no-to-millions/">podcast</a>).</p>

      <p><strong><a rel="noreferrer noopener" href="https://stratechery.com/" target="_blank">Stratechery</a> by Ben Thompson</strong>. I'm late to the party in discovering this amazing one-person publication. Thompson writes in-depth analyses of technology and business in a way that is concise, timely, and easy to absorb. I stumbled on this gem of an online publication with his article <a href="https://stratechery.com/2018/the-bill-gates-line/" target="_blank" rel="noreferrer noopener">The Bill Gates Line</a>.</p>
      <hr />
      <p>If you have a recommendation for me, please let me know on <a href="https://twitter.com/nickang">twitter</a>!</p>
    </Layout>
  )
}

export default RecommendationsPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`

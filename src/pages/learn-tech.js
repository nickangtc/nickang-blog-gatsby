import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import img1 from "../../content/assets/desktop-setup-nick-ang.png"
import img2 from "../../content/assets/bits-please-nick-ang-blog-instagram.png"
import img3 from "../../content/assets/nick-ang-youtube.png"

const LearnTechPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Learn Tech" />

      <img src={img1} alt="my desktop setup at work nick ang" class="wp-image-3830"/>
      <p><em>One of my early desktop setups at work at Smartly.io (it keeps evolving).</em></p>

      <p>I wrote a lot of articles when I was learning to code as my way of solidifying my learning. Here's a compilation of the ones I think may be helpful to you if you're just beginning to get into the world of digital tech.</p>

      <h2>Getting started</h2>
      <ul><li><a href="https://www.nickang.com/how-internet-work/">How does the internet work?</a></li><li><a href="https://www.nickang.com/what-is-an-api/">What is an API?</a></li><li><a href="https://www.nickang.com/cs-non-cs-software-engineers/">CS vs non-CS software engineers</a></li><li><a href="https://www.nickang.com/what-is-dry-programming/">What does "DRY" mean?</a></li><li><a href="https://www.nickang.com/text-vs-code/">Text vs Code</a></li><li><a href="https://www.nickang.com/bugs/">What are "bugs" in software?</a></li><li><a href="https://www.nickang.com/programming-like-exercise/">Programming is like exercise</a></li><li><a href="https://www.nickang.com/courage-to-build/">Regaining the courage to build</a></li><li><a href="https://www.nickang.com/a-day-in-the-life-of-a-software-developer/">A day in the life of a software developer</a></li><li><a href="https://www.nickang.com/technical-skills-are-not-just-for-software-developers/">Technical skills are not just for developers</a></li></ul>

      <h2>Articles by topic</h2>

      <p><strong>Data Structures and Algorithms</strong></p>
      <ul><li><a href="https://www.nickang.com/algorithm-time-complexity-big-o-notation/">Big O and time complexity</a></li><li><a href="https://www.nickang.com/implementing-queue-javascript/">Queues in JavaScript</a></li><li><a href="https://www.nickang.com/implement-stack-javascript-array/">Stacks in JavaScript</a></li><li><a href="https://www.nickang.com/bubble-sort-explained/">Bubble sort explained</a></li><li><a href="https://www.nickang.com/binary-search-explained/">Binary search explained</a></li><li><a href="https://www.nickang.com/binary-search-tree-explained/">Binary search trees explained</a></li><li><a href="https://www.nickang.com/linked-list-explained-part-1/">Linked lists in JavaScript</a></li></ul>

      <p><strong>JavaScript</strong></p>
      <ul><li><a href="https://www.nickang.com/how-to-think-about-data-structures-in-javascript-when-to-use-what/">How to think about data structures in JavaScript</a></li><li><a href="https://www.nickang.com/developers-use-object-prototype-hasownproperty-call/">Why use Object.prototype.hasOwnProperty.call()?</a></li><li><a href="https://www.nickang.com/how-to-clone-class-instance-javascript/">How to clone a class instance in JavaScript</a></li></ul>

      <p><strong>Development Workflow and Tools</strong></p>
      <ul><li><a href="https://www.nickang.com/why-programmers-use-command-line-interface/">Why do programmers use the command line?</a></li><li><a href="https://www.nickang.com/code-readability-or-efficiency/">Code readability or efficiency?</a></li><li><a href="https://www.nickang.com/git-and-github/">All you need to know about Git and GitHub</a></li><li><a href="https://www.nickang.com/setup-eslint-next-project/">How to set up ESLint for your next project</a></li><li><a href="https://www.nickang.com/conceptual-overview-of-jest-enzyme-testing/">Conceptual overview of Jest and Enzyme testing for React</a></li><li><a href="https://www.nickang.com/create-simple-command-line-program-node/">How to create a simple command line program with Node.js</a></li><li><a href="https://www.nickang.com/what-is-repl/">What is REPL?</a></li><li><a href="https://www.nickang.com/the-quickest-way-to-try-new-javascript-libraries/">The quickest way to try new JavaScript libraries</a></li></ul>

      <p>Want to read more? <a href="https://www.nickang.com/category/bite-size-programming/">Show me every tech article on this blog &gt;</a></p>

      <h2>Bits Please! on Instagram</h2>

      <img src={img2} alt="@nickang_blog instagram account" />

      <p>If you like my written posts, you may also like what I'm experimenting with on Instagram: <em>Bits Please!</em> It is an experimental way of conveying technical ideas through sketches.</p>

      <p><a href="https://www.instagram.com/nickang_blog/https://www.instagram.com/nickang_blog/">View Bits Please! on Instagram &gt;</a></p>

      <h2>YouTube channel</h2>
      <img src={img3} alt="nick ang youtube channel front page" />
      <p>Like video tutorials so you can learn by watching developers code? Check out my YouTube channel where I upload <a href="https://www.nickang.com/experienced-developer-does-freecodecamps-web-development-course-and-explain-everything/">videos of me doing the freeCodeCamp course as an experienced developer</a>.</p>

      <p><a href="https://www.youtube.com/channel/UCfGK7NLYK22y1ahCh6w9baw">View my channel &gt;</a></p>
    </Layout>
  )
}

export default LearnTechPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`

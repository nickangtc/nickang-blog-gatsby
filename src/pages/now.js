import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import img1 from "../../content/assets/nick-ang-talk-at-greenridge-secondary-school.jpg"
import img2 from "../../content/assets/nick-ang-smartlyio-hackathon-the-last-supper.jpg"

const NowPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle}>
    <SEO title="Now" />
    <h1>Now</h1>
  
    <p><em>This section is inspired by Derek Siver's <a href="https://sivers.org/nowff">now movement</a>, as a sort of "public declaration" of my priorities at the moment.</em></p>
    <p>2020 has come around and I will turn 30. That tends to get a person to sit up and think about his life, you know?</p>
    <p>That said, because I'm relatively older than when I first started actively writing and publishing on this blog and the ones before it, I'd like to think I'm mature enough to not make grand proclamations anymore.</p>
    <p>My 'Now' page consists only of specific projects that should be devoid of grandeur. Good things take time to build. If you see grandiosity on this page, feel free to call me out.</p>
    <p>2020 is going to be an interesting experiment for me because of one main reason: I am not at home. <strong>Home is Singapore, and I am currently living in Berlin, Germany</strong>, a completely different continent with people who have vastly different ideas of what life is or should be about.</p>
    <p>That difference between the reality I'm used to and the reality I live in here is, to say the least, a potent environment for trying new things.</p>
    <p>So, what are some of these new things?</p>

    <h2>Helping people become more technical</h2>
    <p>This is my main project for 2020. I am currently focused on creating useful content to help people who are trying to become more technically competent (in the world of technology and more specifically, software) to reach their goals.</p>
    <p>Helping people learn is one of the things that I recently realised that I enjoy doing and am naturally good at.</p>
    <p>I've been helping a lot of people understand things like how the web works, why some app sometimes doesn't seem to work as you expected, how to resolve issues like that, and what automation can be built to make your work less manual. And these people usually have little to no technical background.</p>
    <p>I asked myself why I like doing this, and my answer has always been that I find it immensely satisfying to see someone experiencing the "Aha...!" moment.</p>

    <img src={img1} alt="nick ang giving a talk to students at Greenridge Secondary School in Singapore - it was about careers in tech"/>
    <p><em>That's me trying to talk to secondary school students (from the school I went to) about careers in tech in 2018.</em></p>
    <p>I'm grateful that my day-to-day work as a Service Operations Engineer at <a href="http://smartly.io/">Smartly.io</a> (one of the largest advertising technology companies in the world) consists of helping my colleagues and our clients get to that "Aha" moment.</p>
    <p>But while that continues to drive me at work, I see even more potential in helping people like you - a stranger on the internet who has stumbled on this blog - to speed through a hundred "Aha!" moments until you find yourself as technically competent as you've wished to be.</p>
    <p>So, this project. My goal with this project is to help 1,000 people become more technically competent in software in 2020. I will be doing a few things as part of this project this year:</p>

    <ul><li>Publishing small, self-contained concepts on <a href="https://www.instagram.com/nickangtc/">Instagram: @nickangtc</a></li><li>Publishing medium length blog posts that build on basic concepts on this blog</li><li>Creating a book or some other product offering, like an instructor-led online course, that is structured to help someone who is serious in becoming more technical to get to that destination as effectively and successfully as possible</li></ul>

    <p>So, if you are still reading this and <strong>you think you'd like to take a chance at becoming more technical this year with me, I recommend connecting with me on the following channels</strong>:</p>

    <ul><li><strong>Subscribe to my <a href="https://www.nickang.com/subscribe">email list</a>.</strong> This is so that I can send you a newsletter once a week that contains interesting ideas from around the internet that I believe may nourish your interest and keep you motivated to become a more technical person</li><li><strong>Follow me on <a href="https://www.instagram.com/nickangtc/">Instagram @nickangtc</a>.</strong> This is where I share a few posts per week, each explaining a small, self-contained technical concept. You can use this as a constant flow of hooks to get you to learn more about something.</li><li><strong>Follow me on <a href="https://twitter.com/nickang">Twitter @nickang</a>.</strong> This is where I do brain dumps, where occasionally there would be diamonds in the sea of unpolished, raw ideas. I am very active on Twitter and it's my favourite place to talk to people online</li><li><strong>Like my <a href="https://facebook.com/111860877010061">Facebook page</a></strong> (alternative to Twitter). I prefer Twitter for discussions, but I know a lot of people who don't use it but who use Facebook, so I'm there as well</li></ul>

    <h2>Working at Smartly.io</h2>
    <p>I work at <a href="http://smartly.io/">Smartly.io</a> as a Service Operations Engineer.</p>
    <p>That name of the role doesn't ring a bell, I know. Well, my role is a hybrid between a Solutions Engineer (someone who meets clients and builds custom solutions to enable them to use our product) and a Technical Support Engineer (someone who solves technical issues and builds internal tools to enable us scale our unique 24/5 employees-only support chat).</p>
    <p>On a day to day basis, I help solve problems proactively and reactively to keep the business running smoothly. Specifically, the Service Operations team takes ownership of three main things at <a href="https://smartly.io">Smartly.io</a>:</p>

    <ul><li>Organising and scaling our unique and world-class "everybody does it" customer support model</li><li>Providing situational awareness to both the Customer Success teams and Product/Engineering teams by monitoring and communicating issues and requests around our advertising automation and optimisation tool</li><li>Building and maintaining internal tools and scripts that make life easier for everyone in the company</li></ul>

    <img src={img2} alt="a group of people at Smartly.io working together on a Hackathon idea juxtaposed against the famous portrait of The Last Supper for fun"/>
    <p><em>At a company hackathon. The juxtaposition to The Last Supper was done by what must have been a bored colleague.</em></p>

    <p>I'm very thankful to have a job, and especially happy that I work at a company that values me. <a href="http://smartly.io">Smartly.io</a> is a very humane company. My job ensures I have food on the table, and to be honest, it helps me learn a lot about software engineering, working with people, managing projects, and about marketing in general.</p>
    <p><a href="http://smartly.io/">Smartly.io</a> is a gem of a company to work in. I cannot recommend it enough to people whom I think are the right fit. Not everyone is a good fit because we are quite exacting on certain qualities in the people we let in the gate so we maintain the culture we love. But if you think we have something in common, and you're open to a new opportunity to work for a <a href="https://techcrunch.com/2019/12/18/smartly-io-sells-to-providence-equity-partners/">well-funded</a> and profitable startup headquartered in Finland, please feel free to get in touch with me!</p>
    <p>See my past work <a href="https://www.nickang.com/past-work/">here</a>.</p>

    <hr />
    <p><em>Page last updated: 11.01.2020</em></p>
    </Layout>
  )
}

export default NowPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`

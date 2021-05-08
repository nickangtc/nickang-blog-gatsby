/**
 * SEO component relies on React Helmet package to insert head meta to every page
 */

import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

import profilePic from '../../content/assets/nick-ang-profile-portrait-11-2020.jpg'

const Seo = ({ description, lang, meta, title, location }) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            social {
              twitter
            }
          }
        }
      }
    `
  )

  const metaDescription = description || site.siteMetadata.description

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={`%s | ${site.siteMetadata.title}`}
      link={[
        {
          rel: `apple-touch-icon`,
          sizes: `180x180`,
          href: `/apple-touch-icon.png`
        },
        {
          rel: `icon`,
          type: `image/png`,
          sizes: `32x32`,
          href: `/favicon-32x32.png`
        },
        {
          rel: `icon`,
          type: `image/png`,
          sizes: `16x16`,
          href: `/favicon-16x16.png`
        },
        {
          rel: `mask-icon`,
          href: `/safari-pinned-tab.svg`,
          color: `#5bbad5`
        },
      ]}
      meta={[
        {
          name: `title`,
          content: title,
        },
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          property: `og:image`,
          content: profilePic,
        },
        {
          property: `og:site_name`,
          content: `Nick Ang`,
        },
        {
          property: `og:url`,
          content: location.href,
        },
        {
          property: `twitter:url`,
          content: location.href,
        },
        {
          property: `twitter:card`,
          content: `summary`,
        },
        {
          property: `twitter:creator`,
          content: `@${site.siteMetadata.social.twitter}`,
        },
        {
          property: `twitter:site`,
          content: `@${site.siteMetadata.social.twitter}`,
        },
        {
          property: `twitter:image`,
          content: profilePic,
        },
        {
          property: `twitter:title`,
          content: title,
        },
        {
          property: `twitter:description`,
          content: metaDescription,
        },
        {
          name: `msapplication-TileColor`,
          content: `#da532c`
        }
      ].concat(meta)}
    />
  )
}

Seo.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
}

Seo.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
}

export default Seo

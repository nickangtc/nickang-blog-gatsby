/**
 * SEO component relies on React Helmet package to insert head meta to every page
 */

import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

// import profilePic from '../../content/assets/nick-ang-profile-photo-square-jun-2018-min.jpg'
import twitterCardPic from "../../content/assets/nickang-twitter-large-card.png"

const SearchEngineOptimisation = ({
  description,
  lang,
  meta,
  title,
  location,
}) => {
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
          href: `/apple-touch-icon.png`,
        },
        {
          rel: `icon`,
          type: `image/png`,
          sizes: `32x32`,
          href: `/favicon-32x32.png`,
        },
        {
          rel: `icon`,
          type: `image/png`,
          sizes: `16x16`,
          href: `/favicon-16x16.png`,
        },
        {
          rel: `mask-icon`,
          href: `/safari-pinned-tab.svg`,
          color: `#5bbad5`,
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
          content: twitterCardPic,
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
          name: `twitter:url`,
          content: location.href,
        },
        {
          name: `twitter:card`,
          content: `summary_large_image`,
        },
        {
          name: `twitter:creator`,
          content: `@${site.siteMetadata.social.twitter}`,
        },
        {
          name: `twitter:site`,
          content: `@${site.siteMetadata.social.twitter}`,
        },
        {
          name: `twitter:image`,
          content: twitterCardPic,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
        {
          name: `msapplication-TileColor`,
          content: `#da532c`,
        },
      ].concat(meta)}
    />
  )
}

SearchEngineOptimisation.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
}

SearchEngineOptimisation.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
}

export default SearchEngineOptimisation

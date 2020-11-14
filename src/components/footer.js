import React from 'react'

import footerStyles from './footer.module.scss'
import twitterLogo from '../../content/assets/twitter.svg'
import instagramLogo from '../../content/assets/instagram.svg'

const Footer = () => {
  return (
    <footer className={ footerStyles.siteFooter }>
      <a href="https://twitter.com/nickang" target="_blank" rel="noopener noreferrer">
        <img alt="twitter icon" src={twitterLogo} className={ footerStyles.logo } />
      </a>
      {/** <a href="https://www.instagram.com/nickang_blog/" target="_blank" rel="noopener noreferrer">
        <img alt="instagram icon" src={instagramLogo} className={ footerStyles.logo } />
      </a> */}
    </footer>
  )
}

export default Footer
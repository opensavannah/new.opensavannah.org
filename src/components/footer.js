import React from 'react'
import Link from 'gatsby-link';
import NavLinks from './nav-links'

const Footer = () => (
  <footer role="contentinfo" className="site-footer text-center medium-text-right large-text-left">
    <div className="grid-container">
      <nav className="grid-x grid-padding-x grid-padding-y">
        <div className="cell medium-shrink large-5">
          <a className="footer-logo media_link" href="http://nyc.gov/planning"><img alt="NYC DCP" src="https://cvlassets.s3.amazonaws.com/17362702_753092138201235_4150936120167033823_n.jpg" /></a>
        </div>
        <div className="cell medium-auto large-7">
          <div className="grid-x grid-padding-x grid-padding-y">
            <div className="cell medium-auto large-auto">
              <nav role="navigation" className="footer-nav">
                 <NavLinks />
              </nav>
            </div>
            <div className="cell medium-auto large-auto">
              <ul className="no-bullet">
                <li><a href="https://github.com/NYCPlanning/labs-open-source-policy/blob/master/policy.md">Open source policy</a></li>
                <li><Link to="/status/">Status dashboard</Link></li>
              </ul>
            </div>
            <div className="cell medium-auto large-auto">
              <h4 className="header-tiny">Contact us</h4>
              <ul className="no-bullet">
                <li><a href="https://github.com/opensavannah">Github</a></li>
                <li><a href="https://twitter.com/nycplanninglabs">@opensavannah</a></li>
                <li><a href="mailto:labs_dl@planning.nyc.gov">yall@opensavannah.org</a></li>
                <li><a href="https://github.com/nycplanning/labs-planninglabs-home/issues/new">Report a bug</a></li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  </footer>
)

export default Footer

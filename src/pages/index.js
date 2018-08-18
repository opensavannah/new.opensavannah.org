import React from 'react'
import Link from 'gatsby-link'

import BlogPosts from '../components/blog-posts'
import Hero from '../components/hero'

import {
    SkylineSVG,
    MonitorSVG,
    FolderSVG,
  } from '../components/svg-icons'

class IndexPage extends React.Component {
  render() {
    return (
      <div className="main">
        <Hero
          tagline="We work with local government and community to use design, technology and open data to make our city more equitable, and deliver services better, faster, and cheaper."
          buttonText="Join Us"
          buttonURL="/contact/"
          />
      

        <div className="grid-container">
          <div className="grid-x grid-padding-x">
            <div className="cell">

              <h2>Information + Invitation = Participation</h2>

              <div className="grid-x grid-margin-x">
                <div className="cell large-auto">
                  <p className="lead">We are the bridge between citizen and city in Coastal Georgia in the twenty-first century. We are a diverse mix of residents who believe that by applying the principles and practices of the web era to the delivery of government services, we can create more equitable communities that work better, faster, and cheaper.</p>
                </div>
                <div className="cell large-auto">

                  <div className="media-object">
                    <div className="media-object-section">
                      <MonitorSVG />
                    </div>
                    <div className="media-object-section">
                      <p className="header-medium">Create tools and translate jargon to help Savannah residents better understand their government</p>
                    </div>
                  </div>

                  <div className="media-object">
                    <div className="media-object-section">
                      <SkylineSVG />
                    </div>
                    <div className="media-object-section">
                      <p className="header-medium">Work with local public servants to ensure that services and systems are designed with the resident at the center of the process</p>
                    </div>
                  </div>

                  <div className="media-object">
                    <div className="media-object-section">
                      <FolderSVG />
                    </div>
                    <div className="media-object-section">
                      <p className="header-medium">Empower individuals and revitalize communities from the inside out by providing residents with access to tech and design training</p>
                    </div>
                  </div>

                </div>
              </div>

              <div className="recent-posts-container">
                 <h2 className="header-xlarge">Recent blog posts <small style={{fontSize:"0.6em"}}><a href="https://blog.opensavannah.org">See All (medium.com)</a></small></h2>
                 <BlogPosts />
              </div>


            </div>
          </div>
        </div>

      </div>
    )
  }
}

export default IndexPage

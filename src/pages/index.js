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
          tagline="We work with local government and community to use design, technology and open data to make our city more equitable."
          buttonText="Join Us"
          buttonURL="/contact/"
          />
      

        <div className="grid-container">
          <div className="grid-x grid-padding-x">
            <div className="cell">

              <h2>Information + Invitation = Participation</h2>

              <div className="grid-x grid-margin-x">
                <div className="cell large-auto">
                  <p className="lead">We are the bridge between citizen and city in Coastal Georgia in the twentieth century. We are a diverse mix of residents who believe that by applying the principles and practices of the web era to the delivery of government services, we can create more equitable communities that work better, faster, and cheaper.</p>
                </div>
                <div className="cell large-auto">

                  <div className="media-object">
                    <div className="media-object-section">
                      <MonitorSVG />
                    </div>
                    <div className="media-object-section">
                      <p className="header-medium">Bring civic data to life through interactive maps and visualizations</p>
                    </div>
                  </div>

                  <div className="media-object">
                    <div className="media-object-section">
                      <SkylineSVG />
                    </div>
                    <div className="media-object-section">
                      <p className="header-medium">Create tools and translate jargon to help Savannah residents better understand their government</p>
                    </div>
                  </div>

                  <div className="media-object">
                    <div className="media-object-section">
                      <FolderSVG />
                    </div>
                    <div className="media-object-section">
                      <p className="header-medium">Build simple web-based tools to streamline internal workflows</p>
                    </div>
                  </div>

                </div>
              </div>

              <div className="recent-posts-container">
                 <h2 className="header-xlarge">Recent blog posts <small style={{fontSize:"0.6em"}}><a href="https://medium.com/nycplanninglabs">See All (medium.com)</a></small></h2>
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

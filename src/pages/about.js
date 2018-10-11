import React from 'react'
import Link from 'gatsby-link'

import Hero from '../components/hero'

import {
    BookSVG,
    HandshakeSVG,
    DocumentSVG,
    AgileSVG
  } from '../components/svg-icons'

const AboutPage = () => (
  <div className="main">
    <Hero
      title="About OpenSavannah"
      tagline="We build community and use technology and service design to improve the effectiveness of government services for the most vulnerable in the Savannah region."
    />
    <div className="grid-container">
     <div className="grid-x grid-padding-x">
      <div className="cell large-8" id="page-content">
        <h2 id="what-is-planning-labs" data-magellan-target="what-is-planning-labs">What is OpenSavannah?</h2>
                <iframe width="100%" height="315" src="https://www.youtube.com/embed/zpoU-qwWw8w" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
    
        <p>We are civic-minded residents committed to working with the City of Savannah, Chatham County and other municipalities in the greater Savannah area – as well as other nonprofit organizations – to make our region stronger. We’re here to help and eager to learn from professional public servants. And while we’re advocates for open government (we can’t build apps without open data!), we’re non-partisan and public-minded.</p>
        <p>We are a group of civic-minded programmers, coders, designers, and extraordinary citizens. We work in partnership with government, non-profit, and technical partners to deploy technology to improve quality of life for all residents and increase citizen engagement with civic issues.</p>
        <hr/>
        <h2 id="our-core-values" data-magellan-target="our-core-values">Our Core Values</h2>
        <p>We strive to work in a modern way and use best practices on all our projects. Here’s what that means to us:</p>
        <div className="media-object">
          <div className="media-object-section">
            <BookSVG />
          </div>
          <div className="media-object-section">
             <h4>Open by Default</h4>
             <p>OpenSavannah is committed to openness and transparency, and all activities will be open by default. We will adopt the open source policy of 18F as a foundational set of principles to build upon.</p>
          </div>
        </div>
        <div className="media-object">
          <div className="media-object-section">
            <HandshakeSVG />
          </div>
          <div className="media-object-section">
             <h4>Build With, Not For</h4>
             <p>OpenSavannah is a design partner, working closely with its customers in visioning and agile development. Customers are expected to provide resources for the duration of a product build, and will be heavily involved in sprint planning, testing and acceptance.</p>
          </div>
        </div>
        <div className="media-object">
          <div className="media-object-section">
            <AgileSVG />
          </div>
          <div className="media-object-section">
             <h4>Ship Early, Ship Often</h4>
             <p>OpenSavannah’ preferred projects will yield a minimum viable product in 4-6 weeks, providing a rapid cadence and the opportunity to work on diverse projects and problems across the agency.</p>
          </div>
        </div>
        <div className="media-object">
          <div className="media-object-section">
            <DocumentSVG />
          </div>
          <div className="media-object-section">
             <h4>Document and Disseminate</h4>
             <p>OpenSavannah will place a high priority on documentation and outward messaging in support of its mission to promote modern technology best practices, and will manage its own content to include general information about the team’s mission and work program, blogging, docs, and social media engagement.</p>
          </div>
        </div>
        <p>Read the full text of <strong><a href="https://github.com/NYCPlanning/labs-charter">our charter</a></strong> on GitHub.</p>
        <hr/>
        <h2 id="our-team" data-magellan-target="our-team">Our Team</h2>
        <h3 id="chris-whong-director">Carl V. Lewis: Director</h3>
        <div className="media-object">
          <div className="media-object-section"> <img className="thumbnail avatar" src="https://cvlassets.s3.amazonaws.com/g4e58s6m_400x400.jpg"/> </div>
          <div className="media-object-section">
             <p>Carl is a public interest technologist, data visualization developer, and information designer with a background in interactive media and data storytelling. Prior to his work with OpenSavannah, Carl worked in journalism, including in editing roles at St. Louis Post-Dispatch, Vocativ, Savannah Morning News, and The Oxford Student. He founded the popular website dataviz.tools, and holds an M.S. in data journalism from Columbia University in the City of New York.</p>
          </div>
        </div>
        <h3 id="andy-cochran-designer">Aaron Pompei: Service Designer</h3>
        <div className="media-object">
          <div className="media-object-section"> <img className="thumbnail avatar" src="https://cvlassets.s3.amazonaws.com/b5cec6eb193b212ea645d234d7c988bd.jpg"/> </div>
          <div className="media-object-section">
             <p>Aaron is a designer and UX architect who is currently pursuing an M.F.A. in Interactive Design from Savannah College of Art and Design. Open Savannah is important to him as an opportunity to collaborate with area residents and municipal staff to improve our city.

</p>
          </div>
        </div>
        <h3 id="matt-gardner-developer">Matt Gardner: Developer</h3>
        <div className="media-object">
          <div className="media-object-section"> <img className="thumbnail avatar" src="https://pbs.twimg.com/profile_images/598597497141997568/zR8hc1fd_400x400.jpg"/> </div>
          <div className="media-object-section">
             <p>Matt joined Planning Labs as a founding member in July, 2017 after creating digital solutions for the City of Boston’s Summer Youth Employment Program. He also helped establish the Metropolitan Area Planning Council’s <a href="http://data.mapc.org">Digital Services</a> division, the first of its kind in regional planning.</p>
          </div>
        </div>
        <hr/>
        <h2 id="history" data-magellan-target="history">History</h2>
        <p>Planning Labs was established in June 2017 by DCP civic technologist Chris Whong, with planning and guidance from Danny Fuchs, Director of Capital Planning, Hassan Adekoya, CIO, and Jon Kaufman, COO. After a year of experimentation and success building the <a href="https://capitalplanning.nyc">Capital Planning Platform</a> using a 100% open source stack, a pitch was made to institutionalize modern development practices in the agency by establishing a service delivery unit within the Information Technology Division. Planning Labs’ mission would be to build lightweight impactful tools with the agency’s divisions as clients, and to be open, vocal, and inclusive about the modern technologies and processes used.</p>
      </div>
    </div>
  </div>
</div>
)

export default AboutPage

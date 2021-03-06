import React from 'react'
import Link from 'gatsby-link'
import NavLinks from './nav-links'

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = { menuOpen: false };

  }

  toggleMenu() {
    this.setState({
      menuOpen: !this.state.menuOpen,
    })
  }

  closeMenu() {
    this.setState({
      menuOpen: false,
    })
  }

  render() {
    const { menuOpen } = this.state;

    return (
      <header role="banner" className="site-header">
       <a className="show-on-focus" href="#main">Skip to main content</a>
        <div className="grid-container">
          <div className="grid-x grid-padding-x">
            <div className="cell shrink large-auto">
              <Link to="/" className="site-logo montserrat"><img src="https://cvlassets.s3.amazonaws.com/opensav6.png" alt="NYC Planning" />
              </Link>
            </div>
            <div className="cell auto hide-for-large text-right">
              <button className="responsive-nav-toggler" onClick={() => { this.toggleMenu() }}>Menu</button>
            </div>
            <div id="responsive-menu" onClick={() => {this.closeMenu()}} className={`cell large-shrink ${menuOpen ? '' : 'show-for-large'}`}>
              <nav role="navigation" className="header-nav">
                <NavLinks ulClasses="menu vertical large-horizontal" />
              </nav>
            </div>
          </div>
        </div>
      </header>
    )
  }
}


export default Header

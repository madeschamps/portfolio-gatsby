import React, { Component } from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import AniLink from "gatsby-plugin-transition-link/AniLink"

import 'bootstrap/dist/css/bootstrap.min.css';

import "../styles/main.scss"

//HEADER
class DefaultLayout extends Component {
  componentDidMount(){
    var textDirections = [ 'down', 'right'];
    var randomNumber = Math.floor(Math.random()*textDirections.length);
    this.randomDirection = textDirections[randomNumber];
  }

  render() {
    return (
      <div>
        <div className='header container-fluid'>
          <h1 className='header__logo'>
            <AniLink  swipe direction={this.randomDirection}  className='header__logo-link' to="/" >
              Marc-André D
            </AniLink>
          </h1>
          <input id="burger" type="checkbox" />
          <label for="burger">
              <span></span>
              <span></span>
              <span></span>
          </label>
          <nav className='site-navigation'>
            <ul>
                <li><a href="/">Home</a></li> 
                <li><Link to="projects">Projects</Link></li> 
                <li className="mb-3"><a href="https://docdro.id/Jpw6BfH">Download CV</a></li>
                <p className="menu-message pb-3">Want to hire me? Contact me now via email.</p>
                <a href="mailto:marc.andre.deschamps@gmail.com" className="button-rectangle menu-mail-item">marc.andre.deschamps@gmail.com</a>
            </ul>
          </nav>
        </div>
        {/* content */}
        {this.props.children}
      </div>
    

     
    )
  }
}

DefaultLayout.propTypes = {
  children: PropTypes.object.isRequired,
}

export default DefaultLayout
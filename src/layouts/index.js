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
    this.randomDirection = textArray[randomNumber];
  }

  render() {
    return (
      <div>
        <div className='header container-fluid'>
          <h1 className='header__logo'>
            <AniLink  swipe direction={this.randomDirection}  className='header__logo-link' to="/" >
              MaVITAE
            </AniLink>
          </h1>
          <a className='header__menu-trigger'>M</a>
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
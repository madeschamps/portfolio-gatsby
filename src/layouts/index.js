import React, { Component } from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

import 'bootstrap/dist/css/bootstrap.min.css';

import "../styles/main.scss"


class DefaultLayout extends Component {
  render() {
    return (
      <div>
        <div className='header container-fluid'>
          <h1 className='header__logo'>
            <Link className='header__logo-link' to="/" >
              MaVITAE
            </Link>
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
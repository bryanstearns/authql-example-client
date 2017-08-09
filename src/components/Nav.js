import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { withRouter } from 'react-router'

export const Nav = () => (
  <nav>
    <NavLink className="home" to="/" exact>Home</NavLink>
  </nav>
)

Nav.propTypes = {
  // We include location in props because NavLinks need rerendering
  // when it changes
  location: PropTypes.object.isRequired
}

const mapStateToProps = (state, ownProps) => {
  return {
    location: ownProps.location
  }
}

export default withRouter(connect(mapStateToProps)(Nav))

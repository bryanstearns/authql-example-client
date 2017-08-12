import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { withRouter } from 'react-router'
import './Nav.css'

const signedOutLinks = () => (
  <span>
    <NavLink className="login" to="/login">Sign in</NavLink>
  </span>
)

const signedInLinks = (currentUser) => (
  <span>
    <NavLink className="logout" to="/logout">Sign out</NavLink>
    <span className="currentUser">({currentUser})</span>
  </span>
)

export const Nav = ({currentUser}) => (
  <nav>
    <NavLink className="home" to="/" exact>Home</NavLink>
    {(typeof(currentUser) === 'undefined')
      ? signedOutLinks()
      : signedInLinks(currentUser)}
  </nav>
)

Nav.propTypes = {
  currentUser: PropTypes.string,
  // We include location in props because NavLinks need rerendering
  // when it changes
  location: PropTypes.object.isRequired
}

const mapStateToProps = (state, ownProps) => {
  return {
    currentUser: state.auth.email,
    location: ownProps.location
  }
}

export default withRouter(connect(mapStateToProps)(Nav))

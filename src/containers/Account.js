import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { gql, graphql, compose } from 'react-apollo'
import { withAuth } from 'authql'

const accountQuery = gql`
  query accountQuery($viewer: String) {
    user(viewer: $viewer) {
      id
      email
    }
  }
`

export const Account = ({user}) => {
  return (
    <div>
      Your Account:
      <ul className="users">
        <li>ID: {user.id}</li>
        <li>Email: {user.email}</li>
      </ul>
    </div>
  )
}

Account.propTypes = {
  user: PropTypes.object.isRequired,
  viewer: PropTypes.string.isRequired
};

const mapStateToProps = (state) => {
  return {
    viewer: state.auth.viewer
  }
}
export default compose(
  connect(mapStateToProps),
  graphql(accountQuery, {options: {notifyOnNetworkStatusChange: true}}),
  withAuth()
)(Account)

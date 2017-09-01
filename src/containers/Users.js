import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { gql, graphql, compose } from 'react-apollo'
import { withAuth } from 'authql'

const usersQuery = gql`
  query usersQuery($viewer: String) {
    users(viewer: $viewer) {
      id
      email
    }
  }
`

export const Users = ({users}) => {
  if (users.length === 0) {
    return (<span>No users yet.</span>)
  }
  return (
    <div>
      Open the doors, see all the people:
      <ul className="users">
        {users.map((user, i) => (
          <li key={i}>{user.email}</li>
        ))}
      </ul>
    </div>
  )
}

Users.propTypes = {
  users: PropTypes.array.isRequired,
  viewer: PropTypes.string.isRequired
};

const mapStateToProps = (state) => {
  return {
    viewer: state.auth.viewer
  }
}
export default compose(
  connect(mapStateToProps),
  graphql(usersQuery, {options: {notifyOnNetworkStatusChange: true}}),
  withAuth()
)(Users)

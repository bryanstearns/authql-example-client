import React from 'react'
import PropTypes from 'prop-types'
import { gql } from 'react-apollo'
import { graphqlWithAuth } from 'authql'

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

export default graphqlWithAuth(usersQuery)(Users)

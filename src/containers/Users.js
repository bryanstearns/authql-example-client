import React from 'react'
import PropTypes from 'prop-types'
import { gql, graphql, compose } from 'react-apollo'
import { withAuth } from '../graphql/withAuth'

const usersQuery = gql`
  query usersQuery {
    users {
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
  users: PropTypes.array.isRequired
};

export default compose(
  graphql(usersQuery),
  withAuth()
)(Users)

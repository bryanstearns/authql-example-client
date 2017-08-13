import React from 'react'
import PropTypes from 'prop-types'
import { gql, graphql } from 'react-apollo'

const usersQuery = gql`
  query usersQuery {
    users {
      id
      email
    }
  }
`

export const Users = ({data}) => {
  const {loading, error, users} = data
  if (error) {
    return (<span>Oops: {error.message}</span>)
  }
  if (loading) {
    return (<span>(loading...)</span>)
  }
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
  data: PropTypes.shape({
    loading: PropTypes.bool.isRequired,
    users: PropTypes.array,
    error: PropTypes.object
  }).isRequired
};

export default graphql(usersQuery)(Users)

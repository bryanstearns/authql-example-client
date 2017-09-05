import React from 'react'
import PropTypes from 'prop-types'
import { gql } from 'react-apollo'
import { graphqlWithAuth } from 'authql'

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

export default graphqlWithAuth(accountQuery)(Account)

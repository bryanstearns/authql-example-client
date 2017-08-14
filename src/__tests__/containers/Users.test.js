import React from 'react'
import { mount, render } from 'enzyme'
import { Users } from '../../containers/Users'

function renderIt(users) {
  return render(<Users users={users} />)
}

test('it renders when we have users', () => {
  expect(render(<Users users={[{email: "bob@example.com"}]} />).text()).
    toMatch(/bob\@example\.com/)
})

test('it renders when we have no users', () => {
  expect(render(<Users users={[]} />).text()).toMatch(/No users yet/)
})

import React from 'react'
import { mount, render } from 'enzyme'
import { Users } from '../../containers/Users'

test('it renders when we have users', () => {
  expect(render(<Users viewer={"123"} users={[{email: "bob@example.com"}]} />).text()).
    toMatch(/bob\@example\.com/)
})

test('it renders when we have no users', () => {
  expect(render(<Users viewer={"123"} users={[]} />).text()).toMatch(/No users yet/)
})

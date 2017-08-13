import React from 'react'
import { mount, render } from 'enzyme'
import { MemoryRouter as Router } from 'react-router-dom';
import { Users } from '../../containers/Users'

function renderIt(data) {
  return render(<Router><Users data={data} /></Router>)
}

test('it renders when we have users', () => {
  expect(renderIt({users: [{email: "bob@example.com"}],
                   loading: false,
                   error: undefined}).text()).toMatch(/bob\@example\.com/)
})

test('it renders when we have no users', () => {
  expect(renderIt({users: [],
                   loading: false,
                   error: undefined}).text()).toMatch(/No users yet/)
})

test('it renders when loading', () => {
  expect(renderIt({users: [],
                   loading: true,
                   error: undefined}).text()).toMatch(/loading.../)
})

test('it renders when an error happened', () => {
  expect(renderIt({users: [{email: "bob@example.com"}],
                   loading: false,
                   error: {message: "Barfed!"}}).text()).toMatch(/Oops: Barfed!/)
})

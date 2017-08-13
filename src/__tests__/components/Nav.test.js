import React from 'react'
import { mount } from 'enzyme'
import {Nav} from '../../Components/Nav'
import { MemoryRouter as Router } from 'react-router-dom';

const setup = (props) => {
  const wrapper = mount(<Router><Nav {...props} location={{}} /></Router>)
  return {props, wrapper}
}

test('it renders when logged in', () => {
  const {wrapper} = setup({currentUser: "bob"})
  expect(wrapper.find("nav a.home").length).toBe(1)
  expect(wrapper.find("nav a.users").length).toBe(1)
  expect(wrapper.find("nav a.login").length).toBe(0)
  expect(wrapper.find("nav a.logout").length).toBe(1)
})

test('it renders when not logged in', () => {
  const {wrapper} = setup({currentUser: undefined})
  expect(wrapper.find("nav a.home").length).toBe(1)
  expect(wrapper.find("nav a.users").length).toBe(1)
  expect(wrapper.find("nav a.login").length).toBe(1)
  expect(wrapper.find("nav a.logout").length).toBe(0)
})

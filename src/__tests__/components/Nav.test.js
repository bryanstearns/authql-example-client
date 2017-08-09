import React from 'react'
import { mount } from 'enzyme'
import {Nav} from '../../Components/Nav'
import { MemoryRouter as Router } from 'react-router-dom';

const setup = (props) => {
  const wrapper = mount(<Router><Nav {...props} location={{}} /></Router>)
  return {props, wrapper}
}

test('it renders', () => {
  const {wrapper} = setup({})
  //expect.assertions(1)
  expect(wrapper.find("nav a.home").length).toBe(1)
})

import { shallow } from 'enzyme'
import Home from '../../components/Home'

test('it renders', () => {
  const rendered = shallow(Home())
  expect(rendered.text()).toBe("This is the home page.")
})

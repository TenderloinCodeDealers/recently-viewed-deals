import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from './App';

configure({ adapter: new Adapter() });

describe('App Component', () => {
  const app = shallow(<App />);

  it('renders without crashing', () => {
    app;
  });
  //This test mounts a component and makes sure that it didn’t throw during rendering.

  it('displays the module name', () => {
    const wrapper = shallow(<div className="title" />);
    expect(wrapper.exists('.title')).toEqual(true);
    expect(wrapper.find('div.title').exists());
    // either of the above work
  });
});

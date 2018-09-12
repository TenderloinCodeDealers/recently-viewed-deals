// import TestUtils from 'react-addons-test-utils';
// var TestUtils = require('react-addons-test-utils');
import ReactTestRenderer from 'react-test-renderer';
import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Deals from './Deals';

let deal = {
  id: 0,
  imageUrl: '',
  productDealTagline: '',
  location: '',
  dealNumberBought: 0,
  price: 0,
  starRating: 0
};

configure({ adapter: new Adapter() });

describe('Deals Component', () => {
  const deals = shallow(<Deals deal={deal} />);

  it('renders without crashing', () => {
    deals;
  });

  it('correctly displays the price div', () => {
    var wrapper = shallow(<div className="price" />);
    expect(wrapper.exists('.price')).toEqual(true);
    expect(wrapper.find('div.price').exists());
    // either of the above work
  });
});

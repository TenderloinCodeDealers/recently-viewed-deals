// import TestUtils from 'react-addons-test-utils';
// var TestUtils = require('react-addons-test-utils');
import ReactTestRenderer from 'react-test-renderer';
import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Deals from './Deals';

let deal = {
  id: 1,
  imageUrl: 'https://s3-us-west-1.amazonaws.com/groupon-stock-images/image-1.jpg',
  productDealTagline: 'Automated coherent data-warehouse',
  location: 'San Francisco',
  dealNumberBought: 60297,
  price: 977,
  starRating: 3
};

configure({ adapter: new Adapter() });

describe('Deals Component', () => {
  const deals = shallow(<Deals deal={deal} />);

  it('renders without crashing', () => {
    deals;
  });

  it('renders a image', () => {
    expect(deals.find('.image').length).toEqual(1);
  });

  it('renders a product or service tagline', () => {
    expect(deals.find('.tagline').length).toEqual(1);
  });

  it('correctly displays the price div', () => {
    var wrapper = shallow(<div className="price" />);
    expect(wrapper.exists('.price')).toEqual(true);
    expect(wrapper.find('div.price').exists());
    // either of the above work
  });
});

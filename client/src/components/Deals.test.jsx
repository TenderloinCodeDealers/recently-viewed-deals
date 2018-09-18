// import ReactTestRenderer from 'react-test-renderer';
import React from 'react';
import ReactDOM from 'react-dom';
import Deals from './Deals';
import Enzyme, { shallow, render, mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

let deal = {
  id: 1,
  imageUrl: 'https://s3-us-west-1.amazonaws.com/groupon-stock-images/image-1.jpg',
  productDealTagline: 'Automated coherent data-warehouse',
  location: 'San Francisco',
  dealNumberBought: 60297,
  price: 977,
  starRating: 3
};

Enzyme.configure({ adapter: new Adapter() });
// configuring enzyme to use the correct adapter for the version react we are using

describe('Deals Component', () => {
  const deals = shallow(<Deals deal={deal} />);

  // it('renders without crashing', () => {
  //   deals;
  // });

  it('renders without crashing', () => {
    expect(deals).toMatchSnapshot();
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

  // it('should render a star icon', () => {
  //   const starElement = <FontAwesomeIcon icon={faStar} />;
  //   expect(
  //     deals
  //       .find('FontAwesomeIcon')
  //       .first()
  //       .matchesElement(starElement)
  //   ).toBeTruthy();
  // });

  // it('should correctly setState', () => {
  //   const wrapper = shallow(<Deals deal={deal} />);
  //   expect(wrapper.find('San Francisco')).to.have.lengthOf(1);
  // expect(wrapper.find('San Mateo')).to.have.lengthOf(0);
  // wrapper.setState({ location: 'San Mateo'});
  // expect(wrapper.find('San Francisco')).to.have.lengthOf(0);
  // expect(wrapper.find('San Mateo')).to.have.lengthOf(1);
  // });
});

import React from 'react';
import axios from 'axios';

class Deals extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 0,
      imageUrl: '',
      productDealTagline: '',
      location: '',
      dealNumberBought: 0,
      price: 0,
      starRating: 0
    };
    this.get = this.get.bind(this);
    this.get(props.deal.id);
  }

  // we will want to immediately inovke this.
  // add in the logic --> if service, send service GET request / if product, send product GET request.
  // how do we differentiate if it is a product or a service?

  // componentDidMount() {
  //   get(props.deal.id);
  // }

  get(id) {
    // console.log('THIS', this);
    // if a product ...
    if (id < 50) {
      axios
        .get(`${id}/api/recently-viewed-product-data`)
        .then(response => {
          // console.log('THIS ASYNC', this);
          console.log(response.data[0].id);
          this.setState({
            id: response.data[0].id,
            imageUrl: response.data[0].imageUrl,
            productDealTagline: response.data[0].productDealTagline,
            location: response.data[0].location,
            dealNumberBought: response.data[0].dealNumberBought,
            price: response.data[0].price,
            starRating: response.data[0].starRating
          });
          console.log('newState', this.state);
        })
        .catch(function(error) {
          console.log(error);
        });
      // } else {
      // if it is a service ...
      //   axios.get(`${this.props.id}/api/recently-viewed-service-data`).then(function(response) {
      //     this.setState = {
      //       (include the service properties ... )
      //     };
      //   });
    }
  }

  // need to add in the logic, if rating exists ... add it, if location exists, add it ... if numBought exists, add it.
  render() {
    return (
      <span className="deal">
        <img className="image" src={this.state.imageUrl} />
        <div className="tagline"> {this.state.productDealTagline}</div>
        <div className="location"> {this.state.location} </div>
        <div className="numBought"> {`${this.state.dealNumberBought} + bought`} </div>
        <div className="stars"> {`${this.state.starRating} stars`} </div>
        <div className="price"> {`$ ${this.state.price}`} </div>
      </span>
    );
  }
}

export default Deals;

// original hardcoded state for component
//  id: 1,
//  imageUrl: 'https://s3-us-west-1.amazonaws.com/groupon-stock-images/image-1.jpg',
//  productDealTagline: 'Automated coherent data-warehouse',
//  location: 'San Francisco',
//  dealNumberBought: 60297,
//  price: 977,
//  starRating: 3,

import React from 'react';
import ReactDOM from 'react-dom';

class Deals extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      //   _id: ObjectId('5b9332790ff4d684c8aa4397'),
      id: 1,
      imageUrl: 'https://s3-us-west-1.amazonaws.com/groupon-stock-images/image-1.jpg',
      productDealTagline: 'Automated coherent data-warehouse',
      location: 'San Francisco',
      dealNumberBought: 60297,
      price: 977,
      starRating: 3,
      __v: 0
    };
    // above object is out of date now ...
    // this.get = this.get.bind(this);
  }

  // we will want to immediately inovke this.
  // add in the logic --> if service, send service GET request / if product, send product GET request.
  // how do we differentiate if it is a product or a service?

  //   get(id) {
  //     // if a product ...
  //     if (props.id < 49) {
  //       axios.get(`${this.props.id}/api/recently-viewed-product-data`).then(function(response) {
  //         this.setState = {
  //           imageUrl: response.data.imageUrl,
  //           ProductDealTagline: response.data.ProductDealTagline,
  //           location: response.data.location,
  //           imadealNumberBoughtgeUrl: response.data.dealNumberBought,
  //           starRating: response.data.starRating
  //         }.catch(function(error) {
  //           console.log(error);
  //         });
  //       });
  //     } else {
  //       // if it is a service ...
  //       //   axios.get(`${this.props.id}/api/recently-viewed-service-data`).then(function(response) {
  //       //     this.setState = {
  //       //       (include the service properties ... )
  //       //     };
  //       //   });
  //     }
  //   }

  // need to add in the logic, if rating exists ... add it, if location exists, add it ... if numBought exists, add it.
  render() {
    return (
      <span class="deal">
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

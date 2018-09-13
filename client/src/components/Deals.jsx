import React from 'react';
import axios from 'axios';

class Deals extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // id: 0,
      // imageUrl: '',
      // productDealTagline: '',
      // location: '',
      // dealNumberBought: 0,
      // price: 0,
      // starRating: 0
    };
    this.get = this.get.bind(this);
    this.get(props.deal.id);
    // potentially add this to componentDidMount
  }

  // componentDidMount() {
  //   get(props.deal.id);
  // }

  get(id) {
    // console.log('THIS', this);
    // if a product ... (products have id's 0 to 49)
    if (id < 50) {
      axios
        .get(`${id}/api/recently-viewed-product-data`)
        .then(response => {
          // console.log('THIS ASYNC', this);
          // console.log(response.data[0].id);
          this.setState({
            id: response.data[0].id,
            imageUrl: response.data[0].imageUrl,
            productDealTagline: response.data[0].productDealTagline,
            location: response.data[0].location,
            dealNumberBought: response.data[0].dealNumberBought,
            price: response.data[0].price,
            starRating: response.data[0].starRating
          });
          // console.log('newState', this.state);
        })
        .catch(error => {
          console.log(error);
        });
    } else {
      // if it is a service ... (services have id's 50 to 99)
      axios
        .get(`${id}/api/recently-viewed-service-data`)
        .then(response => {
          this.setState({
            id: response.data[0].id,
            imageUrl: response.data[0].imageUrl,
            serviceDealTagline: response.data[0].serviceDealTagline,
            location: response.data[0].locationTitle,
            dealNumberBought: response.data[0].dealNumberBought,
            price: response.data[0].price,
            starRating: response.data[0].starRating
          });
        })
        .catch(error => {
          console.log(error);
        });
    }
  }

  render() {
    return (
      <span className="deal">
        <img className="image" src={this.state.imageUrl} />
        <div className="tagline">
          {this.state.productDealTagline || this.state.serviceDealTagline}
        </div>
        <div className="location"> {this.state.location} </div>
        <div className="numBought"> {`${this.state.dealNumberBought} + bought`} </div>
        <div className="stars"> {`${this.state.starRating} stars`} </div>
        <div className="price"> {`$ ${this.state.price}`} </div>
      </span>
    );
  }
}

export default Deals;

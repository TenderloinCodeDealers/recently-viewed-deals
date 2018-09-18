import React from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

class Deals extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 0,
      imageUrl: '',
      productDealTagline: '',
      location: '',
      dealNumberBought: 0,
      origPrice: 0,
      price: 0,
      starRating: 6,
      numOfReviews: 0
    };
    this.get = this.get.bind(this);
    this.get(props.deal.id);
  }

  stars(rating) {
    const starArray = [];
    let color = '';
    for (var i = 1; i <= 5; i++) {
      if (i < rating) {
        color = '#FDC038';
      } else {
        color = '#E6E7E8';
      }
      starArray[i] = <FontAwesomeIcon className="star" icon={faStar} color={color} />;
    }
    return starArray;
  }

  get(id) {
    // console.log('THIS', this);
    // if a product ... (products have id's 0 to 49)
    if (id < 50) {
      axios
        .get(`http://localhost:3003/${id}/api/recently-viewed-product-data`)
        .then(response => {
          // console.log('THIS ASYNC', this);
          // console.log(response.data[0].id);
          this.setState({
            id: response.data[0].id,
            imageUrl: response.data[0].imageUrl,
            productDealTagline: response.data[0].productDealTagline,
            location: response.data[0].location,
            dealNumberBought: response.data[0].dealNumberBought,
            origPrice: response.data[0].origPrice,
            price: response.data[0].price,
            starRating: response.data[0].starRating,
            numOfReviews: response.data[0].numOfReviews
          });
          // console.log('newState', this.state);
        })
        .catch(error => {
          console.log(error);
        });
    } else {
      // if it is a service ... (services have id's 50 to 99)
      axios
        .get(`http://localhost:3003/${id}/api/recently-viewed-service-data`)
        .then(response => {
          this.setState({
            id: response.data[0].id,
            imageUrl: response.data[0].imageUrl,
            serviceDealTagline: response.data[0].serviceDealTagline,
            location: response.data[0].locationTitle,
            dealNumberBought: response.data[0].dealNumberBought,
            origPrice: response.data[0].origPrice,
            price: response.data[0].price,
            starRating: response.data[0].starRating,
            numOfReviews: response.data[0].numOfReviews
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
        {/* <img className="image" src={this.state.imageUrl} /> */}
        <div className="imageContainer">
          <div>
            <img className="item image" src={this.state.imageUrl} />
          </div>
        </div>

        <div className="tagline">
          {this.state.productDealTagline || this.state.serviceDealTagline}
        </div>
        <br />
        <div className="location"> {this.state.location} </div>
        <div className="numBought">
          {`${this.state.dealNumberBought.toLocaleString()}` + ' + bought'}
        </div>
        <div className="starsContainer">
          <div>
            {this.stars(this.state.starRating)}
            <span className="total-ratings-count">{`( ${this.state.numOfReviews} )`}</span>
          </div>
        </div>
        <div>
          <div className="priceContainer">
            <span className="origPrice"> {`$${this.state.origPrice}.99 `} </span>
            <span className="price"> {`$${this.state.price}.99 `} </span>
          </div>
        </div>
      </span>
    );
  }
}

export default Deals;

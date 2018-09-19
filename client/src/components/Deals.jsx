import React from 'react';
import axios from 'axios';
import {
  StyledDeal,
  ImageContainer,
  Image,
  Tagline,
  Location,
  NumBought,
  TotalRatingsCount,
  PriceContainer,
  OrigPrice,
  Price
} from './Deals.styles.jsx';
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
      <StyledDeal>
        {/* <img className="image" src={this.state.imageUrl} /> */}
        <ImageContainer>
          <div>
            <Image src={this.state.imageUrl} />
          </div>
        </ImageContainer>

        <Tagline>{this.state.productDealTagline || this.state.serviceDealTagline}</Tagline>
        <br />
        <Location> {this.state.location} </Location>
        <NumBought>{`${this.state.dealNumberBought.toLocaleString()}` + ' + bought'}</NumBought>
        <div>
          <div>
            {this.stars(this.state.starRating)}
            <TotalRatingsCount>{`( ${this.state.numOfReviews} )`}</TotalRatingsCount>
          </div>
        </div>
        <div>
          <PriceContainer>
            <OrigPrice> {`$${this.state.origPrice}.99 `} </OrigPrice>
            <Price> {`$${this.state.price}.99 `} </Price>
          </PriceContainer>
        </div>
      </StyledDeal>
    );
  }
}

export default Deals;

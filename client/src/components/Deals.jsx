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
      dealTagline: '',
      location: '',
      dealNumberBought: 0,
      origPrice: 0,
      price: 0,
      starRating: 6,
      numOfReviews: 0
    };
    this.getDealData = this.getDealData.bind(this);
  }

  componentDidMount() {
    this.getDealData(this.props.deal.id);
  }

  generateStars(rating) {
    const starArray = [];
    let color = '';
    for (var i = 1; i <= 5; i++) {
      if (i < rating) {
        color = '#FDC038';
      } else {
        color = '#E6E7E8';
      }
      starArray[i] = <FontAwesomeIcon className="star" key={i} icon={faStar} color={color} />;
    }
    return starArray;
  }

  getDealData(id) {
    axios
      // .get(`http://localhost:3003/${id}/api/recently-viewed-product-data`)
      .get(`/${id}/api/recently-viewed-product-data`)
      .then(response => {
        this.setState({
          id: response.data[0].id,
          imageUrl: response.data[0].imageUrl,
          dealTagline: response.data[0].dealTagline,
          location: response.data[0].location,
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

  render() {
    return (
      <StyledDeal>
        <ImageContainer>
          <div>
            <Image src={this.state.imageUrl} />
          </div>
        </ImageContainer>

        <Tagline>{this.state.dealTagline}</Tagline>
        <br />
        <Location> {this.state.location} </Location>
        <NumBought>{`${this.state.dealNumberBought.toLocaleString()}` + ' + bought'}</NumBought>
        <div>
          <div>
            {this.generateStars(this.state.starRating)}
            <TotalRatingsCount>{`( ${this.state.numOfReviews} )`}</TotalRatingsCount>
          </div>
        </div>
        <div>
          <PriceContainer>
            <OrigPrice> {`$${this.state.origPrice} `} </OrigPrice>
            <Price> {`$${this.state.price} `} </Price>
          </PriceContainer>
        </div>
      </StyledDeal>
    );
  }
}

export default Deals;

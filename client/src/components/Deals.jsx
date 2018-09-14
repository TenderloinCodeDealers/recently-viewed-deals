import React from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

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
      starRating: 6
    };
    this.get = this.get.bind(this);
    this.setWidth = this.setWidth.bind(this);
    this.get(props.deal.id);
  }

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

  setWidth(rating) {
    if (rating !== (6 || undefined || null)) {
      var starPercentage = (rating / 5) * 100;
      var starPercentageRounded = `${Math.round(starPercentage / 10) * 10}%`;
      console.log('querySelector before', document.getElementByClassName('.stars-inner'));
      document.getElementByClassName(
        '.numStars .stars-outer .stars-inner'
      ).style.width = starPercentageRounded;
      console.log('starRating', this.state.starRating);
      console.log('starPercentRounded', starPercentageRounded);
      console.log('querySelector after', document.getElementsByClassName('.stars-inner'));
    }
  }

  render() {
    // const starPercentage = (this.state.starRating / 5) * 100;
    // const starPercentageRounded = `${Math.round(starPercentage / 10) * 10}%`;
    // const elem = document.getElementsByClassName('.numStars .stars-inner');
    // console.log(document.getElementsByClassName('.stars-inner').width);
    // document.getElementsByClassName('.stars-inner').width = starPercentageRounded;
    // console.log(document.getElementsByClassName('.stars-inner').width);
    // document.querySelector('.stars-inner').style.width = starPercentageRounded;

    return (
      <span className="deal">
        <img className="image" src={this.state.imageUrl} />
        <div className="tagline">
          {this.state.productDealTagline || this.state.serviceDealTagline}
        </div>
        <div className="location"> {this.state.location} </div>
        <div className="numBought">
          {`${this.state.dealNumberBought.toLocaleString()}` + '+ bought'}
        </div>
        <div> {this.setWidth(this.state.starRating)} </div>
        <div className="numStars">
          <div className="stars-outer">
            <div className="stars-inner" />
          </div>
        </div>

        {/* perhaps need to include a forEach / Map to render all of the stars */}
        <div className="price"> {`$ ${this.state.price}`} </div>
      </span>
    );
  }
}

export default Deals;

{
  /* <div>
{this.state.starRating === (6 || null || undefined) ? (
  <div />
) : (
  <div className="numStars">
    {
      // (document.querySelector(
      //   '.numStars .stars-inner'
      // ).style.width = starPercentageRounded)
      (document.querySelector(
        '.numStars .stars-inner'
      ).style.width = starPercentageRounded)
    }
    <div className="stars-outer">
      <div className="stars-inner" />
    </div>
  </div>
)}
</div> */
}

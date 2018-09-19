import styled from 'styled-components';

export const StyledDeal = styled.span`
  display: grid;
  background-color: white;
  grid-template-rows: 135px 40px 20px 20px 20px 20px;
  grid-template-columns: 225px;
  grid-template-areas:
    'Image'
    'Tagline'
    'Location'
    'NumBought'
    'Stars'
    'Price';
`;

export const ImageContainer = styled.div`
  grid-area: 'Image';
  position: relative;
  height: 135px;
  width: 225px;
  overflow: hidden;
`;

export const Image = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  height: 135px;
  width: 225px;
  -webkit-transition: 0.1s ease;
  transition: 0.1s ease;

  &:hover {
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
  }
`;

// export const Item = styled.img`

// `;

//   .item img {
//     -webkit-transition: 0.6s ease;
//     transition: 0.6s ease;
//   }

//   .imageContainer:hover .item {
//     -webkit-transform: scale(1.1);
//     transform: scale(1.1);
//   }

export const Tagline = styled.div`
  grid-area: 'Tagline';
  font-family: 'Open Sans', sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  color: #333333;
`;

export const Location = styled.div`
  grid-area: 'Location';
  color: #75787b;
  font-family: 'Open Sans';
  font-size: 13px;
  font-style: normal;
  font-weight: 400;
  text-align: start;
`;

export const NumBought = styled.div`
  grid-area: 'NumBought';
  color: #75787b;
  font-family: 'Open Sans', OpenSans, system, -apple-system, system-ui, Roboto, Arial, FreeSans,
    sans-serif;
  font-size: 13px;
  font-style: normal;
  font-weight: 400;
  text-align: start;
  line-height: 13px;
`;

export const TotalRatingsCount = styled.span`
  font-size: 13px;
  color: rgb(117, 120, 123);
  font-family: 'Open Sans', OpenSans, system, -apple-system, system-ui, Roboto, Arial, FreeSans,
    sans-serif;
  line-height: 13px;
`;

export const PriceContainer = styled.div`
  grid-area: 'Price';
  text-align: right;
  border-bottom: 1px solid #e6e7e8;
`;

export const OrigPrice = styled.span`
  text-decoration: line-through;
  color: #75787b;
  font-family: 'Open Sans', OpenSans, system, -apple-system, system-ui, Roboto, Arial, FreeSans,
    sans-serif;
  font-size: 13px;
`;

export const Price = styled.span`
  /* display: flex; */
  /* align-items: right; */
  /* justify-content: right; */
  color: rgb(83, 163, 24);
  font-family: 'Open Sans', sans-serif;
  font-size: 21px;
  font-style: normal;
  font-weight: 600;
`;

// render() {
//     return (
//       <span className="deal">
//         {/* <img className="image" src={this.state.imageUrl} /> */}
//         <div className="imageContainer">
//           <div>
//             <img className="item image" src={this.state.imageUrl} />
//           </div>
//         </div>

//         <div className="tagline">
//           {this.state.productDealTagline || this.state.serviceDealTagline}
//         </div>
//         <br />
//         <div className="location"> {this.state.location} </div>
//         <div className="numBought">
//           {`${this.state.dealNumberBought.toLocaleString()}` + ' + bought'}
//         </div>
//         <div className="starsContainer">
//           <div>
//             {this.stars(this.state.starRating)}
//             <span className="total-ratings-count">{`( ${this.state.numOfReviews} )`}</span>
//           </div>
//         </div>
//         <div>
//           <div className="priceContainer">
//             <span className="origPrice"> {`$${this.state.origPrice}.99 `} </span>
//             <span className="price"> {`$${this.state.price}.99 `} </span>
//           </div>
//         </div>
//       </span>
//     );
//   }
// }

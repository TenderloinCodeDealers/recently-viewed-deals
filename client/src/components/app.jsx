import React from 'react';
import ReactDOM from 'react-dom';
import Deals from './Deals.jsx';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronCircleRight } from '@fortawesome/free-solid-svg-icons';
// library.add();

// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       deals: this.props.dealsArray
//     };
//     console.log(this.props);
//   }
// ** It is not best practice to set state with props ... therefore, changed this into functional-stateless component

const App = props => (
  <div>
    <div className="title">Recently Viewed Deals</div>
    <br />
    <div>
      <span className="dealContainer">
        {/* map through each deal in props.dealsArray ...  */}
        {props.dealsArray.map(deal => (
          <Deals deal={deal} />
        ))}
      </span>
    </div>
    {/* <span>
          <FontAwesomeIcon className="chevron" icon={faChevronCircleRight} />
        </span> */}
  </div>
);

export default App;

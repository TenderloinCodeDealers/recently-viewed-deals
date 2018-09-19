import React from 'react';
import ReactDOM from 'react-dom';
import Deals from './Deals.jsx';
import { Title, DealContainer } from './App.styles.jsx';
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
    <Title>Recently Viewed Deals</Title>
    <br />
    <div>
      <DealContainer>
        {/* map through each deal in props.dealsArray ...  */}
        {props.dealsArray.map(deal => (
          <Deals deal={deal} />
        ))}
      </DealContainer>
    </div>
    {/* <span>
          <FontAwesomeIcon className="chevron" icon={faChevronCircleRight} />
        </span> */}
  </div>
);

export default App;

import React from 'react';
import ReactDOM from 'react-dom';
import Deals from './Deals.jsx';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStroopwafel } from '@fortawesome/free-solid-svg-icons';
library.add(faStroopwafel);

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      deals: [
        { id: 0 },
        { id: 1 },
        { id: 2 },
        { id: 3 },
        { id: 50 },
        { id: 51 },
        { id: 52 },
        { id: 53 },
        { id: 54 }
      ]
    };
  }

  render() {
    return (
      <div>
        <div className="title">Recently Viewed Deals</div>
        <br />
        <div>
          <span className="dealContainer">
            {/* map through each deal in this.state ...  */}
            {this.state.deals.map(deal => (
              <Deals deal={deal} />
            ))}
          </span>
        </div>
      </div>
    );
  }
}

export default App;

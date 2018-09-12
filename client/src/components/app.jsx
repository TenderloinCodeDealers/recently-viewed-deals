import React from 'react';
import ReactDOM from 'react-dom';
import Deals from './Deals.jsx';

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
        <b>Recently Viewed Deals</b>
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

ReactDOM.render(<App />, document.getElementById('app'));

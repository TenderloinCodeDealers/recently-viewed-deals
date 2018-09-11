import React from 'react';
import ReactDOM from 'react-dom';
import Deals from './Deals.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      deals: [{ id: 0 }, { id: 1 }, { id: 2 }, { id: 3 }]
      // Each deal should be an object { id: 4 }
      // Should each of those objects contain? Perhaps just the ID so it can be included in the GET request?
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

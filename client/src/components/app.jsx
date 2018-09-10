import React from 'react';
import ReactDOM from 'react-dom';
import Deals from './Deals.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      deals: [{ id: 4 }, { id: 5 }]
      // Each deal should be an object { id: 4 }
      // Should each of those objects contain? Perhaps just the ID so it can be included in the GET request?
    };
  }

  // on some sort of event ...
  // retreive the ID from the click on the picture or hyperlink, make an object { id: 4 }, add it to state, then pass it as props

  // perhaps include a "new product" button, back and forward button above my module ...
  // 'new product' button --> onClick add a new deal to this.state

  render() {
    return (
      <div>
        <div>Recently Viewed Deals</div>
        <div className="dealContainer" />
        <span>
          {/* map through each deal in this.state ...  */}
          {this.state.deals.map(deal => (
            <Deals deal={deal} />
          ))}
        </span>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));

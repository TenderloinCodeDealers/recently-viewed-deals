import React from 'react';
import Deals from './Deals.jsx';
import { Title, DealContainer } from './App.styles.jsx';

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
  </div>
);

export default App;

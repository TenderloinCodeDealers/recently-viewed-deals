import React from 'react';
import Deals from './Deals.jsx';
import { MainTitle, DealContainer } from './App.styles.jsx';

const App = props => (
  <div>
    <MainTitle>Recently Viewed Deals</MainTitle>
    <br />
    <div>
      <DealContainer>
        {/* map through each deal in props.dealsArray ...  */}
        {props.dealsArray.map(deal => (
          <Deals deal={deal} key={deal.id} />
        ))}
      </DealContainer>
    </div>
  </div>
);

export default App;

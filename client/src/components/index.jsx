import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';

// logic below intakes URL endpoint and accurately displays the endpoint deal (by id) and 9 subsequent deals
// Ex. localhost:3003/1 --> will display deals 1 to 10
var url = window.location.href;
var dealId = Number(url.match(/([^\/]*)\/*$/)[1]);

let dealsArray = [];
for (let i = dealId; i < dealId + 10; i++) {
  if (i > 99) {
    let newDealId = i % 10;
    dealsArray.push({ id: newDealId });
  } else {
    dealsArray.push({ id: i });
  }
}

ReactDOM.render(<App dealsArray={dealsArray} />, document.getElementById('RVDeals'));

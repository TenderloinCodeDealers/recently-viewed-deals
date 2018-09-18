import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';

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

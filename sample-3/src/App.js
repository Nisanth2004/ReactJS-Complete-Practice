import './App.css';
import { Mobile } from './component/Mobile';
import { useState } from 'react';
const name="Nisanth";
function App() {
  return (
    <div className="App">
      <h1>Payilagam ReactJs</h1>
      <h2>{name}</h2>
      <Mobile brandName="Samsung" brandPrice="Rs.12000"/>
      <Mobile brandName="Realme" brandPrice="Rs.80000"/>
      <Mobile brandName="IPhone" brandPrice="Rs.1000000"/>
      <Mobile  brandPrice="Rs.10000"/>
     
    </div>
  );
}

export default App;

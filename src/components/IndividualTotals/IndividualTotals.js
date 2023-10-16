'use client'
import { useEffect, useState } from 'react';

const IndividualTotals = (props) => {

  const [items, setItems] = useState([]);
  
  // These can probably be changed to an onClick function?
  useEffect(() => {
    setItems(props.items);
  });

  const [tallies, setTallies] = useState({});

  const splitBill = () => {

    var subtotal = 0;
    var memberMap = {};

    // Cost per person for items ordered. 
    for (var i = 0; i < items.length; i++) {
      
      const memberString = items[i].party.toLowerCase();
      const memberArray = memberString.split(/\s*,\s*/);
      const price = Number(items[i].amount);
      const individualCost = price / memberArray.length;
      subtotal += price;

      for (const person of memberArray) {
        if (memberMap.hasOwnProperty(person)) {
          memberMap[person] += individualCost;
        } else {
          memberMap[person] = individualCost;
        }
      }
    }

    // Tax/tips share for each member. 
    for (const person in memberMap) {
      if (memberMap.hasOwnProperty(person)) {
        const individualAmount = memberMap[person];
        const proportion = individualAmount / subtotal;
        const individualTax = props.tax * proportion;
        const individualTips = props.tips * proportion;
        memberMap[person] += individualTax;
        memberMap[person] += individualTips;
      }
    }
    setTallies(memberMap);
  }
  
  return (
    <>
      Items : {JSON.stringify(items)}<br></br>
      <button onClick={splitBill}>Split Bill</button><br></br>
      Tallies : {JSON.stringify(tallies)}
    </>
  )

};

export default IndividualTotals;
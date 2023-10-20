'use client'
import { useEffect, useState } from 'react';

const IndividualTotals = (props) => {

  const [items, setItems] = useState([]);
  
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

  
  const postBill = async () => {

    // Can we create an array of names for 'party' instead of one string?
    const lineItems = {
      "lineItems" : items,
      "tallies":  tallies
    };

    try {
      const response = await fetch('http://localhost:3333/sean/create', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
          body: JSON.stringify(lineItems)
      });
  
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
  
      // const responseData = await response.json();
      setItems([]);
      setTallies({});
    
    } catch (error) {
      console.error('Error creating record.', error);
    }
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
'use client';
import { useEffect, useState } from 'react';

const IndividualTotals = (props) => {
  const [items, setItems] = useState([]);
  const [tallies, setTallies] = useState([]);

  useEffect(() => {
    setItems(props.items);
  }, [props.items]);

  // Not ideal
  useEffect(() => {
    postBill();
  }, [tallies]);

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

    var memberMapArray = [];
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
      memberMapArray.push({
        "party": person,
        "share": memberMap[person]
      })
    }
    setTallies(memberMapArray);
  }

  const postBill = async () => {

    const bill = {
      "lineItems" : items,
      "tallies":  tallies
    };
    
    try {
      // const response = await fetch('http://localhost:3333/sean/createBill', {
      const response = await fetch('http://ec2-3-101-67-174.us-west-1.compute.amazonaws.com:3333/sean/createBill', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
          body: JSON.stringify(bill)
      });
  
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
  
      const responseData = await response.json();
      console.log(responseData);
    
    } catch (error) {
      console.error('Error creating record.', error);
    }
    
  }
  
  return (
    <>
      Items : {JSON.stringify(items)}
      <br></br>
      <button onClick={splitBill}>Split Bill</button>
      <br></br>
      Tallies : {JSON.stringify(tallies)}
    </>
  );
};

export default IndividualTotals;

'use client';
import { useEffect, useState } from 'react';
import Card from '../UI/Card';
import '../../styles/IndividualTotal.css';


const IndividualTotals = (props) => {
  const [items, setItems] = useState([]);
  const [tallies, setTallies] = useState([]);

  useEffect(() => {
    setItems(props.items);
  }, [props.items]);

  // // Not ideal
  // useEffect(() => {
  //   postBill();
  // }, [tallies]);

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
        party: person,
        share: memberMap[person],
      });
    }
    setTallies(memberMapArray);
  };

  const postBill = async () => {
    const bill = {
      lineItems: items,
      tallies: tallies,
    };

  // const postBill = async () => {
  //   const bill = {
  //     lineItems: items,
  //     tallies: tallies,
  //     tax: props.tax,
  //     tips: props.tips
  //   };

  

    try {
      const response = await fetch(
        // 'http://localhost:3333/sean/createBill'
        'https://gpt-billsplitter.com:3333/sean/createBill',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(bill),
        }
      );

      if (!response.ok) {
        throw new Error('Network response was not ok');
      } else {
        alert("Bill has been saved.")
      }
  
      // const responseData = await response.json();
      // console.log(responseData);
    
    } catch (error) {
      console.error('Error creating record.', error);
    }
  };
  
  const itemsWithoutIdAndSequence = items.map(({ sequenceNumber, id, ...rest }) => rest);

  // Create a formatted string for displaying the items
  const formattedItems = itemsWithoutIdAndSequence.map((item, index) => (
    <div key={index}>
      <strong>Title:</strong> {item.title}, <strong>Party:</strong> {item.party}, <strong>Amount:</strong> ${item.amount}
    </div>
  ));

  // Create a formatted string for displaying the Tallies
  // Create a formatted string for displaying the Tallies
const formattedTallies = tallies.map((tally, index) => (
  <div key={index}>
    <strong>Party:</strong> {tally.party}, <strong>Amount:</strong> ${tally.share.toFixed(2)}
  </div>
));


  return (
    <Card className="IndividualTotal">
      <h2>Individual Totals</h2>
      <ul>
        <li>Items</li>
        <li>------------------------------------------------------</li>
        <ul>{formattedItems}</ul>
        <li>------------------------------------------------------</li>
        <li>
          <button onClick={splitBill}>Split Bill</button>
        </li>
        <li>Tallies</li>
        <li>------------------------------------------------------</li>
        <ul>{formattedTallies}</ul>
        <li>------------------------------------------------------</li>
      </ul>
      <br></br>
      <button onClick={postBill}>Save Bill</button>
      <br></br>
    </Card>
  );
};

const formatTallies = (tallies) => {
  const tallyList = [];
  for (const person in tallies) {
    if (tallies.hasOwnProperty(person)) {
      const tallyValue = tallies[person];
      if (typeof tallyValue === 'number') {
        const formattedAmount = tallyValue.toFixed(2); // Format to two decimal places
        tallyList.push(`${person}: ${formattedAmount}`);
      } else {
        tallyList.push(`${person}: ${tallyValue}`);
      }
    }
  }
  return (
    <ul>
      {tallyList.map((tally, index) => ( <li key={index}>{tally}</li>))} </ul>
  );
};


export default IndividualTotals;
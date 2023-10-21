'use client';
import { useEffect, useState } from 'react';
import Card from '../UI/Card';
import '../../styles/IndividualTotal.css';


const IndividualTotals = (props) => {
  const [items, setItems] = useState([]);

  // These can probably be changed to an onClick function?
  useEffect(() => {
    setItems(props.items);
  }, [props.items]);

  const [tallies, setTallies] = useState({});

  const splitBill = () => {
    var subtotal = 0;
    var memberMap = {};
    for (var i = 0; i < items.length; i++) {
      // Get the string of names - convert to lowercase.
      const memberString = items[i].party.toLowerCase();
      // Split into individual names.
      const memberArray = memberString.split(/\s*,\s*/);
      // Get the total value of the line item.
      const price = Number(items[i].amount);
      // Determine the individual cost for the line item.
      const individualCost = price / memberArray.length;
      // Add the line item value to the grand total.
      subtotal += price;
      for (const person of memberArray) {
        if (memberMap.hasOwnProperty(person)) {
          memberMap[person] += individualCost;
        } else {
          memberMap[person] = individualCost;
        }
      }
    }

    // Iterate through member map.
    for (const person in memberMap) {
      if (memberMap.hasOwnProperty(person)) {
        // Get the value of each members total.
        const individualAmount = memberMap[person];
        // Divide individual total by subtotal to get proportion.
        const proportion = individualAmount / subtotal;
        // Multiply proportion by tax and tips and add the result to each member total.
        // const individualTax = props.taxAndTips.tax * proportion;
        // const individualTips = props.taxAndTips.tips * proportion;
        const individualTax = props.tax * proportion;
        const individualTips = props.tips * proportion;
        memberMap[person] += individualTax;
        memberMap[person] += individualTips;
      }
    }
    setTallies(memberMap);
  }
  
  const itemsWithoutIdAndSequence = items.map(({ sequenceNumber, id, ...rest }) => rest);

  // Create a formatted string for displaying the items
  const formattedItems = itemsWithoutIdAndSequence.map((item, index) => (
    <div key={index}>
      <strong>Title:</strong> {item.title}, <strong>Party:</strong> {item.party}, <strong>Amount:</strong> ${item.amount}
    </div>
  ));

  // Create a formatted string for displaying the Tallies
  const formattedTallies = formatTallies(tallies);

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
    </Card>
  );
};

const formatTallies = (tallies) => {
  const tallyList = [];
  for (const person in tallies) {
    if (tallies.hasOwnProperty(person)) {
      const formattedAmount = tallies[person].toFixed(2); // Format to two decimal places
      tallyList.push(`${person}: ${formattedAmount}`);
    }
  }
  return <ul>{tallyList.map((tally, index) => <li key={index}>{tally}</li>)}</ul>;
};

export default IndividualTotals;
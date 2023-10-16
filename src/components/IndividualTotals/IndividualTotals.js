'use client';
import { useEffect, useState } from 'react';

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
  };

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

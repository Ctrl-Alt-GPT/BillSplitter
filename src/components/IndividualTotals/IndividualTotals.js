'use client';
import { useEffect, useState } from 'react';
import Card from '../UI/Card';
import '../../styles/IndividualTotal.css';
import { Button, Alert } from '@mui/material';

const prodURL = false;

const IndividualTotals = (props) => {

  const [showAlert, setShowAlert] = useState(false);

  useEffect(() => {
    setShowAlert(false);
  }, [props.items.length > 0])

  const postBill = async () => {

    if (props.items.length > 0) {
      setShowAlert(false);
      const itemsCopy = [...props.items];

      for (let i = 0; i < itemsCopy.length; i++) { 
        if (typeof itemsCopy[i].party === "string") {
          const memberString = itemsCopy[i].party.toLowerCase();
          const memberArray = memberString.split(/\s*,\s*/);
          itemsCopy[i].party = memberArray;
        }
      }

      const bill = {
        lineItems: itemsCopy,
        tallies: props.tallies,
        tax: props.tax,
        tips: props.tips
      };
      
      try {
        
        var URL = 'http://localhost:3333/sean/createBill';
        if (prodURL) 
          URL = 'https://gpt-billsplitter.com:3333/sean/createBill';

        const response = await fetch( URL ,
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
        
      } catch (error) {
        console.error('Error creating record.', error);
      }
      props.clearTax(0);
      props.clearTips(0);
      props.clearItems([]);
    }
    else {
      setShowAlert(true);
    }
  };
  
  const itemsWithoutIdAndSequence = props.items.map(({ id, ...rest }) => rest);

  // Create a formatted string for displaying the items
  const formattedItems = itemsWithoutIdAndSequence.map((item, index) => (
    <div key={index}>
      <strong>Title:</strong> {item.title}, <strong>Party:</strong> {item.party}, <strong>Amount:</strong> ${item.amount}
    </div>
  ));

    // Create a formatted string for displaying the Tallies
  const formattedTallies = props.tallies.map((tally, index) => (
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
        <li>Tallies</li>
        <li>------------------------------------------------------</li>
        <ul>{formattedTallies}</ul>
        <li>------------------------------------------------------</li>
      </ul>
      <br></br>      
      <Button variant="contained" onClick={postBill}>Save Bill</Button>
      <br></br>
      <br></br>
      {showAlert == true ?
        <Alert 
          severity="warning">You must add an item in order to save the record.
        </Alert> : null
      }
    </Card>
    
  );
}

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
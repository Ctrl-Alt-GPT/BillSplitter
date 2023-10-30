'use client';
import Card from '../UI/Card';
import '../../styles/IndividualTotal.css';


const IndividualTotals = (props) => {

  const postBill = async () => {

    // const bill = {
    //   // lineItems: items,
    //   lineItems: props.items,
    //   // tallies: tallies,
    //   tallies: props.tallies,
    // };

    // Incorporating tax and tips. 
    const bill = {
      lineItems: props.items,
      tallies: props.tallies,
      tax: props.tax,
      tips: props.tips
    };


    try {
      const response = await fetch(
        'http://localhost:3333/sean/createBill'
        /*'https://gpt-billsplitter.com:3333/sean/createBill'*/,
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
  
  // const itemsWithoutIdAndSequence = props.items.map(({ sequenceNumber, id, ...rest }) => rest);
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
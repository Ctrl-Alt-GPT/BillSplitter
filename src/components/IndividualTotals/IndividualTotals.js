'use client'
import { useEffect, useState } from 'react';


const IndividualTotals = (props) => {

  const [items, setItems] = useState([]);
  
  // These can probably be changed to an onClick function.
  useEffect(() => {
    setItems(props.items);
  });

  const [partyMembers, setPartyMembers] = useState([]);
  const [tallies, setTallies] = useState({});

  // Iterate through items.
  // Parse the 'party' string.
  // For each parsed name in the party string - add the requisite value to the name:total pair.


  const parseMembers = () => {

    var memberMap = {};
    for (var i = 0; i < items.length; i++) {
      const memberString = items[i].party;
      const memberArray = memberString.split(/\s*,\s*/);
      const price = Number(items[i].amount) / memberArray.length;
      for (const person of memberArray) {
        if (memberMap.hasOwnProperty(person)) {
          memberMap[person] += price;
        } else {
          memberMap[person] = price;
        }
      }
    }
    setTallies(memberMap);
  }
  
  return (
    <>
      Items : {JSON.stringify(items)}<br></br>
      <button onClick={parseMembers}>Show members</button><br></br>
      Tallies : {JSON.stringify(tallies)}
    </>
  )

};

export default IndividualTotals;
'use client';
import { useState } from 'react';
import Card from '../UI/Card';
import Items from '../Items/Items';
import '../../styles/Board.css';
import NewItem from '../NewItem/NewItem';
import Image from 'next/image';
import ctrlaltgptlogo from '../../../public/ctrlaltgptlogo-nobg.png';
import DisplayTotal from '../DisplayTotal/DisplayTotal';
import NewParty from '../NewParty/NewParty';
import IndividualTotal from '../IndividualTotal/IndividualTotal';

const DEFAULT_ITEMS = [];

const Board = () => {
  const [items, setItems] = useState([]);
  const [parties, setParties] = useState([]);
  

  const addItemHandler = (item) => {
    let parties = Array.isArray(item.party) ? item.party : [item.party];
    parties = parties.map((party) => party.trim());
  
    const partiesCount = parties.length;
    if (partiesCount > 1) {
      const totalAmount = parseFloat(item.amount);
      const splitAmount = (totalAmount / partiesCount).toFixed(2);

      parties.forEach((partyMember) => {
        const newItem = {
          ...item,
          party: partyMember,
          amount: splitAmount,
        };
  
        setItems((prevItems) => {
          return [newItem, ...prevItems];
        });
      });
    } else {
      setItems((prevItems) => {
        return [item, ...prevItems];
      });
    }
  };
    
  const addPartyHandler = (partyName) => {
    setParties((prevParties) => {
      return [...prevParties, partyName];
    });
  };

  // Group items by party name
  const groupedItems = {};
  items.forEach((item) => {
    const party = item.party;
    if (!groupedItems[party]) {
      groupedItems[party] = [];
    }
    groupedItems[party].push(item);
  });

  return (
    <Card className="board">
      <header>
        <Image
          src={ctrlaltgptlogo}
          alt="Ctrl+Alt+GPT logo"
          width={75}
          height={75}
        />
        <h1>Bill Splitter</h1>
      </header>
      <NewItem onSaveItemData={addItemHandler} />
      <NewParty onAddParty={addPartyHandler} />
      <Items datas={items} />    
      <DisplayTotal datas={items} />
      <IndividualTotal datas={items} />
      {parties.map((party) => (
        <div key={party}>
          <h2>{party}</h2>
          <Items datas={items.filter((item) => item.party === party)} />
        </div>
      ))}
      {Object.keys(groupedItems).map((party) => (
        <div key={party}>
          <h2>{party}</h2>
          <Items datas={groupedItems[party]} />
        </div>
      ))}
    </Card>
  );
};

export default Board;
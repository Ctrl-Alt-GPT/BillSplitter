'use client';
import { useState } from 'react';
import Card from '../UI/Card';
import Items from '../Items/Items';
import '../../styles/Board.css';
import NewItem from '../NewItem/NewItem';
import Image from 'next/image';
import ctrlaltgptlogo from '../../../public/ctrlaltgptlogo-nobg.png';
import DisplayTotal from '../DisplayTotal/DisplayTotal';
import TaxTipsAddComponent from '../TaxTipsAdd/TaxTipsAdd';
import IndividualTotals from '../IndividualTotals/IndividualTotals';
import SplitParty from '../SplitParty/SplitParty';
import NewParty from '../NewParty/NewParty';
import IndividualTotal from '../IndividualTotal/IndividualTotal';

const DEFAULT_ITEMS = [];

const Board = () => {
  
  const [items, setItems] = useState([]);
  const [parties, setParties] = useState([]);
  const [tax, setTax] = useState(0);
  const [tips, setTips] = useState(0);

  const getTaxVal = (taxVal) => {
    setTax(taxVal);
  }

  const getTipsVal = (tipsVal) => {
    setTips(tipsVal);
  }
  
  const removeItem = (idx) => {
    const filteredArray = items.filter((item) => item.sequenceNumber !== idx);
    setItems(filteredArray);
  };

  const [grandTotal, setGrandTotal] = useState(0);

  const calculatedGrandTotalHandler = (total) => {
    setGrandTotal(total);
  };
  
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
      
     <NewItem onAddItems={addItemHandler} />
      {items.map((item, idx) => (
        <Items
          key={idx}
          title={item.title}
          party={item.party}
          amount={item.amount}
          idx={idx}
          remove={removeItem}
        />
      ))}
      
      <DisplayTotal
        datas={items}
        taxData={tax}
        tipsData={tips}
        calculatedGrandTotal={calculatedGrandTotalHandler}
      />
     

     <div className="card-content">
        
        <div className="left-content">
          <TaxTipsAddComponent getTaxVal={getTaxVal} getTipsVal={getTipsVal} />
          <SplitParty total={grandTotal} />
        </div>
        
        
        
          <div className="right-content">
            <IndividualTotals items={items} tax={tax} tips={tips} />
          </div>
          
      </div>
    </Card>
  );
};

export default Board;

'use client';
import { useState } from 'react';
import Card from '../UI/Card';
import Items from '../Items/Items';
import '../../styles/Board.css';
import NewItem from '../NewItem/NewItem';
import Image from 'next/image';
import ctrlaltgptlogo from '../../../public/ctrlaltgptlogo-nobg.png';
import DisplayTotal from '../DisplayTotal/DisplayTotal';
<<<<<<< HEAD
import TaxTipsAddComponent from '../TaxTipsAdd/TaxTipsAdd';
import IndividualTotals from '../IndividualTotals/IndividualTotals';
import SplitParty from '../SplitParty/SplitParty';
=======
>>>>>>> 89a1bfd5e427c78bb0ef87e66c7fd2b21ca6dd01
import NewParty from '../NewParty/NewParty';
import IndividualTotal from '../IndividualTotal/IndividualTotal';

const DEFAULT_ITEMS = [];

const Board = () => {
<<<<<<< HEAD
=======
  const [items, setItems] = useState([]);
  const [parties, setParties] = useState([]);
  
>>>>>>> 89a1bfd5e427c78bb0ef87e66c7fd2b21ca6dd01

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
<<<<<<< HEAD
 
=======
  
>>>>>>> 89a1bfd5e427c78bb0ef87e66c7fd2b21ca6dd01
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
<<<<<<< HEAD
 
=======
  
>>>>>>> 89a1bfd5e427c78bb0ef87e66c7fd2b21ca6dd01
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
<<<<<<< HEAD
   
=======
    
>>>>>>> 89a1bfd5e427c78bb0ef87e66c7fd2b21ca6dd01
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
<<<<<<< HEAD
      <NewItem onAddItems={addItemHandler} />
      <Items datas={items} remove={removeItem} />
      <DisplayTotal
        datas={items}
        taxData={tax} tipsData={tips}
        calculatedGrandTotal={calculatedGrandTotalHandler}
      />
      <TaxTipsAddComponent getTaxVal={getTaxVal} getTipsVal={getTipsVal}/>
      <SplitParty total={grandTotal} />
      <IndividualTotals items={items} tax={tax} tips={tips}/>
      <NewParty />
      <Items datas={items} />
=======
      <NewItem onSaveItemData={addItemHandler} />
>>>>>>> 89a1bfd5e427c78bb0ef87e66c7fd2b21ca6dd01
      <NewParty onAddParty={addPartyHandler} />
      <Items datas={items} />    
      <DisplayTotal datas={items} />
      <IndividualTotal datas={items} />
<<<<<<< HEAD
      
      <div className="right-content">
=======
>>>>>>> 89a1bfd5e427c78bb0ef87e66c7fd2b21ca6dd01
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
<<<<<<< HEAD
     </div>
     
=======
>>>>>>> 89a1bfd5e427c78bb0ef87e66c7fd2b21ca6dd01
    </Card>
  );
};

export default Board;
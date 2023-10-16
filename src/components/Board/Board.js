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
<<<<<<< HEAD
import TaxTipsAddComponent from '../TaxTipsAdd/TaxTipsAdd';
import IndividualTotals from '../IndividualTotals/IndividualTotals';
import SplitParty from '../SplitParty/SplitParty';
=======
>>>>>>> 89a1bfd5e427c78bb0ef87e66c7fd2b21ca6dd01
>>>>>>> 79f78cd6a78bd5145ceffab0a0f6be028455f575
import NewParty from '../NewParty/NewParty';
import IndividualTotal from '../IndividualTotal/IndividualTotal';

const DEFAULT_ITEMS = [];

const Board = () => {
<<<<<<< HEAD

=======
<<<<<<< HEAD
=======
  const [items, setItems] = useState([]);
  const [parties, setParties] = useState([]);
  
>>>>>>> 89a1bfd5e427c78bb0ef87e66c7fd2b21ca6dd01

>>>>>>> 79f78cd6a78bd5145ceffab0a0f6be028455f575
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
<<<<<<< HEAD
 
=======
  
>>>>>>> 89a1bfd5e427c78bb0ef87e66c7fd2b21ca6dd01
>>>>>>> 79f78cd6a78bd5145ceffab0a0f6be028455f575
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
<<<<<<< HEAD
 
=======
  
>>>>>>> 89a1bfd5e427c78bb0ef87e66c7fd2b21ca6dd01
>>>>>>> 79f78cd6a78bd5145ceffab0a0f6be028455f575
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
<<<<<<< HEAD
   
=======
    
>>>>>>> 89a1bfd5e427c78bb0ef87e66c7fd2b21ca6dd01
>>>>>>> 79f78cd6a78bd5145ceffab0a0f6be028455f575
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
      
=======
<<<<<<< HEAD
      <NewItem onAddItems={addItemHandler} />
      <Items datas={items} remove={removeItem} />
>>>>>>> 79f78cd6a78bd5145ceffab0a0f6be028455f575
      <DisplayTotal
        datas={items}
        taxData={tax}
        tipsData={tips}
        calculatedGrandTotal={calculatedGrandTotalHandler}
      />
<<<<<<< HEAD
     

     <div className="card-content">
        
        <div className="left-content">
          <TaxTipsAddComponent getTaxVal={getTaxVal} getTipsVal={getTipsVal} />
          <SplitParty total={grandTotal} />
        </div>
        
        
        
          <div className="right-content">
            <IndividualTotals items={items} tax={tax} tips={tips} />
          </div>
          
      </div>
=======
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
>>>>>>> 79f78cd6a78bd5145ceffab0a0f6be028455f575
    </Card>
  );
};

export default Board;

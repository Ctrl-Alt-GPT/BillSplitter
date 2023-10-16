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

const DEFAULT_ITEMS = [];

const Board = () => {

  const [tax, setTax] = useState(0);
  const [tips, setTips] = useState(0);

  const getTaxVal = (taxVal) => {
    setTax(taxVal);
  }

  const getTipsVal = (tipsVal) => {
    setTips(tipsVal);
  }
  
  const [items, setItems] = useState(DEFAULT_ITEMS);

  const addItemHandler = (item) => {
    setItems((prevItems) => {
      return [...prevItems, item];
    });
  };

  const removeItem = (idx) => {
    const filteredArray = items.filter((item) => item.sequenceNumber !== idx);
    setItems(filteredArray);
  };

  const [grandTotal, setGrandTotal] = useState(0);

  const calculatedGrandTotalHandler = (total) => {
    setGrandTotal(total);
  };

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
      <Items datas={items} remove={removeItem} />
      <DisplayTotal
        datas={items}
        taxData={tax} tipsData={tips}
        calculatedGrandTotal={calculatedGrandTotalHandler}
      />
      <TaxTipsAddComponent getTaxVal={getTaxVal} getTipsVal={getTipsVal}/>
      <SplitParty total={grandTotal} />
      <IndividualTotals items={items} tax={tax} tips={tips}/>
    </Card>
  );
};

export default Board;

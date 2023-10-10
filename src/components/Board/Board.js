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

const DEFAULT_ITEMS = [];

const Board = () => {

  const [taxTips, setTaxTips] = useState({
    tax: 0,
    tips: 0
  });

  const getTaxAndTips = (childData) => {
   setTaxTips(childData);
  };
  
  const [items, setItems] = useState(DEFAULT_ITEMS);

  const addItemHandler = (item) => {
    setItems((prevItems) => {
      return [item, ...prevItems];
    });
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
      <NewItem onAddItems={addItemHandler}/>
      <Items datas={items}/>
      <DisplayTotal datas={items} taxTipsData={taxTips}/>
      <TaxTipsAddComponent sendToParent={getTaxAndTips}/>
    </Card>
  );
};

export default Board;

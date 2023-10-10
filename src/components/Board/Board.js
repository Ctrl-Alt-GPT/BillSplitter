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

const DEFAULT_ITEMS = [];

const Board = () => {
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
      <NewItem onAddItems={addItemHandler} />
      <NewParty />
      <Items datas={items} />
      <DisplayTotal datas={items} />
    </Card>
  );
};

export default Board;

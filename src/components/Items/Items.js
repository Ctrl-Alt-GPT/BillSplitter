'use client'
import Card from '../UI/Card';
import Item from './Item';
import '../../styles/Items.css';
import '../../styles/Blue-Button.css';

import { useState } from 'react';
import { useEffect } from 'react';

const Items = (props) => {

  const [allItems, setAllItems] = useState([]);

  useEffect(() => {
    setAllItems(props.datas);
  });

  return (
    <Card className="items">
      {props.datas.length <= 0 ? (
        <div className="no-items">Add an item to get started.</div>
      ) : (
        allItems.map((item) => (
          <Item
            key={item.id}
            title={item.title}
            party={item.party}
            amount={item.amount}
            remove={props.remove}
            idx={allItems[allItems.length-1].sequenceNumber}
          />
        ))
      )}
      {/* Replacing this 'Remove' button with a different remove feature */}
      {/* <button className='blue-button' onClick={props.remove}>Remove Item</button> */}
    </Card>
  );
};

export default Items;

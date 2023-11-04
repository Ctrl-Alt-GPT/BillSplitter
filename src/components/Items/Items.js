'use client';
import Item from './Item';
import '../../styles/Items.css';
import '../../styles/Blue-Button.css';
import { Card, CardContent } from '@mui/material';

import { useState } from 'react';
import { useEffect } from 'react';

const Items = (props) => {
  const [allItems, setAllItems] = useState([]);

  useEffect(() => {
    setAllItems(props.datas);
  }, [props.datas]);

  return (
    <Card>
      <CardContent>
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
              idx={allItems[allItems.length - 1].sequenceNumber}
            />
          ))
        )}
      </CardContent>
    </Card>
  );
};

export default Items;

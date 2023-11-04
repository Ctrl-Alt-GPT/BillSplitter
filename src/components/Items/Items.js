'use client';
import Item from './Item';
import '../../styles/Items.css';
import '../../styles/Blue-Button.css';
import { Card, CardContent } from '@mui/material';

const Items = (props) => {
  return (
    <Card>
      <CardContent>
        {props.datas.length <= 0 ? (
          <div className="no-items">Add an item to get started.</div>
        ) : (
          props.datas.map((item) => (
            <Item
              id={item.id}
              key={item.id}
              title={item.title}
              party={item.party}
              amount={item.amount}
              removeItem={props.removeItem}
            />
          ))
        )}
      </CardContent>
    </Card>
  );
};

export default Items;

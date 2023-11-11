'use client';
import Item from './Item';
import '../../styles/Items.css';
import '../../styles/Blue-Button.css';
import { Box, Card, CardContent } from '@mui/material';

const Items = (props) => {
  return (
    <Card sx={{ height: '100%' }}>
      <CardContent>
        {props.datas.length <= 0 ? (
          <Box sx={{ textAlign: 'center', color: 'lightgray', padding: 1 }}>
            Add an item to get started.
          </Box>
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

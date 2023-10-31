'use client';
import Card from '../UI/Card';
import Item from './Item';
import '../../styles/Items.css';
import '../../styles/Blue-Button.css';

const Items = (props) => {

  return (
    <Card className="items">
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
    </Card>
  );
};

export default Items;
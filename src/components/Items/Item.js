'use client';
import Card from '../UI/Card';
import '../../styles/Item.css';
import '../../styles/Remove-Button.css';
import { useState } from 'react';

const Item = (props) => {

  const [myId, setIdx] = useState(props.id);

  const removeThisItem = () => {
    props.removeItem(myId);
  };

  return (
    <Card className="item">
      <h2>{props.title}</h2>
      <div className="item__party">
        Party: <br />
        {props.party}
      </div>
      <div className="item__amount">${props.amount}</div>
      <button className="remove-button"onClick={removeThisItem}></button>
    </Card>
  );
};

export default Item;
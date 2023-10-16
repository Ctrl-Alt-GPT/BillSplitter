'use client'
import Card from '../UI/Card';
import '../../styles/Item.css';
import '../../styles/Remove-Button.css';
import { useState } from 'react';
import { useEffect } from 'react';

const Item = (props) => {
  const [arrIdx, setArrIdx] = useState(props.idx);
  
  useEffect(() => {
    setArrIdx(props.idx);
  }, [props.idx]);

  const removeThisItem = () => {
    props.remove(arrIdx);
  }

  return (
    <Card className="item">
      Item: <br />
      <h2>{props.title}</h2>
      <div className="item__party">
        Party: <br />
        <h2>{props.party}</h2>
      </div>
      <div className="item__amount">Amount: ${props.amount}</div>
      <button className='remove-button' onClick={removeThisItem}></button>
      
    </Card>
  );
};

export default Item;

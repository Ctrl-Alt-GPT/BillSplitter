'use client'
import Card from '../UI/Card';
import '../../styles/Item.css';
import '../../styles/Remove-Button.css';
import { useState } from 'react';
import { useEffect } from 'react';

// const Item = ({ title, party, amount }) => {
const Item = (props) => {

  const [arrIdx, setArrIdx] = useState(props.idx);
  
  // Not sure if this is needed. 
  useEffect(() => {
    setArrIdx(props.idx);
  }, []);

  const removeThisItem = () => {
    props.remove(arrIdx);
    // props.remove(props.key);
  }

  return (
    <Card className="item">
<<<<<<< HEAD
      {/* <h2>{title}</h2> */}
      <h2>{props.title}</h2>
=======
        Item: <br />
      <h2>{title}</h2>
>>>>>>> 89a1bfd5e427c78bb0ef87e66c7fd2b21ca6dd01
      <div className="item__party">
        Party: <br />
        {/* {party} */}
        {props.party}
      </div>
<<<<<<< HEAD
      {/* <div className="item__amount">${amount}</div> */}
      <div className="item__amount">${props.amount}</div>
      {/* <button onClick={props.remove}>Remove</button> */}
      <button className='remove-button' onClick={removeThisItem}></button>
=======
      <div className="item__amount">
        Amount: <br />
        ${amount}</div>
>>>>>>> 89a1bfd5e427c78bb0ef87e66c7fd2b21ca6dd01
    </Card>
  );
};

export default Item;

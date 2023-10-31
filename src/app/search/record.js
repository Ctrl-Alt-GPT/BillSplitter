'use client';
import '../../styles/RecordTile.css';
import '../../styles/Item.css';
import { useEffect, useState } from 'react';


const Record = (props) => {

  // const [id, setId] = useState(props._id);
  // const [lineItems, setLineItems] = useState(props.lineItems);
  // const [tallies, setTallies] = useState(props.tallies);
  // const [createdAt, setCreatedAt] = useState(props.createdAt);
    
  return (
    <>
      <div className="tile" >
        {/* <p>ID : {id}</p>
        <p>Line Items : {JSON.stringify(lineItems)}</p>
        <p>Tallies : {JSON.stringify(tallies)}</p>
        <p>Created On : {JSON.stringify(createdAt)}</p> */}
        <p>ID : {props._id}</p>
        <p>Line Items : {JSON.stringify(props.lineItems)}</p>
        <p>Tallies : {JSON.stringify(props.tallies)}</p>
        <p>Tax : {JSON.stringify(props.tax)}</p>
        <p>Tips : {JSON.stringify(props.tips)}</p>
        <p>Created On : {JSON.stringify(props.createdAt)}</p>

      </div>
    </>
  )
}


export default Record;
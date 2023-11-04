'use client';
import '../../styles/RecordTile.css';
import '../../styles/Item.css';
import Link from 'next/link';
import { useEffect, useState } from 'react';


const Record = (props) => {

  // onClick->link back to home page and populate items array with record
  // info and tax tips with record info. Consolidate the party array into a string. 
  const [items, setLineItems] = useState({});

   useEffect(() => {
    
    // Change this later. Need a deep copy?
    const recordCopy = [props];
    // console.log(JSON.stringify(recordCopy));

    for (let i = 0; i < recordCopy[0].lineItems.length; i++) {
      recordCopy[0].lineItems[i].party = recordCopy[0].lineItems[i].party.toString(); 
      console.log(JSON.stringify(recordCopy[0].lineItems[i].party));
    }

    const data = { 
      lineItems: recordCopy.lineItems,
      taxes: JSON.stringify(props.tax),
      tipValues: JSON.stringify(props.tips)
     };

    setLineItems({data});
   }, [])
    
  return (
    <>
      <div className="tile" >
        {/* <Link href="/"> Edit </Link> */}
        {/* <Link href={`/${items.lineItems}/${items.taxes}/${items.tipValues}`}>Edit</Link>         */}
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
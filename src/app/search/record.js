'use client';
import '../../styles/RecordTile.css';
import '../../styles/Item.css';
import Link from 'next/link';
import { useEffect, useState } from 'react';


const Record = (props) => {

  const [items, setLineItems] = useState({});

  useEffect(() => {
  
    const updatedLineItems = props.lineItems.map((item) => ({
      ...item,
      party: item.party.toString(),
    }));

    const data = {
      lineItems: updatedLineItems,
      taxes: JSON.stringify(props.tax),
      tipValues: JSON.stringify(props.tips),
    };
      
    setLineItems(data);
  // console.log(JSON.stringify(data));
  }, [])
    
  return (
    <>
      <div className="tile" >
        
        <Link
          href={{
            // pathname: '/',
            pathname: '/edit',
            // pathname: '/home',
            query: {
              search: JSON.stringify(items)
            }
          }}>
          Edit
        </Link>

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
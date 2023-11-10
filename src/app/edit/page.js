'use client';
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
// import Item from '../../components/Items/Item';
// import Card from '../../components/UI/Card';
import '../../styles/Items.css';
import '../../styles/Card.css';
import Board from '../../components/Board/Board';

const Edit = () => {  
  const searchParams = useSearchParams();
  const [items, setItems] = useState([]);
  const [tax, setTax] = useState(0);
  const [tips, setTips] = useState(0);

  useEffect(() => {
    if (searchParams !== undefined) {
      const parsedData = JSON.parse(searchParams.get('search'));
      if (parsedData && parsedData.lineItems) {
        setItems(parsedData.lineItems);
        const tax = parsedData.taxes == undefined ? 0 : parsedData.taxes;
        setTax(tax);
        const tips = parsedData.tipValues == undefined ? 0 : parsedData.tipValues;
        setTips(tips);
      }
    }
  }, [searchParams]);


  return (
    <>
      <Board 
        items={items} 
        taxes={tax}
        tipVals={tips}
      />
    </>
  )
};

export default Edit;

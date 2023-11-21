'use client';
import { useEffect, useState } from 'react';
import Board from '../../../components/Board/Board';
import { Alert } from '@mui/material';

const DynamicEdit = ({ params }) => {
  const [items, setItems] = useState([]);
  const [tax, setTax] = useState(0);
  const [tips, setTips] = useState(0);
  const [showNotFound, setShowNotFound] = useState(false);
  const { id } = params;

  useEffect(() => {
    searchForRecords();
  }, [params]);

  const searchForRecords = async () => {
    URL = 'https://gpt-billsplitter.com:3333/sean/' + id;

    try {
      const response = await fetch(URL, { method: 'GET' });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();

      const updatedLineItems = data[0].lineItems.map((item) => ({
        ...item,
        party: item.party.toString(),
      }));
      setItems(updatedLineItems);
      const tax = data[0].tax == undefined ? 0 : data[0].tax;
      setTax(tax);
      const tips = data[0].tips == undefined ? 0 : data[0].tips;
      setTips(tips);
      setShowNotFound(false);
    } catch (error) {
      console.error('Error fetching data:', error);
      setShowNotFound(true);
    }
  };

  return (
    <>
      {showNotFound == true ? (
        <Alert severity="warning">ID: {id} was not found.</Alert>
      ) : (
        <Board items={items} taxes={tax} tipVals={tips} />
      )}
    </>
  );
};

export default DynamicEdit;

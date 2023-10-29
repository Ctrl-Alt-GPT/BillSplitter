'use client';
import { setRequestMeta } from 'next/dist/server/request-meta';
import { useEffect, useState } from 'react';

const Search = () => {

  const [records, setrecords] = useState('');
  const [bill, setBill] = useState('');

  const clearRecords = async () => {
    try {
      const response = await fetch(
        'http://localhost:3333/sean/clearAllBills'
        /*'https://gpt-billsplitter.com:3333/sean/clearAllBills'*/, {
          method: 'DELETE',
        });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      setrecords('');
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };


  const fetchrecords = async () => {
    
    try { 
      const response = await fetch(
        'http://localhost:3333/sean/getAllBills'
        /*'https://gpt-billsplitter.com:3333/sean/getAllBills'*/, {
          method: 'GET',
        });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      
      // setBill(JSON.stringify(response.tallies));
      setrecords(response.text());
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

  return (
    <>
      Records:
      <br></br>
      <button onClick={fetchrecords}>Get Records</button>
      <br></br>
      <div>{records}</div>
      {/* <div>{bill}</div> */}
      <br></br>
      <button onClick={clearRecords}>Clear records</button>
    </>
  );
};

export default Search;

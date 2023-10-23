'use client';
import { useEffect, useState } from 'react';

const Search = () => {
  const [records, setrecords] = useState('');

  const clearRecords = async () => {
    try {
      // const response = await fetch('http://localhost:3333/sean/clearAllBills');
      const response = await fetch(
        'https://gpt-billsplitter.com:3333/sean/clearAllBills'
      );
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      // setrecords(response.text());
      setrecords('');
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    const fetchrecords = async () => {
      try {
        const response = await fetch(
          'https://gpt-billsplitter.com:3333/sean/getAllBills'
        );
        // const response = await fetch('http://localhost:3333/sean/getAllBills');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        setrecords(response.text());
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchrecords();
  }, []);

  return (
    <>
      Records:
      <br></br>
      <div>{records}</div>
      <br></br>
      {/* <button onClick={clearRecords}>Clear records</button> */}
    </>
  );
};

export default Search;

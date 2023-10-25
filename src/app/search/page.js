'use client'
import { useEffect, useState } from 'react';

const Search = () => {

  const [records, setrecords] = useState('');

  const clearRecords = async () => {

    try {
      const response = await fetch('http://localhost:3333/sean/clearAllBills', {
        method: 'DELETE',
      });
      // const response = await fetch('https://ec2-3-101-67-174.us-west-1.compute.amazonaws.com:3333/sean/clearAllBills');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      setrecords('');
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

  const fetchrecords = async () => {
    
    try {
      // const response = await fetch('https://ec2-3-101-67-174.us-west-1.compute.amazonaws.com:3333/sean/getAllBills');
      const response = await fetch('http://localhost:3333/sean/getAllBills', {
        method: 'GET',
      });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      setrecords(response.text());
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

  const fetchRecordsById = async () => {
    
    try {
      // const response = await fetch('https://ec2-3-101-67-174.us-west-1.compute.amazonaws.com:3333/sean/getAllBills');
      const response = await fetch('http://localhost:3333/sean/getBillById', {
        method: 'GET',
      });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
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
      <br></br>
      <button onClick={clearRecords}>Clear records</button>
    </>
  )
};

export default Search;

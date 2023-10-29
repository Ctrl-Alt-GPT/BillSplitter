'use client';
import { useEffect, useState } from 'react';
import Record from './record.js';
import '../../styles/TileContainer.css';


const Search = () => {

  // const [records, setrecords] = useState('');
  const [records, setrecords] = useState([]);
  
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
      
      const data = await response.json();
      // setrecords(response.text());
      setrecords(data);
      console.log(JSON.stringify(records));
      
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
      <div className='container'>
        {records.length <= 0 ? (
          <div className="no-items">Add an item to get started.</div>
          ) : (
            records.map((item) => (
              <Record key={item._id} {...item} />
          ))
        )}
      </div>
      <br></br>
      <button onClick={clearRecords}>Clear records</button>
    </>
  );
};

export default Search;

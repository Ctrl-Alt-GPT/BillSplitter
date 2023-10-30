'use client';
import { useEffect, useState } from 'react';
import Record from './record.js';
import '../../styles/TileContainer.css';
import NewItemForm from '../../components/NewItem/NewItemForm.js';
// import '../../styles/Board.css';


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


  const fetchAllRecords = async () => {
    
    try { 
      const response = await fetch(
        'http://localhost:3333/sean/getAllBills'
        
        // 'http://localhost:3333/sean/getBillById/?\'id\'=\'653fd8f7c413cde2ffb42864\''

        /*'https://gpt-billsplitter.com:3333/sean/getAllBills'*/, {
          method: 'GET',
        });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      
      const data = await response.json();
      if (data.length <= 0) {
        alert("No records match the search query.")
      }
      // setrecords(response.text());
      setrecords(data);
      console.log(JSON.stringify(records));
      
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

  return (
    <>
      {/* <div className='board'> */}

        Records:
        <br></br>
        <input></input>
        <input></input>
        <br></br>
        <button onClick={fetchAllRecords}>Get Records</button>
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
      {/* </div> */}
    </>
  );
};

export default Search;

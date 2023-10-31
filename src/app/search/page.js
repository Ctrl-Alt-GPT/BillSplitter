'use client';
import { useEffect, useState } from 'react';
import Record from './record.js';
import '../../styles/TileContainer.css';
import { Button, InputAdornment, TextField, Grid } from '@mui/material';
import { nanoid } from 'nanoid';

const prodURL = true;

const Search = () => {

  const [records, setrecords] = useState([]);
  const [paramKey, setParamKey] = useState('');
  const [paramVal, setParamVal] = useState('');

  const handleParamKeyChange = (e) => {
    const val = e.target.value.toLowerCase();
    setParamKey(val);
  }
  
  const handleParamValChange = (e) => {
    const val = e.target.value.toLowerCase();
    setParamVal(val);
  }

  const clearRecords = async () => {

    var URL = 'http://localhost:3333/sean/clearAllBills';
    if (prodURL)
      URL = 'https://gpt-billsplitter.com:3333/sean/clearAllBills';  
    

    try {
      const response = await fetch( URL, {method: 'DELETE',});
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      setrecords('');
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

  // WIP
  const searchForRecords = async () => {

    var URL = 'http://localhost:3333/sean/searchForRecords';
    if (prodURL)
      URL = 'https://gpt-billsplitter.com:3333/sean/searchForRecords';
    
    if (paramKey != '' && paramVal != '') {
      URL += '/?lineItems.' + paramKey + "=" + paramVal;
    }
        
    try { 
      const response = await fetch(URL, {method: 'GET'});
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      if (data.length <= 0) {
        alert("No records match the search query.");
      }
      setrecords(data);      
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

  return (
    <>

      {/* Create a drop down with relevant categories instead of input field paramKey.*/}
    
      <br></br>
      <Grid container spacing={1}>
        <TextField
          required
          label="Category"
          onChange={handleParamKeyChange}
          value={paramKey}
          type="text"
          sx={{width: 300}}
          id="field1"
        />
        <TextField
          required
          label="Input"
          onChange={handleParamValChange}
          value={paramVal}
          type="text"
          sx={{width: 300}}
          id="field2"
        />
      </Grid>
      <br></br>
      <Button 
        type="submit" 
        variant="contained" 
        onClick={searchForRecords}>
        Search 
      </Button>
      <br></br>
      <br></br>
      <div className='container'>
        {records.map((item) => (<Record key={nanoid} {...item} />))}
      </div>
      <br></br>
      <Button 
        type="submit" 
        variant="contained" 
        onClick={clearRecords}>
        Clear records 
      </Button>
        
  </>
  );
};

export default Search;

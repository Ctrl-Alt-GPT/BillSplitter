'use client';
import { useState } from 'react';
import Record from './record.js';
import '../../styles/TileContainer.css';
import './list.js'
import { nanoid } from 'nanoid';
import { 
  Button, 
  TextField, 
  Grid, 
  Alert } from '@mui/material';
import NestedList from './list.js';

const prodURL = false;

const Search = () => {

  const [records, setrecords] = useState([]);
  const [paramKey, setParamKey] = useState('');
  const [paramVal, setParamVal] = useState('');
  const [showRecordWarning, setShowRecordWarning] = useState(false);

  const removeRecord = (removeMe) => {
    const revisedRecords = records.filter((record) => record._id !== removeMe);
    console.log(JSON.stringify(revisedRecords));
    setrecords(revisedRecords);
  }

  const handleParamKeyChange = (e) => {
    const val = e.target.value.toLowerCase();
    setParamKey(val);
  }

  const getParamKey = (category) => {
    setParamKey(category);
    // console.log(category);
  }
  
  const handleParamValChange = (e) => {
    // const val = e.target.value.toLowerCase();
    const val = e.target.value;
    setParamVal(val);
  }

  const clearParamVal = () => {
    setParamVal('');
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
    setShowRecordWarning(false);
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
      setrecords(data);
      if (data.length <= 0) {
        setShowRecordWarning(true);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

  return (
    <>
      <br></br>
      <Grid container spacing={1}>
        <NestedList getParamKey={getParamKey} clearParamVal={clearParamVal}/>
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
        {records.length > 0 ? (
          records.map((item) => (
            <Record 
              key={nanoid()} 
              {...item} 
              removeRecord={removeRecord}
            />
          ))) : null
        }
        {showRecordWarning == true ? 
          <Alert 
            severity="warning">No records match the search query.
          </Alert>: null}
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

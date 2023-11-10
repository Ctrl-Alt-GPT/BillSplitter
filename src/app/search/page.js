'use client';
import { useEffect, useState } from 'react';
import Record from './record.js';
import '../../styles/TileContainer.css';
import './list.js'
// import { nanoid } from 'nanoid';
import { 
  Button, 
  TextField, 
  Grid, 
  Alert } from '@mui/material';
import NestedList from './list.js';

const prodURL = true;

const Search = () => {

  const [records, setRecords] = useState([]);
  const [paramKey, setParamKey] = useState('');
  const [paramVal, setParamVal] = useState('');
  const [showRecordWarning, setShowRecordWarning] = useState(false);

  const removeRecord = (removeMe) => {
    const revisedRecords = records.filter((record) => record._id !== removeMe);
    // console.log(JSON.stringify(revisedRecords));
    setRecords(revisedRecords);
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
    setRecords('');
  }

  const deleteAllRecords = async () => {

    var URL = 'http://localhost:3333/sean/clearAllBills';
    if (prodURL)
      URL = 'https://gpt-billsplitter.com:3333/sean/clearAllBills';  
    
    try {
      const response = await fetch( URL, {method: 'DELETE',});
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      setRecords('');
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

      if (paramKey == '_id') {
        URL = 'http://localhost:3333/sean/' + paramVal;
        if (prodURL)
          URL = 'https://gpt-billsplitter.com:3333/sean/' + paramVal;
      } 
    }
        
    try { 
      const response = await fetch(URL, {method: 'GET'});
      if (!response.ok) {
        setRecords('');
        setShowRecordWarning(true);
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setRecords(data);
      if (data.length <= 0 || !response.ok) {
        // setRecords('');
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
      <Grid container spacing={1} justifyContent="left">
        <Grid item>
          <Button type="submit" 
            variant="contained" 
            onClick={searchForRecords}>
            Search
          </Button>
        </Grid>
        <Grid item>
          <Button          
            type="submit" 
            variant="contained" 
            onClick={clearRecords}>
            Clear
          </Button>
        </Grid>
      </Grid>
      <br></br>
      <br></br>
      <div className='container'>
        {records.length > 0 ? (
          records.map((item) => (
            <Record 
              key={item._id}
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
  </>
  );
};

export default Search;

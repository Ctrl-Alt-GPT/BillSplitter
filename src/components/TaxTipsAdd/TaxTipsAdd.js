'use client';
import '../../styles/TaxTipsAdd.css';
import { useState } from 'react';

const TaxTipsAddComponent = (props) => {
  
  const handleTaxChange = (e) => {
    props.getTaxVal(e.target.value);
  };

  const handleTipsChange = (e) => {
    props.getTipsVal(e.target.value);
  };

  return (
  <div className='tax-tips-add'>
    <div className='new-item__control'>
      <label>Tax</label>
      <input name='tax' onChange={handleTaxChange}></input><br></br>
      <label>Tip</label>
      <input  name='tips' onChange={handleTipsChange}></input><br></br>
    </div>
  </div>
  );
}

export default TaxTipsAddComponent;
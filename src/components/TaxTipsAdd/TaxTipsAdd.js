'use client';
import '../../styles/TaxTipsAdd.css';
import { useState } from 'react';

export default function TaxTipsAddComponent({sendToParent}) {
  
  const [taxAndTips, setTaxAndTips] = useState({
    tax: 0,
    tips: 0
  });

  const handleChange = (e) => {
    setTaxAndTips({ ...taxAndTips, [e.target.name]: e.target.value });
  };
  
  return (
  <div className='tax-tips-add'>
    <div className='new-item__control'>
      <label>Tax</label>
      <input name='tax' onChange={handleChange}></input><br></br>
      <label>Tip</label>
      <input  name='tips' onChange={handleChange}></input><br></br>
      <button type='submit' onClick={() => {
        sendToParent(taxAndTips);
      }}>Submit</button>
    </div>
  </div>
  );
}
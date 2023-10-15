'use client';
import '../../styles/TaxTipsAdd.css';
import { useState } from 'react';

// export default function TaxTipsAddComponent({sendToParent}) {
const TaxTipsAddComponent = (props) => {
  
  // const [taxAndTips, setTaxAndTips] = useState({
  //   tax: 0,
  //   tips: 0
  // });

  // const handleChange = (e) => {
  //   setTaxAndTips({ ...taxAndTips, [e.target.name]: e.target.value });
  // };

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
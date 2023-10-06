'use client';
import { useState } from 'react';

export default function TaxTipsAddComponent({childToParent}) {

  const [print, setPrint] = useState(false);

  const [data, setData] = useState({
    tax: 0,
    tips: 0
  });

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
    setPrint(false);
  };
  
  return (
  <div className='tax-tips-add-component'>
    <div className='value-inputs'>

      <label className='item-name'>Tax:</label>
      <input name='tax' onChange={handleChange}></input><br></br>
      <label className='item-name'>Tip:</label>
      <input  name='tips' onChange={handleChange}></input><br></br>
      <button onClick={() => {
        setPrint(true);
        childToParent(data);
      }}>Submit</button>
    </div>
  </div>
  );
}
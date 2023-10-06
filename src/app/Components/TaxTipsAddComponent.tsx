'use client';
import { useState } from 'react';
import './component.modules.css'

export default function TaxTipsAddComponent({childToParent} :{childToParent : any}) {

  const [print, setPrint] = useState(false);

  const [data, setData] = useState({
    tax: 0,
    tips: 0
  });

  const handleChange = (e : any) => {
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

      <div className='item-name'>
        {
          print?
            <div className='item-name'>
              Tax : {data.tax} <br></br>
              Tip : {data.tips}
            </div>
          :null
        }
      </div>        
    </div>
  </div>
  );
}
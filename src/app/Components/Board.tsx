'use client'
import './component.modules.css'
import Title from './Title';
import NewItemComponent from './NewItemComponent';
import TaxTipsAddComponent from './TaxTipsAddComponent';
import ItemsComponent from './ItemsComponent';
import { useState } from 'react';


export default function Board() {

  const [data, setData] = useState({
    tax: 0,
    tips: 0
  });

  const childToParent = (childData : any) => {
    setData(childData);
  }
  
  return (

    <div className='board'>
      <Title />
      <TaxTipsAddComponent childToParent={childToParent} />
      <NewItemComponent />
      <ItemsComponent />
      <div className='items-component'>      
        Tax : {data.tax}<br></br>
        Tips : {data.tips}
      </div>


    </div>);
}
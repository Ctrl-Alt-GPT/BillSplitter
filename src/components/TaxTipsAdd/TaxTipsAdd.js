'use client';
import '../../styles/TaxTipsAdd.css';
import { Button, InputAdornment, TextField, Grid } from '@mui/material';
import { NumericFormat } from 'react-number-format';

const TaxTipsAddComponent = (props) => {

  const inputValidation = (inputNumber) => {
    var regex = /^(\d+)?(\.\d{0,2})?$/;
    return regex.test(inputNumber)
  }
  
  const handleTaxChange = (e) => {
    if (inputValidation(e.target.value)) {
      props.getTaxVal(e.target.value);
    }
  };

  const handleTipsChange = (e) => {
    if (inputValidation(e.target.value)) {
      props.getTipsVal(e.target.value);
    }
  };

  return (
    <>
      <NumericFormat
        customInput={TextField}
        label="tax"
        onChange={handleTaxChange}
        value={props.tax}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">$</InputAdornment>
          ),
        }}
        allowNegative={false}
        decimalScale={2}
        fullWidth
      />
      <br></br>
      <br></br>
      <NumericFormat
        customInput={TextField}
        label="tips"
        onChange={handleTipsChange}
        value={props.tips}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">$</InputAdornment>
          ),
        }}
        allowNegative={false}
        decimalScale={2}
        fullWidth
      />
    </>

    // <form className='tax-tips-add'>
    //   <div className='new-item__control'>
    //     <label>Tax</label>
    //     <input 
    //       name='tax'
    //       type="text" 
    //       onChange={handleTaxChange}>
    //     </input><br></br>
    //     <label>Tip</label>
    //     <input 
    //       name='tips' 
    //       type="text" 
    //       onChange={handleTipsChange}>
    //     </input><br></br>
    //   </div>
    // </form>
  );
}

export default TaxTipsAddComponent;
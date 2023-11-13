'use client';
import '../../styles/TaxTipsAdd.css';
import { InputAdornment, TextField, Card, CardContent } from '@mui/material';
import { NumericFormat } from 'react-number-format';

const TaxTipsAddComponent = (props) => {
  const inputValidation = (inputNumber) => {
    var regex = /^(\d+)?(\.\d{0,2})?$/;
    return regex.test(inputNumber);
  };

  const handleTaxChange = (e) => {
    if (inputValidation(e.target.value)) {
      if (e.target.value == '') {
        props.getTaxVal(0);
      } else {
        let val = e.target.value;
        if (val.startsWith('0')) {
          val = val.slice(1);
        }
        props.getTaxVal(val);
      }
    }
  };

  const handleTipsChange = (e) => {
    if (inputValidation(e.target.value)) {
      if (e.target.value == '') {
        props.getTipsVal(0);
      } else {
        let val = e.target.value;
        if (val.startsWith('0')) {
          val = val.slice(1);
        }
        props.getTipsVal(val);
      }
    }
  };

  return (
    <Card sx={{ height: '100%' }}>
      <CardContent>
        <NumericFormat
          customInput={TextField}
          label="tax"
          onChange={handleTaxChange}
          value={props.tax}
          InputProps={{
            startAdornment: <InputAdornment position="start">$</InputAdornment>,
          }}
          allowNegative={false}
          decimalScale={2}
          fullWidth
        />
      </CardContent>
      <CardContent>
        <NumericFormat
          customInput={TextField}
          label="tips"
          onChange={handleTipsChange}
          value={props.tips}
          InputProps={{
            startAdornment: <InputAdornment position="start">$</InputAdornment>,
          }}
          allowNegative={false}
          decimalScale={2}
          fullWidth
        />
      </CardContent>
    </Card>
  );
};

export default TaxTipsAddComponent;

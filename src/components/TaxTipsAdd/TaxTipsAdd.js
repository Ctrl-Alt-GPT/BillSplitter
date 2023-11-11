'use client';
import '../../styles/TaxTipsAdd.css';
import {
  Button,
  InputAdornment,
  TextField,
  Grid,
  Card,
  CardContent,
} from '@mui/material';
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
        props.getTaxVal(e.target.value);
      }
    }
  };

  const handleTipsChange = (e) => {
    if (inputValidation(e.target.value)) {
      if (e.target.value == '') {
        props.getTipsVal(0);
      } else {
        props.getTipsVal(e.target.value);
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

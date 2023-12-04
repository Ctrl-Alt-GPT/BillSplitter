'use client';
import { useState } from 'react';
import '../../styles/NewItemForm.css';
import { Button, InputAdornment, TextField, Grid } from '@mui/material';
import { NumericFormat } from 'react-number-format';

const NewItemForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState('');
  const [enteredParty, setEnteredParty] = useState('');
  const [enteredAmount, setEnteredAmount] = useState(0);

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };

  const partyChangeHandler = (event) => {
    setEnteredParty(event.target.value);
  };

  const amountChangeHandler = (event) => {
    let val = event.target.value;
    if (val.startsWith('0')) {
      val = val.slice(1);
    }
    setEnteredAmount(Number(val));
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const itemData = {
      title: enteredTitle.toLowerCase(),
      party: enteredParty.toLowerCase(),
      // title: enteredTitle,
      // party: enteredParty,
      amount: enteredAmount,
    };

    props.onSaveItemData(itemData);
    setEnteredTitle('');
    setEnteredParty('');
    setEnteredAmount('');
  };

  return (
    <form onSubmit={submitHandler}>
      <Grid container spacing={1}>
        <Grid item md={4} sm={4} xs={12}>
          <TextField
            required
            label="item name"
            onChange={titleChangeHandler}
            value={enteredTitle}
            type="text"
            fullWidth
            id="field1"
          />
        </Grid>
        <Grid item md={5} sm={5} xs={12}>
          <TextField
            required
            label="parties"
            onChange={partyChangeHandler}
            value={enteredParty}
            type="text"
            helperText="members, separated by commas (,)"
            fullWidth
            id="field2"
          />
        </Grid>
        <Grid item md={3} sm={3} xs={12}>
          <NumericFormat
            customInput={TextField}
            required
            label="amount"
            onChange={amountChangeHandler}
            value={enteredAmount}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">$</InputAdornment>
              ),
            }}
            allowNegative={false}
            decimalScale={2}
            fullWidth
            id="field3"
          />
        </Grid>
        <Grid item md={12} sm={12} container justifyContent="flex-end">
          <Button type="submit" variant="contained">
            add item
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default NewItemForm;
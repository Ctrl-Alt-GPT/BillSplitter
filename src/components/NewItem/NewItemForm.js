'use client';
import { useState } from 'react';
import '../../styles/NewItemForm.css';
import {
  Button,
  Card,
  CardActions,
  CardContent,
  FormControl,
  InputAdornment,
  TextField,
  InputLabel,
  FilledInput,
  Grid,
} from '@mui/material';

const NewItemForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState('');
  const [enteredParty, setEnteredParty] = useState('');
  const [enteredAmount, setEnteredAmount] = useState('');

  // Maybe try a sequence ID.
  const [sequenceID, setSequenceID] = useState(0);

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };

  const partyChangeHandler = (event) => {
    setEnteredParty(event.target.value);
  };

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    // Increment the sequence ID.
    var nextNum = sequenceID;
    setSequenceID(++nextNum);

    const itemData = {
      title: enteredTitle,
      party: enteredParty,
      amount: enteredAmount,
      sequenceNumber: sequenceID,
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
          />
        </Grid>
        <Grid item md={3} sm={3} xs={12}>
          <TextField
            required
            label="amount"
            onChange={amountChangeHandler}
            value={enteredAmount}
            type="text"
            inputProps={{
              inputMode: 'numberic',
              pattern: '[0-9]?[0-9]?(.[0-9][0-9]?)?',
            }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">$</InputAdornment>
              ),
            }}
            fullWidth
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

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
    <Card>
      <form onSubmit={submitHandler}>
        <CardContent>
          <TextField
            required
            label="Title"
            onChange={titleChangeHandler}
            value={enteredTitle}
            type="text"
            variant="standard"
          />
          <TextField
            required
            label="Party"
            onChange={partyChangeHandler}
            value={enteredParty}
            type="text"
            variant="standard"
            helperText="members, separated by commas (,)"
          />
          <TextField
            required
            label="Amount"
            onChange={amountChangeHandler}
            value={enteredAmount}
            type="text"
            variant="standard"
            inputProps={{
              inputMode: 'numberic',
              pattern: '[0-9]?[0-9]?(.[0-9][0-9]?)?',
            }}
            helperText="in dollars with two decimal places"
          />
        </CardContent>
        <CardActions>
          <Button type="submit" variant="contained">
            add item
          </Button>
        </CardActions>
      </form>
    </Card>
  );
};

export default NewItemForm;

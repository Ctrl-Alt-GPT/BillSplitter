'use client';
import { useState } from 'react';

import '../../styles/NewItemForm.css';

const NewItemForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState('');
  const [enteredParty, setEnteredParty] = useState('');
  const [enteredAmount, setEnteredAmount] = useState('');

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

    const itemData = {
      title: enteredTitle,
      party: enteredParty,
      amount: enteredAmount,
    };

    props.onSaveItemData(itemData);
    setEnteredTitle('');
    setEnteredParty('');
    setEnteredAmount('');
  };

  return (
    // TODO: Party Dropdown Menu
    <form onSubmit={submitHandler}>
      <div className="new-item__controls">
        <div className="new-item__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-item__control">
          <label>Party</label>
          <input
            type="text"
            value={enteredParty}
            onChange={partyChangeHandler}
          />
        </div>
        <div className="new-item__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmount}
            onChange={amountChangeHandler}
          />
        </div>
      </div>
      <div className="new-item__actions">
        <button type="submit">add item</button>
      </div>
    </form>
  );
};

export default NewItemForm;

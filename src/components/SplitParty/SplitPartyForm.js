import { useState } from 'react';
import '../../styles/NewItemForm.css';
import '../../styles/NewItem.css';

const SplitPartyForm = (props) => {
  const [enteredParty, setEnteredParty] = useState('');

  const partyChangeHandler = (event) => {
    setEnteredParty(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    props.onPartyAmountSubmit(enteredParty);
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-item__controls">
        <div className="new-item__control">
          <input type="number" min="2" step="1" onChange={partyChangeHandler} />
        </div>
        <button className="blue-button" type="submit">
          calculate
        </button>
      </div>
    </form>
  );
};

export default SplitPartyForm;

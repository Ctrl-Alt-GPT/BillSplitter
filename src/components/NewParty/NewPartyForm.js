import { useState } from 'react';

const NewPartyForm = () => {
  const [enteredName, setEnteredName] = useState('');

  return (
    // TODO: NewPartyForm
    <form>
      <label>Enter a name:</label>
      <input type="text" />
      <button type="submit">add party</button>
    </form>
  );
};

export default NewPartyForm;

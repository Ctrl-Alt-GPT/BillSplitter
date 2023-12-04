import '../../styles/NewItemForm.css';
import '../../styles/NewItem.css';
import { NumericFormat } from 'react-number-format';
import { TextField } from '@mui/material';

const SplitPartyForm = ({ onPartyAmountSubmit }) => {
  const partyChangeHandler = (event) => {
    onPartyAmountSubmit(event.target.value);
  };

  return (
    <NumericFormat
      customInput={TextField}
      label="number of people in the party*"
      onChange={partyChangeHandler}
      allowNegative={false}
      decimalScale={0}
      fullWidth
    />
  );
};

export default SplitPartyForm;
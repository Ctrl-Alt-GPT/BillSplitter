import React, { useState } from 'react';
import '../../styles/TaxTipsAdd.css';
import SplitPartyForm from './SplitPartyForm';

const SplitParty = (props) => {
  const [calculatedSplit, setCalculatedSplit] = useState(0);

  const partyAmountSubmitHandler = (amount) => {
    setCalculatedSplit(props.total / amount);
  };

  return (
    <React.Fragment>
      <div className="tax-tips-add">
        Calculated split: {calculatedSplit}
        <SplitPartyForm onPartyAmountSubmit={partyAmountSubmitHandler} />
      </div>
    </React.Fragment>
  );
};

export default SplitParty;

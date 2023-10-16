import React, { useState } from 'react';
import '../../styles/SplitParty.css';
import SplitPartyForm from './SplitPartyForm';

const SplitParty = (props) => {
  const [calculatedSplit, setCalculatedSplit] = useState(0);

  const partyAmountSubmitHandler = (amount) => {
    setCalculatedSplit(props.total / amount);
  };

  return (
    <React.Fragment>
      <div className="backdrop">
        {calculatedSplit === 0 ? (
          <div className="content">
            Enter the amount of people in the party:
          </div>
        ) : (
          <div className="content">Calculated split: ${calculatedSplit}</div>
        )}
        <SplitPartyForm onPartyAmountSubmit={partyAmountSubmitHandler} />
      </div>
    </React.Fragment>
  );
};

export default SplitParty;

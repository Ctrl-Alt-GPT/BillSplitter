import React, { useState } from 'react';
import { Card, CardContent } from '@mui/material';
import SplitPartyForm from './SplitPartyForm';

const SplitParty = (props) => {
  const [calculatedSplit, setCalculatedSplit] = useState(0);

  const partyAmountSubmitHandler = (amount) => {
    let splitAmount = (Number(props.total) / amount).toFixed(2); // Format to two decimal places
    if (amount == '' || amount == 0) {
      splitAmount = 0;
    }
    setCalculatedSplit(splitAmount);
  };

  return (
    <Card sx={{ height: '100%', textAlign: 'center' }}>
      {calculatedSplit === 0 ? (
        <CardContent>Split the bill evenly:</CardContent>
      ) : (
        <CardContent>Calculated split: ${calculatedSplit}</CardContent>
      )}
      <CardContent>
        <SplitPartyForm onPartyAmountSubmit={partyAmountSubmitHandler} />
      </CardContent>
    </Card>
  );
};

export default SplitParty;
import React, { useState } from 'react';
import { Card, CardContent } from '@mui/material';
import SplitPartyForm from './SplitPartyForm';

const SplitParty = (props) => {
  const [calculatedSplit, setCalculatedSplit] = useState(0);

  const partyAmountSubmitHandler = (amount) => {
    const splitAmount = (props.total / amount).toFixed(2); // Format to two decimal places
    setCalculatedSplit(splitAmount);
  };

  return (
    <Card sx={{ height: '100%' }}>
      {calculatedSplit === 0 ? (
        <CardContent>Enter the amount of people in the party:</CardContent>
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

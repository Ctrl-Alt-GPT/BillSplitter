import '../../styles/DisplayTotal.css';
import GrandTotal from './GrandTotal';
import Subtotal from './Subtotal';
import { Card, CardContent } from '@mui/material';

const DisplayTotal = (props) => {
  const extractedItemAmounts = props.datas.map((data) => data.amount);

  const calculateGrandTotalHandler = (grandTotal) => {
    props.calculatedGrandTotal(grandTotal);
  };

  return (
    <Card>
      <CardContent>
        <Subtotal itemAmounts={extractedItemAmounts} />
        <p className="display-items">Total tax: ${props.taxData}</p>
        <p className="display-items">Total tips: ${props.tipsData}</p>
        <GrandTotal
          itemAmounts={extractedItemAmounts}
          totalTax={props.taxData}
          totalTips={props.tipsData}
          onCalculateGrandTotal={calculateGrandTotalHandler}
        />
      </CardContent>
    </Card>
  );
};

export default DisplayTotal;

import '../../styles/DisplayTotal.css';
import Card from '../UI/Card';
import GrandTotal from './GrandTotal';
import Subtotal from './Subtotal';

const DisplayTotal = (props) => {
  const extractedItemAmounts = props.datas.map((data) => data.amount);

  return (
    <Card className="display-total">
      <Subtotal itemAmounts={extractedItemAmounts} />
      {/* TODO: total tax and total tips */}
      <p className="display-items">Total tax: </p>
      <p className="display-items">Total tips:</p>
      <GrandTotal
        itemAmounts={extractedItemAmounts}
        totalTax={0}
        totalTips={0}
      />
    </Card>
  );
};

export default DisplayTotal;

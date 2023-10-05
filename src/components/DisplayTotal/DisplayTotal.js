import '../../styles/DisplayTotal.css';
import Card from '../UI/Card';
import Subtotal from './Subtotal';

const DisplayTotal = (props) => {
  const extractedItemAmounts = props.datas.map((data) => data.amount);

  return (
    <Card className="display-total">
      <Subtotal itemAmounts={extractedItemAmounts} />
      <p>Total tax: </p>
      <p>Total tips:</p>
      <p>Grand total: </p>
    </Card>
  );
};

export default DisplayTotal;

import '../../styles/DisplayTotal.css';
import Card from '../UI/Card';

const DisplayTotal = () => {
  return (
    <Card className="display-total">
      <p>Subtotal: </p>
      <p>Total tax: </p>
      <p>Total tips:</p>
      <p>Grand total: </p>
    </Card>
  );
};

export default DisplayTotal;

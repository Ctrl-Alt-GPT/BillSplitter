import Card from '../UI/Card';
import './Item.css';

const Item = ({
  title,
  party,
  amount,
}: {
  title: string;
  party: string;
  amount: number;
}) => {
  return (
    <Card className="item">
      <h2>{title}</h2>
      <div className="item__party">
        Party: <br />
        {party}
      </div>
      <div className="item__amount">${amount}</div>
    </Card>
  );
};

export default Item;

import Card from '../UI/Card';
import '../../styles/Item.css';

const Item = ({ title, party, amount }) => {
  return (
    <Card className="item">
        Item: <br />
      <h2>{title}</h2>
      <div className="item__party">
        Party: <br />
        {party}
      </div>
      <div className="item__amount">
        Amount: <br />
        ${amount}</div>
    </Card>
  );
};

export default Item;

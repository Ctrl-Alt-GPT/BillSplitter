import Card from '../UI/Card';
import Item from './Item';
import '../../styles/Items.css';

const Items = (props) => {
  return (
    <Card className="items">
      {props.datas.map((item) => (
        <Item
          key={item.id}
          title={item.title}
          party={item.party}
          amount={item.amount}
        />
      ))}
    </Card>
  );
};

export default Items;

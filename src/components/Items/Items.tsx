import Card from '../UI/Card';
import Item from './Item';
import '../../styles/Items.css';

const Items = () => {
  return (
    <Card className="items">
      <Item title="Hamburger" party="Andrew, Sean, Pablo" amount={7.23} />
      <Item title="Sushi" party="Andrew, Sean" amount={8.33} />
      <Item title="Fried rice" party="Pablo" amount={4.22} />
    </Card>
  );
};

export default Items;

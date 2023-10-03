import Card from '../UI/Card';
import './NewItem.css';
import NewItemForm from './NewItemForm';

const NewItem = () => {
  return (
    <Card className="new-item">
      <NewItemForm />
    </Card>
  );
};

export default NewItem;

'use client';
import Card from '../UI/Card';
import '../../styles/NewItem.css';
import NewItemForm from './NewItemForm';
import { nanoid } from 'nanoid';

const NewItem = (props) => {
  const saveItemDataHandler = (enteredItemData) => {
    const itemData = {
      ...enteredItemData,
      id: nanoid(),
    };
    props.onSaveItemData(itemData);
  };

  return (
    <Card className="new-item">
      <NewItemForm onSaveItemData={saveItemDataHandler} />
    </Card>
  );
};

export default NewItem;

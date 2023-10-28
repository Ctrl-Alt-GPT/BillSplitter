'use client';
import { Card, CardContent, CardHeader } from '@mui/material';
import '../../styles/NewItem.css';
import NewItemForm from './NewItemForm';
import { nanoid } from 'nanoid';
import { Title } from '@mui/icons-material';

const NewItem = (props) => {
  const saveItemDataHandler = (enteredItemData) => {
    const itemData = {
      ...enteredItemData,
      id: nanoid(),
    };
    props.onAddItems(itemData);
  };

  return (
    <Card>
      <CardContent>
        <NewItemForm onSaveItemData={saveItemDataHandler} />
      </CardContent>
    </Card>
  );
};

export default NewItem;

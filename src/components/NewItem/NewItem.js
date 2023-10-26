'use client';
import { Card, CardContent } from '@mui/material';
import '../../styles/NewItem.css';
import NewItemForm from './NewItemForm';
import { nanoid } from 'nanoid';

const NewItem = (props) => {
  const saveItemDataHandler = (enteredItemData) => {
    const itemData = {
      ...enteredItemData,
      id: nanoid(),
    };
    props.onAddItems(itemData);
  };

  return <NewItemForm onSaveItemData={saveItemDataHandler} />;
};

export default NewItem;

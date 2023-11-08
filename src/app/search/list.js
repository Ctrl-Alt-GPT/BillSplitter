import { useState } from 'react';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import { ClearRounded, GroupOutlined, RestaurantRounded, NumbersRounded } from '@mui/icons-material';

export default function NestedList(props) {
  const [open, setOpen] = useState(false);
  const [primaryFieldText, setPrimaryFieldText] = useState('Search Field')

  const handleClick = () => {
    setOpen(!open);
  };

  const categoryClick = (e, fieldText) => {
    props.getParamKey(e);
    setOpen(false);
    setPrimaryFieldText(fieldText);
    // console.log(e);
  }

  return (
    <List
      sx={{ width: '100%', maxWidth: 300, }}>
      <ListItemButton onClick={handleClick}>
        <ListItemText primary={primaryFieldText} />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>

      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 2 }} onClick={() => {categoryClick('party', "People"); props.clearParamVal()}}>
            <ListItemIcon>
              <GroupOutlined />
            </ListItemIcon>
            <ListItemText primary="People" />
          </ListItemButton>
          <ListItemButton sx={{ pl: 2 }} onClick={ () => {categoryClick('title', "Foods"); props.clearParamVal()}} >
            <ListItemIcon>
              <RestaurantRounded />
            </ListItemIcon>
            <ListItemText primary="Foods" />
          </ListItemButton>
          <ListItemButton sx={{ pl: 2 }} onClick={ () => {categoryClick('_id', "ID"); props.clearParamVal()}} >
            <ListItemIcon>
              <NumbersRounded />
            </ListItemIcon>
            <ListItemText primary="ID" />
          </ListItemButton>
          <ListItemButton sx={{ pl: 2 }} onClick={() => {categoryClick('', 'Search Field'); props.clearParamVal()}} >
            <ListItemIcon>
              <ClearRounded />
            </ListItemIcon>
            <ListItemText primary="Clear" />
          </ListItemButton>
        </List>
      </Collapse>
    </List>
  );
}
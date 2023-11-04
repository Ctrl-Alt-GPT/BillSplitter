'use client';
import '../../styles/Item.css';
import '../../styles/Remove-Button.css';
import { useState } from 'react';
import {
  Card,
  ClickAwayListener,
  Divider,
  IconButton,
  Tooltip,
} from '@mui/material';
import { Delete, Info } from '@mui/icons-material';

const Item = (props) => {
  const [openTooltip, setOpenTooltip] = useState(false);
  const [myId, setIdx] = useState(props.id);

  const removeThisItem = () => {
    props.removeItem(myId);
  };

  const tooltipOpenHandler = () => {
    setOpenTooltip(true);
  };

  const tooltipCloseHandler = () => {
    setOpenTooltip(false);
  };

  return (
    <Card className="item">
      <h2>{props.title}</h2>

      <div className="item__amount">${props.amount}</div>
      <Divider orientation="vertical" flexItem sx={{ marginX: 1 }} />

      <ClickAwayListener onClickAway={tooltipCloseHandler}>
        <Tooltip
          PopperProps={{ disablePortal: true }}
          onClose={tooltipCloseHandler}
          open={openTooltip}
          disableFocusListener
          disableHoverListener
          disableTouchListener
          title={props.party}
        >
          <IconButton
            aria-label="Info"
            size="small"
            onClick={tooltipOpenHandler}
          >
            <Info fontSize="inherit" />
          </IconButton>
        </Tooltip>
      </ClickAwayListener>

      <Tooltip title="Delete">
        <IconButton aria-label="Delete" size="small" onClick={removeThisItem}>
          <Delete fontSize="inherit" />
        </IconButton>
      </Tooltip>
    </Card>
  );
};

export default Item;

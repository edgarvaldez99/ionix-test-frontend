import React from 'react';
import { ListItemButton } from '@mui/material';
import { Link } from 'react-router-dom';

export default function ListItemLinkButton(props: any) {
  return (
    <ListItemButton component={Link} {...props}>
      {props.children}
    </ListItemButton>
  );
}

import React from 'react';
import { ListItem, ListItemIcon, ListItemText } from '@mui/material';
import ListItemLinkButton from '../mui/ListItemLinkButton';

type MenuItemProps = {
  to: string;
  icon: any;
  primary: string;
  onClick: () => void;
};

export default function MenuItem({
  to,
  primary,
  icon,
  onClick,
}: MenuItemProps) {
  return (
    <ListItem disablePadding>
      <ListItemLinkButton to={to} onClick={onClick}>
        <ListItemIcon>{icon}</ListItemIcon>
        <ListItemText primary={primary} />
      </ListItemLinkButton>
    </ListItem>
  );
}

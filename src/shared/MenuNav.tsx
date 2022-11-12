import {
  Mail as MailIcon
} from '@mui/icons-material';
import { Divider, List, Toolbar } from '@mui/material';
import { MenuToggleProps } from './menu';
import MenuItem from './MenuItem';

export default function MenuNav(props: MenuToggleProps) {
  return (
    <>
      <Toolbar />
      <Divider />
      <List>
        <MenuItem
          to="users"
          primary="User"
          icon={<MailIcon />}
          onClick={props.handleMenuToggle}
        />
      </List>
    </>
  );
}

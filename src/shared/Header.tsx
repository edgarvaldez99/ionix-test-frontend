import MenuIcon from '@mui/icons-material/Menu';
import { AppBar, IconButton, Toolbar, Typography } from '@mui/material';
import LinkButton from '../mui/LinkButton';
import UserAvatar from './Avatar';
import { MenuToggleProps } from './menu';

export default function Header(props: MenuToggleProps) {
  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
          onClick={props.handleMenuToggle}
        >
          <MenuIcon />
        </IconButton>
        <LinkButton to="/" sx={{ flexGrow: 1 }}>
          <Typography variant="h6" color="white" >
            IONIX
          </Typography>
        </LinkButton>
        <UserAvatar />
      </Toolbar>
    </AppBar>
  );
}

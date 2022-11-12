import React from 'react';
import { Link } from 'react-router-dom';
import { IconButton } from '@mui/material';

export default function LinkButton(props: any) {
  return (
    <IconButton component={Link} {...props}>
      {props.children}
    </IconButton>
  );
}

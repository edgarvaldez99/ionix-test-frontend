import React from 'react';
import { Alert } from '@mui/material';

export default function AlertError(props: any) {
  return <Alert severity="error">{props.children}</Alert>;
}

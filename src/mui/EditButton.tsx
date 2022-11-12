import React from 'react';
import { Edit as EditIcon } from '@mui/icons-material';
import LinkButton from './LinkButton';

export default function EditButton(props: any) {
  return (
    <LinkButton color="warning" {...props}>
      <EditIcon />
    </LinkButton>
  );
}

import React from 'react';
import { Add as CreateIcon } from '@mui/icons-material';
import LinkButton from './LinkButton';

export default function CreateButton(props: any) {
  return (
    <LinkButton color="success" {...props}>
      <CreateIcon />
    </LinkButton>
  );
}

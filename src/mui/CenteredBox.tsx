import React from 'react';
import Box from '@mui/material/Box';

export default function CenteredBox(props: any) {
  return (
    <Box
      sx={{ width: '100%' }}
      display="flex"
      flexDirection="column"
      alignItems="center"
      {...props}
    >
      {props.children}
    </Box>
  );
}

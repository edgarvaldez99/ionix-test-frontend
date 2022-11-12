import { Grid } from '@mui/material';

export default function CenteredGrid(props: any) {
  return (
    <Grid
      sx={{ width: '100%', height: '100vh' }}
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      {...props}
    >
      {props.children}
    </Grid>
  );
}

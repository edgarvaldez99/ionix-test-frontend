import { Typography } from '@mui/material';
import UserModal from '../components/UserModal';
import TodoTable from '../components/UserTable';

export default function UserList() {
  return (
    <>
      <Typography variant='h5' fontWeight='bold' align='center' color='primary'>Users List</Typography>
      <UserModal/>
      <TodoTable />
    </>
  );
}

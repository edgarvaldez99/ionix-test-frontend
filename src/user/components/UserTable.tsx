import React from 'react';
import { CircularProgress } from '@mui/material';
import AlertError from '../../mui/AlertError';
import Table from '../../mui/Table';
import useUserListState from '../hooks/user-list';
import TableContainer from '../../shared/TableContainer';
import columns from './UserTable.headers';

export default function UserTable() {
  const { loading, data, error } = useUserListState();
  return (
    <TableContainer>
      {loading && <CircularProgress />}
      {data.length > 0 && <Table rows={data} columns={columns} />}
      {error && <AlertError>The users list couldn't be loaded</AlertError>}
    </TableContainer>
  );
}

import React from 'react';
import { DataGrid, DataGridProps } from '@mui/x-data-grid';
import { PAGE_GAP } from '../utils/constants';

export default function Table(props: DataGridProps) {
  const height = window.innerHeight - PAGE_GAP;
  return (
    <div style={{ height, width: '100%' }}>
      <DataGrid {...props} disableSelectionOnClick />
    </div>
  );
}

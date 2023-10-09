import React from 'react';
import { TablePagination } from '@mui/material';

// UserPagination component
export default function UserPagination({ count, rowsPerPage, page, onPageChange, onRowsPerPageChange }) {
  return (
    <TablePagination
      rowsPerPageOptions={[5, 10, 25]}
      component="div"
      count={count}
      rowsPerPage={rowsPerPage}
      page={page}
      onPageChange={onPageChange}
      onRowsPerPageChange={onRowsPerPageChange}
    />
  );
}

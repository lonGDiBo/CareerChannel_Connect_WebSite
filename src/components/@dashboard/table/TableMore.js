// @mui
import { TableCell, IconButton, styled } from '@mui/material';
import { useState } from 'react';

// components
import Iconify from '../../iconify';

export default function TableMore() {
  const CustomTableCell = styled(TableCell)({
    display: 'flex',
    alignItems: 'center',
  });
  const [open, setOpen] = useState(null);

  const handleOpenMenu = (event) => {
    alert("dsdsd")
  };

  const handleCloseMenu = () => {
    setOpen(null);
  };

  return (
    <CustomTableCell align="right" >
      <IconButton size="medium" >
        <Iconify icon={'eva:trash-2-outline'} sx={{ color: 'error.main' }}  />
      </IconButton>

      <IconButton color="inherit" >
        <Iconify icon={'eva:list-fill'} />
      </IconButton>
    </CustomTableCell>
  );
}

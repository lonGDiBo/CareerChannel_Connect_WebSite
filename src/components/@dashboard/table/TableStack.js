// @mui
import { Stack, Button, Typography } from '@mui/material';
// components
import Iconify from '../../iconify';

export default function TableStack({ nameStack, nameButtonStack }) {
  return (
    <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
      <Typography variant="h4" gutterBottom>
        {nameStack}
      </Typography>
      <Button variant="contained" startIcon={<Iconify icon="eva:plus-fill" />}>
        {nameButtonStack}
      </Button>
    </Stack>
  );
}

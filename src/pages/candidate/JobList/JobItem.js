import PropTypes from 'prop-types';
import * as React from 'react';
import { Typography, Paper, Box, Divider, Chip } from '@mui/material';
import { Apartment, AttachMoney, Groups, Stars } from '@mui/icons-material';

function JobItem({ elevation = 3 }) {
  return (
    <Paper elevation={elevation} sx={{ textAlign: 'left ', padding: '16px' }}>
      <Typography sx={{ marginBottom: '16px' }} variant="body2" component="h6">
        Đăng 3 ngày trước
      </Typography>
      <Typography sx={{ marginBottom: '16px', fontWeight: 600 }} variant="h6">
        ReactJS Developer
      </Typography>
      <Box marginBottom="16px" display="flex" alignItems="center">
        <AttachMoney fontSize="small" color="success" sx={{ marginRight: '6px' }} />
        <Typography variant="body1" component="h1" fontWeight="600" color="#2e7d32">
          Lên tới $10.000
        </Typography>
      </Box>
      <Box marginBottom="16px" display="flex" alignItems="center">
        <Groups fontSize="small" color="success" sx={{ marginRight: '6px' }} />
        <Typography variant="body2" component="h6">
          3 người
        </Typography>
      </Box>

      <Divider variant="middle" sx={{ marginBottom: '16px' }} />

      <Box marginBottom="16px" display="flex" alignItems="center">
        <Stars fontSize="small" color="success" sx={{ marginRight: '6px' }} />
        <Typography variant="body2" component="h6">
          Senior
        </Typography>
      </Box>
      <Box marginBottom="16px" display="flex" alignItems="center">
        <Apartment fontSize="small" color="success" sx={{ marginRight: '6px' }} />
        <Typography variant="body2" component="h6">
          Ftown1
        </Typography>
      </Box>

      <Box marginTop="12px" display="flex" alignItems="center" justifyContent="space-between">
        <Chip label="Javascript" color="success" sx={{ marginRight: '6px' }} />
        <Chip label="Javascript" color="success" sx={{ marginRight: '6px' }} />
        <Chip label="Javascript" color="success" sx={{ marginRight: '6px' }} />
      </Box>
    </Paper>
  );
}

JobItem.propTypes = {
  elevation: PropTypes.number,
};

export default JobItem;

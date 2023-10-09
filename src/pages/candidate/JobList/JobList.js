import * as React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import JobItem from './JobItem';

// const darkTheme = createTheme({ palette: { mode: 'dark' } });
const lightTheme = createTheme({ palette: { mode: 'light' } });

function JobList() {
  return (
    <ThemeProvider theme={lightTheme}>
      <Box>
        <Grid container spacing={2}>
          {[0, 1, 2, 3, 4, 6, 8, 12, 16, 24].map((elevation, index) => (
            <Grid item xs={6} key={index}>
              <JobItem key={elevation} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </ThemeProvider>
  );
}

export default JobList;

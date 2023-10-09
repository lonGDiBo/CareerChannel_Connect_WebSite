import { useState } from 'react';
import { styled } from '@mui/material/styles';
import {
  Grid,
  Box,
  Paper,
  Typography,
  InputAdornment,
  TextField,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  Button,
} from '@mui/material';
import { Search } from '@mui/icons-material';
import { JobList } from './JobList';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

function FindJob() {
  const [level, setLevel] = useState('');
  const [salary, setSalary] = useState('');
  const [workModel, setWorkModel] = useState('');

  const handleChangeLevel = (event) => {
    setLevel(event.target.value);
  };
  const handleChangeSalary = (event) => {
    setSalary(event.target.value);
  };
  const handleChangeWorkModel = (event) => {
    setWorkModel(event.target.value);
  };

  return (
    <Box sx={{ backgroundColor: '#fff' }}>
      <Grid container spacing={2}>
        {/* Filter */}
        <Grid item xs={4}>
          <Item>
            <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
              <TextField
                label="Search"
                variant="outlined"
                placeholder="Tìm kiếm từ khóa"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Search />
                    </InputAdornment>
                  ),
                }}
                fullWidth
              />
            </Box>
            <div className="filters">
              <div className="filter">
                <Typography
                  variant="p"
                  component="h3"
                  textAlign="left"
                  style={{ marginTop: '20px', marginBottom: '6px' }}
                >
                  Cấp bậc
                </Typography>
                <FormControl fullWidth>
                  <InputLabel id="level-label">Cấp bậc</InputLabel>
                  <Select labelId="level-label" value={level} label="level" onChange={handleChangeLevel}>
                    <MenuItem value={1}>Intern</MenuItem>
                    <MenuItem value={2}>Fresher</MenuItem>
                    <MenuItem value={3}>Junior</MenuItem>
                    <MenuItem value={4}>Senior</MenuItem>
                  </Select>
                </FormControl>
              </div>

              <div className="filter">
                <Typography
                  variant="p"
                  component="h3"
                  textAlign="left"
                  style={{ marginTop: '20px', marginBottom: '6px' }}
                >
                  Mức lương
                </Typography>
                <FormControl fullWidth>
                  <InputLabel id="level-label">Mức lương</InputLabel>
                  <Select labelId="level-label" value={salary} label="salary" onChange={handleChangeSalary}>
                    <MenuItem value={1}>$0 - $500</MenuItem>
                    <MenuItem value={2}>$500 - $1000</MenuItem>
                    <MenuItem value={3}>$1000 - $2000</MenuItem>
                    <MenuItem value={4}>$2000 - $5000</MenuItem>
                  </Select>
                </FormControl>
              </div>

              <div className="filter">
                <Typography
                  variant="p"
                  component="h3"
                  textAlign="left"
                  style={{ marginTop: '20px', marginBottom: '6px' }}
                >
                  Hình Thức làm việc
                </Typography>
                <FormControl fullWidth>
                  <InputLabel id="level-label">Hình Thức làm việc</InputLabel>
                  <Select labelId="level-label" value={workModel} label="work-model" onChange={handleChangeWorkModel}>
                    <MenuItem value={1}>Trực tiếp</MenuItem>
                    <MenuItem value={2}>Từ xa</MenuItem>
                    <MenuItem value={3}>Kết hợp</MenuItem>
                  </Select>
                </FormControl>
              </div>
            </div>
            <Button variant="contained" size="large" sx={{ marginTop: '24px' }}>
              Áp dụng
            </Button>
          </Item>
        </Grid>

        {/* Job Results */}
        <Grid item xs={8}>
          <Item>
            <JobList />
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
}

export default FindJob;

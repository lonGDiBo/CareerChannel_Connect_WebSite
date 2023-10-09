import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useNavigate, Link } from 'react-router-dom';

// @mui
import { Grid, Button, Container, Stack, Typography, Box, TextField, InputAdornment, IconButton, Checkbox, FormControl, styled } from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

import palette from '../../../theme/palette';
// components
import Iconify from '../../../components/iconify';
// mock
// ----------------------------------------------------------------------

// ----------------------------------------------------------------------

export default function ManageAccountAdd() {
  const InputBox=styled(TextField)({
    width: '100%'
  });
  const SelectBox=styled(Select)({
    width: '100%'
  });
  const ButtonAdd=styled(Button)({
    margin: '10px',
    textAlign: 'center',
    width: '150px',
    height: '50px',
    backgroundColor: `${palette.maincolor.primary}`,
    color: 'white'
  });
  const ButtonCancel=styled(Button)({
    margin: '10px',
    textAlign: 'center',
    width: '150px',
    height: '50px',
    backgroundColor: `${palette.maincolor.dark}`,
    color: 'white'
  });
  const GroupButton=styled(Container)({
    textAlign: 'center',
    marginTop: '10px'
  });
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [age, setAge] = useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  const handleCancelClick = () => {
    navigate('/dashboard/accounts', { replace: true });
  };
  return (
    <>
      <Helmet>
        <title> Dashboard: ManageAccount | Detail </title>
      </Helmet>

      <Container>
      <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
      <Typography variant="h4" gutterBottom>
        <Link to="/dashboard/accounts" style={{ textDecoration: 'none', color: 'black' }}>
            Quản lý tài khoản
        </Link>
          <ArrowForwardIosIcon>arrow</ArrowForwardIosIcon>
            Thêm tài khoản
      </Typography> 
      </Stack>
      
      <FormControl>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 10, sm: 10, md: 10 }}>
          <Grid item xs={6}>
              <div>Username</div>
              <div>
                <InputBox type="text"/>
              </div>
          </Grid>
          <Grid item xs={6}>
          <div>Họ tên</div>
              <div>
              <InputBox type="text"/>
          </div>
          </Grid>
          <Grid item xs={6}>
            <div>Email</div>
              <div>
              <InputBox type="text"/>
            </div>
          </Grid>
          <Grid item xs={6}>
            <div>Phân quyền</div>
              <div>
              <SelectBox className='manage'
                onChange={handleChange}
              >
                <MenuItem value={10}>Admin</MenuItem>
                <MenuItem value={20}>RECcer</MenuItem>
                <MenuItem value={30}>Người phỏng vấn</MenuItem>
              </SelectBox>
            </div>
          </Grid>
          <Grid item xs={6}>
            <div>Mật khẩu</div>
              <div>
                <InputBox 
                  className='manage' 
                  name="password"
                  label="Password"
                  type={showPassword ? 'text' : 'password'}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton onClick={() => setShowPassword(!showPassword)} edge="end">
                          <Iconify icon={showPassword ? 'eva:eye-fill' : 'eva:eye-off-fill'} />
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
            </div>
          </Grid>
          <Grid item xs={6}>
            <div>Nhập lại mật khẩu</div>
              <div>
                <InputBox 
                className='manage' 
                name="password"
                label="Password"
                type={showPassword ? 'text' : 'password'}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton onClick={() => setShowPassword(!showPassword)} edge="end">
                        <Iconify icon={showPassword ? 'eva:eye-fill' : 'eva:eye-off-fill'} />
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
                />
            </div>
          </Grid>
        </Grid>
      </FormControl>
     
      <GroupButton>
          <ButtonCancel onClick={handleCancelClick} >
            Hủy
          </ButtonCancel>
          <ButtonAdd  >
            Tạo
          </ButtonAdd>
      </GroupButton>
      
      </Container>
    </>
  );
}

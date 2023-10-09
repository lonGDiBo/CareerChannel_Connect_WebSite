import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

// @mui
import { Stack, IconButton, InputAdornment, TextField } from '@mui/material';
import { LoadingButton } from '@mui/lab';
// components
import Iconify from '../../../components/iconify';
import { UserActionLogin } from '../../../redux/actions/UserAction';

import { storage } from '../../../services/storage';
// ----------------------------------------------------------------------

export default function LoginFormAdmin() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false);
  const [forms, setForms] = useState({
    username: '',
    password: '',
  });

  /// state  này nếu tồn tại thì trả về kiểu state.session.token
  ///  =>  storage.getCache('token')

  const token = useSelector((state) => state.session.token || storage.getCache('token'));

  useEffect(() => {
    const fetchToken = async () => {
      //  Hàm chỗ này anh thực thi kiểm tra token do token đẩy lên trên localstorage
      await token;
      if (token) {
        navigate('/dashboard', { replace: true });
      }
    };
    fetchToken();
  }, [token, navigate]); // khi token hoặc navigate thay đổi được thực thì component sẽ re render laị 
  const handleLoginAdmin = async () => {
    await dispatch(UserActionLogin(forms.username, forms.password));
    setForms({
      username: '',
      password: '',
    });
  };
  const handleChangeValue = (e) => {
    const value = e.target.value;
    setForms({
      ...forms,
      [e.target.name]: value,
    });
  };
  return (
    <>
      <Stack spacing={3}>
        <TextField name="username" value={forms.username} label="Username" onChange={handleChangeValue} />
        <TextField
          name="password"
          label="Password"
          onChange={handleChangeValue}
          value={forms.password}
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
      </Stack>

      <LoadingButton fullWidth size="large" type="submit" variant="contained" sx={{ my: 2 }} onClick={handleLoginAdmin}>
        Login
      </LoadingButton>
    </>
  );
}

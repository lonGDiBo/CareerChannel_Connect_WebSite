import * as React from 'react';
import dayjs from 'dayjs';
import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useNavigate, Link, useParams} from 'react-router-dom';
import { format } from 'date-fns';

// @mui
import { Grid, Button, Container, Stack, Typography, Box, TextField, InputAdornment, IconButton, FormControl, styled, FormLabel } from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

import palette from '../../../theme/palette';
// components
// css
import './styleUpFile.css'
// mock
import EVENTS from '../../../_mock/event';
// ----------------------------------------------------------------------

// ----------------------------------------------------------------------

export default function ManageAccountAdd() {
    const { id } = useParams();
  const events=EVENTS.find((item)=>item.id===id)
  if(events===undefined)
  console.log("events",events)
  const {name, firstdate, enddate, image, description}=events;
  const InputBox=styled(TextField)({
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
  const Label=styled(FormLabel)({
    fontSize: '20px',
    fontWeight: 'bold',
    color: `${palette.maincolor.primary}`
  });
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [age, setAge] = useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  const handleCancelClick = () => {
    navigate('/dashboard/event', { replace: true });
  };
  const [fday, setFValue] = React.useState(dayjs(firstdate));
  const [eday, setEValue] = React.useState(dayjs(enddate));
  return (
    <>
      <Helmet>
        <title> Dashboard: ManageAccount | Detail </title>
      </Helmet>

      <Container>
      <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
      <Typography variant="h4" gutterBottom>
        <Link to="/dashboard/event" style={{ textDecoration: 'none', color: 'black' }}>
            Sự kiện
        </Link>
          <ArrowForwardIosIcon>arrow</ArrowForwardIosIcon>
            Chỉnh sửa
      </Typography> 
      </Stack>
      
      <FormControl>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 10, sm: 10, md: 10 }}>
          <Grid item xs={12}>
              <Label>Tên</Label>
              <div>
                <InputBox 
                    type="text"
                    disabled
                    defaultValue={name}
                />
              </div>
          </Grid>
          <Grid item xs={12}>
          <Label>Mô tả</Label>
              <div>
              <InputBox type="text" 
              id="outlined-multiline-static"
              multiline
              rows={4}
              defaultValue={description}
              />
          </div>
          </Grid>
          <Grid item xs={4}>
            <Label>Thời gian bắt đầu</Label>
              <div>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                      <DemoContainer 
                        components={['DatePicker']}>
                          <DatePicker  
                          value={fday}
                          onChange={(newValue) => setFValue(newValue)} 
                          />
                      </DemoContainer>
                </LocalizationProvider>
              </div>
          </Grid>
          <Grid item xs={4}>
            <Label>Thời gian kết thúc</Label>
              <div>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DemoContainer 
                        components={['DatePicker']}
                    >
                        <DatePicker 
                        value={eday}
                        onChange={(newValue) => setEValue(newValue)} 
                        />
                    </DemoContainer>
                 </LocalizationProvider>
              </div>
          </Grid>
          <Grid item xs={4}>
            <Label>Hình ảnh mô tả</Label>
              <div>
                <InputBox
                    type="file"
                    id="image_uploads"
                    name="image_uploads"
                    accept="image/*"
                    multiple
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
            Lưu
          </ButtonAdd>
      </GroupButton>
      
      </Container>
    </>
  );
}

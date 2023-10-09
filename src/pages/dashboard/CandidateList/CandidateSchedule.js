import { Helmet } from 'react-helmet-async';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
// @mui

import * as MuiIcon from '@mui/icons-material'
import SmsFailedTwoToneIcon from '@mui/icons-material/SmsFailedTwoTone';
import {

  Stack,
  Container,
  Typography,
  Grid
  , Box,
  Paper,
  Avatar,
  FormControl,
  Button,
  TextField,
  InputAdornment,
  IconButton,
  Checkbox,
  Select,
  MenuItem,
  styled,
  FormLabel,
  ButtonGroup



} from '@mui/material';

import StarsIcon from '@mui/icons-material/Stars';
import InformationContext from '../../../components/information/InfomationContext';
// mock
import { getData } from '../../../_mock/Interviewer/InterviewerAPI';
// color
import palette from '../../../theme/palette';
// font
import typography from '../../../theme/typography';

import Iconify from '../../../components/iconify';

const avatarUrl = 'https://www.gravatar.com/avatar/HASH'
const Item = styled(Paper)(({ theme }) => ({
  // backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  backgroundColor: '#f9fafb',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'left',
  color: 'black',
  display: 'flex',
  alignItems: 'center'

}));
const AvatarDetail = styled(Avatar)({
  width: '100px',
  height: '100px',

});
const ItemDetail = styled(Item)({
  marginLeft: '20px',
  fontSize: '20px'
});
const ItemDetailName = styled(Item)({
  marginLeft: '20px',
  fontSize: '32px',
  fontWeight: 'bold'
});
const EmailIconDetail = styled(MuiIcon.Email)({
  marginRight: '5px',
  width: '2rem',
  height: '2rem'
});
const ButtonGoal = styled(Button)({
  height: '50px',
  width: '150px',

  backgroundColor: `${palette.maincolor.primary}`,
  color: `${palette.maincolor.white}`,
})

const InputBox = styled(TextField)({
  width: '100%'
});
const SelectBox = styled(Select)({
  width: '100%'
});
const ButtonAdd = styled(Button)({
  margin: '10px',
  textAlign: 'center',
  width: '150px',
  height: '50px',
  backgroundColor: `${palette.maincolor.primary}`,
  color: 'white'
});
const ButtonCancel = styled(Button)({
  margin: '10px',
  textAlign: 'center',
  width: '150px',
  height: '50px',
  backgroundColor: `${palette.maincolor.dark}`,
  color: 'white'
});
const GroupButton = styled(Container)({
  textAlign: 'center',
  marginTop: '10px'
});

const LabelFormSchedule = styled(FormLabel)({
  color: 'black',
  fontSize: 20,
  fontWeight: 'bold'
})



export default function CandidateSchedule() {

  const { id } = useParams();

  const [Interviewer, setInterviewer] = useState([])
  useEffect(() => {
    const url = `https://jsonplaceholder.typicode.com/users/${id}`;
    getData(url).then((response) => {
      setInterviewer(response);
    });

  }, []);
  console.log('post', Interviewer)

  const { name, email, phone, website, username } = Interviewer

  console.log(Interviewer);


  return (

    <>
      <Helmet>
        <title> CandidateID | Minimal UI </title>
      </Helmet>

      <Container>
        <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
          <Typography variant="h4" sx={{ color: 'blue' }} gutterBottom>
            Ứng viên <ArrowForwardIosIcon /> Danh sách <ArrowForwardIosIcon /> Thông tin chi tiết
          </Typography>


        </Stack >
        {Interviewer.id ?

          (<>

            <Box sx={{ flexGrow: 1 }}>

              {/* information */}
              <Grid container spacing={2}  >

                <Grid item spacing={2} xs={1} />
                <Grid item spacing={2} xs={10} >
                  <Item >
                    <AvatarDetail alt={name} src={avatarUrl} />
                    <Grid container spacing={2}  >
                      <Grid xs={12}>
                        <ItemDetailName>{name}</ItemDetailName>
                      </Grid>
                      <Grid xs={12}>
                        <ItemDetail >
                          <EmailIconDetail />
                          {email}
                        </ItemDetail>
                      </Grid>

                    </Grid>



                  </Item>

                </Grid>
                <Grid item spacing={2} xs={1} />

                <InformationContext icon={MuiIcon.Work} title="Vị trí ứng tuyển" context={phone} md={6} />
                <InformationContext icon={StarsIcon} title={'Cấp bậc'} context={website} md={6} />

                <InformationContext icon={MuiIcon.Lightbulb} title="Kĩ năng" context={phone} md={12} />
                <InformationContext icon={MuiIcon.Assignment} title="CV" context={phone} md={12} />

              </Grid>


              {/* form */}

              <Grid container rowSpacing={2} columnSpacing={{ xs: 12, sm: 10, }} style={{ marginTop: 30 }}>

                <Grid item xs={12} md={6}>
                  <LabelFormSchedule>Chọn người phỏng vấn</LabelFormSchedule>
                  <div>
                    <InputBox type="text" />
                  </div>
                </Grid>
                <Grid item xs={12} md={6}>
                  <LabelFormSchedule>Hình thức phỏng vấn</LabelFormSchedule>
                  <div>
                    <InputBox type="text" />
                  </div>
                </Grid>
                <Grid item xs={12} md={6}>
                  <LabelFormSchedule>Link Google Meet</LabelFormSchedule>
                  <div>
                    <InputBox type="text" />
                  </div>
                </Grid>
                <Grid item xs={12} md={6} >
                  <LabelFormSchedule>Địa điểm phỏng vấn</LabelFormSchedule>
                  <div>
                    <SelectBox className='manage'

                    >
                      <MenuItem value={10}>Admin</MenuItem>
                      <MenuItem value={20}>RECcer</MenuItem>
                      <MenuItem value={30}>Người phỏng vấn</MenuItem>
                    </SelectBox>
                  </div>
                </Grid>
                <Grid item xs={12} md={6}>
                  <LabelFormSchedule>Ngày phỏng vấn</LabelFormSchedule>
                  <div>
                    <InputBox
                      className='manage'
                      name="password"
                      label="Password"


                    />
                  </div>
                </Grid>
                <Grid item xs={12} md={6}>
                  <LabelFormSchedule>Giờ phỏng vấn</LabelFormSchedule>
                  <div>
                    <InputBox
                      className='manage'
                      name="password"
                      label="Password"

                    />
                  </div>
                </Grid>
              </Grid>


              {/* button */}

              <GroupButton style={{marginTop:30}}>
                <ButtonCancel >
                  Hủy
                </ButtonCancel>
                <ButtonAdd  >
                  Tạo
                </ButtonAdd>
              </GroupButton>







            </Box>
          </>
          ) :


          (
            <>
              <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
                <SmsFailedTwoToneIcon style={{ fontSize: '100px' }} />
                <Typography>Dữ liệu đã xóa hoặc không tồn tại</Typography>
              </div>
            </>
          )}


      </Container>

    </>

  );
}


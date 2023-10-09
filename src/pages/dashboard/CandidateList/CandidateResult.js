import { Helmet } from 'react-helmet-async';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
// @mui
import { styled } from '@mui/material/styles';
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


} from '@mui/material';
import Button from '@mui/material/Button';
import StarsIcon from '@mui/icons-material/Stars';
import InformationContext from '../../../components/information/InfomationContext';
// mock
import { getData } from '../../../_mock/Interviewer/InterviewerAPI';
// color
import palette from '../../../theme/palette';
// font
import typography from '../../../theme/typography';

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






export default function CandidateResult() {

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
            Ứng viên 
            <ArrowForwardIosIcon /> 
            Danh sách 
            <ArrowForwardIosIcon /> 
            Thông tin chi tiết 
            <ArrowForwardIosIcon /> 
            Kết quả
          </Typography>


        </Stack>
        {Interviewer.id ?

          (<>

            <Box sx={{ flexGrow: 1 }}>
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
                <InformationContext icon={MuiIcon.Transgender} title={'Giới tính'} context={'Nam'} md={6} />

                <InformationContext icon={MuiIcon.Phone} title="Số điện thoại" context={phone} md={6} />
                <InformationContext icon={MuiIcon.LocationOn} title="Địa chỉ" context={phone} md={12} />


               





              </Grid>
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


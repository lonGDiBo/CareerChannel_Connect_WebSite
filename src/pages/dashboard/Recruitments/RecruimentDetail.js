// import @hook and @file
import { Helmet } from 'react-helmet-async';
import { useParams } from 'react-router-dom';
//  import @mui
import { Stack, Container, Typography, Box, styled, Button, Card, Grid } from '@mui/material';
import BusinessIcon from '@mui/icons-material/Business';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import SmsFailedTwoToneIcon from '@mui/icons-material/SmsFailedTwoTone';
import StarsIcon from '@mui/icons-material/Stars';
import RequestPageIcon from '@mui/icons-material/RequestPage';
import DescriptionIcon from '@mui/icons-material/Description';
import FavoriteIcon from '@mui/icons-material/Favorite';
// import @mock_data
import RECRUITMENTDATA_ID from '../../../_mock/recruitment';

const RecruitmentDetail = () => {
  const { id } = useParams();
  console.log(id)
  const getDataId = RECRUITMENTDATA_ID.find((item) => item.id === id);
  console.log(getDataId);
  const MyContainerTitle = styled(Stack)({
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
  });
  const MyContent = styled(Stack)({
    margin: '20px 0',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    // background:'green'
  });
  const TextTitle = styled(Typography)({
    color: '#608fb7',
    fontSize: '24px',
    margin: '0 0.2em 0 0.2em',
  });
  const BoxHeader = styled(Box)({
    display: 'flex',
    justifyContent: 'space-between',
  });
  const ContainerBox = styled(Card)({
    margin: '5em auto',
    padding: '2rem',
  });
  const BoxChild = styled(Card)({
    margin: '10px 0',
    padding: '1rem',
  });
  return (
    <>
      <Helmet>
        <title>Recruiment | Detail</title>
      </Helmet>
      <Container>
        <BoxHeader>
          <MyContainerTitle>
            <TextTitle>Tuyển dụng</TextTitle>
            <TextTitle>
              <ArrowForwardIosIcon color="inherit" fontSize="small" />
            </TextTitle>

            <TextTitle>Thông tin chi tiết</TextTitle>
          </MyContainerTitle>
          <Button variant="contained">Sửa</Button>
        </BoxHeader>

        <ContainerBox>
          {getDataId ? (
            <Grid container>
              <Grid item xs={12}>
                <Typography variant="h3" textTransform="capitalize">
                  {getDataId.position}
                </Typography>
                <Typography textTransform="capitalize" style={{ color: '#6fde6f' }}>
                  Luơng tới : {getDataId.salary}
                </Typography>
              </Grid>

              <Grid item xs={12}>
                <BoxChild sx={{ boxShadow: 2 }}>
                  <MyContent>
                    <StarsIcon />
                    <Typography marginLeft="10px" textTransform="capitalize">
                      {getDataId.level}{' '}
                    </Typography>
                  </MyContent>
                  <MyContent>
                    <LocationOnIcon />
                    <Typography marginLeft="10px" textTransform="capitalize">
                      {getDataId.form}{' '}
                    </Typography>
                  </MyContent>
                  <MyContent>
                    <BusinessIcon />
                    <Typography marginLeft="10px" textTransform="capitalize">
                      {getDataId.address}{' '}
                    </Typography>
                  </MyContent>
                </BoxChild>
                <BoxChild sx={{ boxShadow: 2 }}>
                  <MyContent>
                    <LightbulbIcon />
                    <Typography marginLeft="10px" variant="h4" textTransform="capitalize">
                      Kỹ năng
                    </Typography>
                  </MyContent>
                  <MyContent>
                    <Typography marginLeft="10px" textTransform="capitalize">
                      {getDataId?.requirement?.skills.join(', ')}
                    </Typography>
                  </MyContent>
                </BoxChild>
                <BoxChild sx={{ boxShadow: 2 }}>
                  <MyContent>
                    <RequestPageIcon />
                    <Typography marginLeft="10px" variant="h4" textTransform="capitalize">
                      Yêu cầu
                    </Typography>
                  </MyContent>
                  <MyContent>
                    <Typography marginLeft="10px" textTransform="capitalize">
                      {getDataId?.requirement?.description}
                    </Typography>
                  </MyContent>
                </BoxChild>
                <BoxChild sx={{ boxShadow: 2 }}>
                  <MyContent>
                    <DescriptionIcon />
                    <Typography marginLeft="10px" variant="h4" textTransform="capitalize">
                      Mô tả
                    </Typography>
                  </MyContent>
                  <MyContent>
                    <Typography marginLeft="10px" textTransform="capitalize">
                      {getDataId?.requirement?.description}
                    </Typography>
                  </MyContent>
                </BoxChild>
                <BoxChild sx={{ boxShadow: 2 }}>
                  <MyContent>
                    <FavoriteIcon />
                    <Typography marginLeft="10px" variant="h4" textTransform="capitalize">
                      Quyền lợi
                    </Typography>
                  </MyContent>
                  <MyContent>
                    <Typography marginLeft="10px" textTransform="capitalize">
                      {getDataId?.requirement?.description}
                    </Typography>
                  </MyContent>
                  <MyContent>
                    <Typography marginLeft="10px" textTransform="capitalize">
                      {getDataId?.requirement?.description}
                    </Typography>
                  </MyContent>
                </BoxChild>
              </Grid>
            </Grid>
          ) : (
            <>
              <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
                <SmsFailedTwoToneIcon style={{ fontSize: '100px' }} />
                <Typography>Thông tin tuyển dụng hiện hết hạn hoặc không tồn tại</Typography>
              </div>
            </>
          )}
        </ContainerBox>
      </Container>
    </>
  );
};
export default RecruitmentDetail;

